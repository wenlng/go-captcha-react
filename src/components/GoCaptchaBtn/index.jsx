import React, {Component, Fragment} from 'react'
import PropTypes from "prop-types"
import './style.css'
import GoCaptcha from '../GoCaptcha'
import 'antd/dist/antd.css';
import { Popover } from 'antd';

export default class GoCaptchaBtn extends Component{
  static defaultProps = {
    // ============================
    // 为了解决状态冲突加一个 overing
    // ============================
    value: PropTypes.oneOf(['default', 'check', 'error', 'over', 'overing', 'success']),
    width: '300px',
    height: '50px',
    maxDot: PropTypes.number,
    imageBase64: PropTypes.string,
    thumbBase64: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      popoverVisible: false,
      captStatus: 'default',
      imageBase64: '',
      thumbBase64: ''
    }
  }

  render() {
    const {
      popoverVisible,
      captStatus,
      imageBase64,
      thumbBase64
    } = this.state
    const {
      width,
      height
    } = this.props

    return (
      <Fragment>
        <div className="wg-cap-btn" style={{
          width: width,
          height: height
        }}>
          <div className={(`wg-cap-btn__inner wg-cap-active__${captStatus}`)}>
            {/* wg-cap-active__default wg-cap-active__error wg-cap-active__over wg-cap-active__success */}
            <Popover
              content={
                <GoCaptcha
                  value={popoverVisible}
                  width="300px"
                  height="300px"
                  maxDot={5}
                  calcPosType="screen"
                  imageBase64={imageBase64}
                  thumbBase64={thumbBase64}
                  close={this.handleCloseEvent}
                  refresh={this.handleRefreshEvent}
                  confirm={this.handleConfirmEvent}
                />
              }
              visible={popoverVisible}
              forceRender={true}
              onVisibleChange={this.handleVisibleChange}
              trigger="click">
              <div onClick={this.handleBtnEvent} className="wg-cap-state__default">
                {/*默认状态*/}
                <div className="wg-cap-state__inner">
                  <div className="wg-cap-btn__ico wg-cap-btn__verify">
                    <img
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDIwMCAyMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwMCAyMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojM0U3Q0ZGO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTAwIiBjeT0iMTAwIiByPSI5Ni4zIi8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNDAuOCw2NC40bC0zOS42LTExLjloLTIuNEw1OS4yLDY0LjRjLTEuNiwwLjgtMi44LDIuNC0yLjgsNHYyNC4xYzAsMjUuMywxNS44LDQ1LjksNDIuMyw1NC42CgljMC40LDAsMC44LDAuNCwxLjIsMC40YzAuNCwwLDAuOCwwLDEuMi0wLjRjMjYuNS04LjcsNDIuMy0yOC45LDQyLjMtNTQuNlY2OC4zQzE0My41LDY2LjgsMTQyLjMsNjUuMiwxNDAuOCw2NC40eiIvPgo8L3N2Zz4K" alt=""/>
                  </div>
                  <span className="wg-cap-btn__text">点击按键进行人机验证</span>
                </div>
              </div>
              <div onClick={this.handleCancelEvent} className="wg-cap-state__check">
                {/* 验证状态 */}
                <div className="wg-cap-state__inner">
                  <div className="wg-cap-btn__ico">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB0PSIxNjI3MDU1NTg2NTk0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyMTEiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMTIwLjI1OTQ1NiA1MTIuMDAxMDIzbS0xMTcuOTIzNzYgMGExMTUuMjM4IDExNS4yMzggMCAxIDAgMjM1Ljg0NzUxOSAwIDExNS4yMzggMTE1LjIzOCAwIDEgMC0yMzUuODQ3NTE5IDBaIiBwLWlkPSIxMjEyIiBmaWxsPSIjZmZhMDAwIj48L3BhdGg+PHBhdGggZD0iTTUxMS45OTk0ODggNTEyLjAwMTAyM20tMTE3LjkyMTcxMyAwYTExNS4yMzYgMTE1LjIzNiAwIDEgMCAyMzUuODQzNDI2IDAgMTE1LjIzNiAxMTUuMjM2IDAgMSAwLTIzNS44NDM0MjYgMFoiIHAtaWQ9IjEyMTMiIGZpbGw9IiNmZmEwMDAiPjwvcGF0aD48cGF0aCBkPSJNOTAzLjczOTUyMSA1MTIuMDAxMDIzbS0xMTcuOTIzNzYgMGExMTUuMjM4IDExNS4yMzggMCAxIDAgMjM1Ljg0NzUxOSAwIDExNS4yMzggMTE1LjIzOCAwIDEgMC0yMzUuODQ3NTE5IDBaIiBwLWlkPSIxMjE0IiBmaWxsPSIjZmZhMDAwIj48L3BhdGg+PC9zdmc+"
                      alt=""/>
                  </div>
                  <span className="wg-cap-btn__text">正在进行人机验证...</span>
                </div>
              </div>
              <div onClick={this.handleBtnEvent} className="wg-cap-state__error">
                {/*验证失败状态*/}
                <div className="wg-cap-state__inner">
                  <div className="wg-cap-btn__ico">
                    <img
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDAgMjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0VENDYzMDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODQsMjYuNkwxMDIuNCwyLjFoLTQuOUwxNiwyNi42Yy0zLjMsMS42LTUuNyw0LjktNS43LDguMnY0OS44YzAsNTIuMiwzMi42LDk0LjcsODcuMywxMTIuNgoJYzAuOCwwLDEuNiwwLjgsMi40LDAuOHMxLjYsMCwyLjQtMC44YzU0LjctMTgsODcuMy01OS42LDg3LjMtMTEyLjZWMzQuN0MxODkuOCwzMS41LDE4Ny4zLDI4LjIsMTg0LDI2LjZ6IE0xMzQuNSwxMjMuMQoJYzMuMSwzLjEsMy4xLDguMiwwLDExLjNjLTEuNiwxLjYtMy42LDIuMy01LjcsMi4zcy00LjEtMC44LTUuNy0yLjNMMTAwLDExMS4zbC0yMy4xLDIzLjFjLTEuNiwxLjYtMy42LDIuMy01LjcsMi4zCgljLTIsMC00LjEtMC44LTUuNy0yLjNjLTMuMS0zLjEtMy4xLTguMiwwLTExLjNMODguNywxMDBMNjUuNSw3Ni45Yy0zLjEtMy4xLTMuMS04LjIsMC0xMS4zYzMuMS0zLjEsOC4yLTMuMSwxMS4zLDBMMTAwLDg4LjcKCWwyMy4xLTIzLjFjMy4xLTMuMSw4LjItMy4xLDExLjMsMGMzLjEsMy4xLDMuMSw4LjIsMCwxMS4zTDExMS4zLDEwMEwxMzQuNSwxMjMuMXoiLz4KPC9zdmc+Cg=="
                      alt="失败"/>
                  </div>
                  <span>人机验证失败 <em>点击重试</em></span>
                </div>
              </div>
              <div onClick={this.handleBtnEvent} className="wg-cap-state__over">
                {/*验证次数过多状态*/}
                <div className="wg-cap-state__inner">
                  <div className="wg-cap-btn__ico">
                    <img
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDAgMjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0VENDYzMDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODQsMjYuNkwxMDIuNCwyLjFoLTQuOUwxNiwyNi42Yy0zLjMsMS42LTUuNyw0LjktNS43LDguMnY0OS44YzAsNTIuMiwzMi42LDk0LjcsODcuMywxMTIuNgoJYzAuOCwwLDEuNiwwLjgsMi40LDAuOHMxLjYsMCwyLjQtMC44YzU0LjctMTgsODcuMy01OS42LDg3LjMtMTEyLjZWMzQuN0MxODkuOCwzMS41LDE4Ny4zLDI4LjIsMTg0LDI2LjZ6IE0xMzQuNSwxMjMuMQoJYzMuMSwzLjEsMy4xLDguMiwwLDExLjNjLTEuNiwxLjYtMy42LDIuMy01LjcsMi4zcy00LjEtMC44LTUuNy0yLjNMMTAwLDExMS4zbC0yMy4xLDIzLjFjLTEuNiwxLjYtMy42LDIuMy01LjcsMi4zCgljLTIsMC00LjEtMC44LTUuNy0yLjNjLTMuMS0zLjEtMy4xLTguMiwwLTExLjNMODguNywxMDBMNjUuNSw3Ni45Yy0zLjEtMy4xLTMuMS04LjIsMC0xMS4zYzMuMS0zLjEsOC4yLTMuMSwxMS4zLDBMMTAwLDg4LjcKCWwyMy4xLTIzLjFjMy4xLTMuMSw4LjItMy4xLDExLjMsMGMzLjEsMy4xLDMuMSw4LjIsMCwxMS4zTDExMS4zLDEwMEwxMzQuNSwxMjMuMXoiLz4KPC9zdmc+Cg=="
                      alt="失败"/>
                  </div>
                  <span>点击次数过多 <em>点击重试</em></span>
                </div>
              </div>
              <div onClick={this.handleCancelEvent} className="wg-cap-state__success">
                {/*验证成功状态*/}
                <div className="wg-cap-state__inner">
                <div className="wg-cap-btn__ico">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDAgMjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzVFQUEyRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODMuMywyNy4yTDEwMi40LDIuOWgtNC45TDE2LjcsMjcuMkMxMy40LDI4LjgsMTEsMzIsMTEsMzUuM3Y0OS40YzAsNTEuOCwzMi40LDkzLjksODYuNiwxMTEuNwoJYzAuOCwwLDEuNiwwLjgsMi40LDAuOGMwLjgsMCwxLjYsMCwyLjQtMC44YzU0LjItMTcuOCw4Ni42LTU5LjEsODYuNi0xMTEuN1YzNS4zQzE4OSwzMiwxODYuNiwyOC44LDE4My4zLDI3LjJ6IE0xNDYuMSw4MS40CglsLTQ4LjUsNDguNWMtMS42LDEuNi0zLjIsMi40LTUuNywyLjRjLTIuNCwwLTQtMC44LTUuNy0yLjRMNjIsMTA1LjdjLTMuMi0zLjItMy4yLTguMSwwLTExLjNjMy4yLTMuMiw4LjEtMy4yLDExLjMsMGwxOC42LDE4LjYKCWw0Mi45LTQyLjljMy4yLTMuMiw4LjEtMy4yLDExLjMsMEMxNDkuNCw3My4zLDE0OS40LDc4LjIsMTQ2LjEsODEuNEwxNDYuMSw4MS40eiIvPgo8L3N2Zz4K"
                    alt="成功"/>
                </div>
                <span>人机验证已通过</span>
              </div>
              </div>
            </Popover>
          </div>
        </div>
      </Fragment>
    )
  }

  // ===========
  static getDerivedStateFromProps(nextProps, prevState) {
    const res = {}
    let count = 0

    if (prevState.popoverVisible) {
      res['captStatus'] = 'check'
      count++
      if (prevState.captStatus !== 'check') {
        // nextProps.refresh && nextProps.refresh()
      }
    } else if (prevState.captStatus === 'check') {
      res['captStatus'] = nextProps.value
      count++
    }

    if (!prevState.popoverVisible) {
      res['imageBase64'] = ''
      res['thumbBase64'] = ''
    } else {
      res['imageBase64'] = nextProps.imageBase64
      res['thumbBase64'] = nextProps.thumbBase64
    }

    if (nextProps.value !== prevState.captStatus){
      if (prevState.captStatus !== 'check') {
        res['captStatus'] = nextProps.value
        count++
      }

      // ============================
      // 为了解决状态冲突加一个 overing
      // ============================
      if (nextProps.value === 'overing') {
        res['popoverVisible'] = false
        res['captStatus'] = 'over'
        count++
        if (nextProps.value !== 'over'){
          nextProps.changeValue && nextProps.changeValue('over')
        }
      } else if (nextProps.value === 'success') {
        res['popoverVisible'] = false
        res['captStatus'] = 'success'
        count++
      }
    }

    return (count ? res : null)
  }

  // ================= Methods ================
  handleCancelEvent = (e) => {
    // 阻止合成事件的冒泡
    e.stopPropagation();
    // 阻止与原生事件的冒泡
    e.nativeEvent.stopImmediatePropagation();
    return false
  }
  handleVisibleChange = (visible) => {
    this.setState({popoverVisible: visible})
    if (visible) {
      this.props.refresh && this.props.refresh()
    }
  }

  handleBtnEvent = () => {
    this.setState({
      popoverVisible: true
    })
  }

  handleRefreshEvent = () => {
    this.setState({
      captStatus: 'check'
    })
    this.props.refresh && this.props.refresh()
  }

  handleConfirmEvent = (data) => {
    this.props.confirm && this.props.confirm(data)
  }

  handleCloseEvent = () => {
    this.setState({
      popoverVisible:false
    })
  }
}