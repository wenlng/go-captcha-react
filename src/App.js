import React, {Component} from "react";
import './App.css';
import GoCaptchaBtn from './components/GoCaptchaBtn'
import Qs from 'qs'
import Axios from 'axios'
import Lodash from 'lodash'
import 'antd/dist/antd.css';
import { message } from 'antd';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      needCapt: false,
      popoverVisible: true,
      captBase64: '',
      captThumbBase64: '',
      captKey: '',
      captStatus: 'default',
      captExpires: 0,
      captAutoRefreshCount: 0,
    }
  }

  render() {
    const {captStatus, captBase64, captThumbBase64} = this.state
    return (
      <div id="app">
        <div className="go-captcha-wrap">
          <GoCaptchaBtn
            class="go-captcha-btn"
            value={captStatus}
            width="100%"
            height="50px"
            imageBase64={captBase64}
            thumbBase64={captThumbBase64}
            changeValue={(val) => this.setState({captStatus: val})}
            confirm={this.handleConfirm}
            refresh={this.handleRequestCaptCode}
          />
        </div>
      </div>
    );
  }

  // ================= Methods ================
  /**
   * 处理请求验证码
   */
  handleRequestCaptCode = () => {
    this.setState({
      captBase64: '',
      captThumbBase64: '',
      captKey: ''
    })

    Axios({
      method: 'get',
      url: '/api/go_captcha_data',
    }).then((response)=>{
      const {data = {}} = response;
      if ((data['code'] || 0) === 0) {
        if (Lodash.isEmpty(data)) {
          return
        }

        this.setState({
          captBase64: data['image_base64'] || '',
          captThumbBase64:  data['thumb_base64'] || '',
          captKey:  data['captcha_key'] || ''
        })
      } else {
        message.warning(`获取人机验证数据失败`)
      }
    })
  }
  /**
   * 处理验证码校验请求
   */
  handleConfirm = (dots) => {
    if (Lodash.size(dots) <= 0) {
      message.warning(`请进行人机验证再操作`)
      return
    }

    let dotArr = []
    Lodash.forEach(dots, (dot) => {
      dotArr.push(dot.x, dot.y)
    })

    Axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      url: '/api/go_captcha_check_data',
      data: Qs.stringify({
        dots: dotArr.join(','),
        key: this.state.captKey || ''
      })
    }).then((response)=>{
      const {data = {}} = response;

      if ((data['code'] || 0) === 0) {
        message.success(`人机验证成功`)
        this.setState({
          captStatus: 'success',
          captAutoRefreshCount: 0
        })
      } else {
        const {captAutoRefreshCount = 0} = this.state
        message.warning(`人机验证失败`)

        if (captAutoRefreshCount > 5) {
          this.setState({
            captStatus: 'overing',
            captAutoRefreshCount: 0
          })

          return
        }

        this.handleRequestCaptCode()
        this.setState({
          captStatus: 'error',
          captAutoRefreshCount: captAutoRefreshCount + 1
        })
      }
    })
  }
}
