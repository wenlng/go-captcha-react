import React__default, { createElement, useState, useCallback, useRef, useEffect } from 'react';
import classnames from 'classnames';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/**\n * @Author Awen\n * @Date 2024/05/25\n * @Email wengaolng@gmail.com\n **/\n.index-module_iconBlock__Y1IUb {\n  flex: 1;\n}\n.index-module_dots__2OJFw {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n}\n.index-module_dots__2OJFw .dot {\n  position: absolute;\n  z-index: 10;\n  width: 20px;\n  height: 20px;\n  color: #cedffe;\n  background: #3e7cff;\n  border: 2px solid #f7f9fb;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  cursor: default;\n  font-weight: 600;\n}\n";
var cstyles = {"iconBlock":"index-module_iconBlock__Y1IUb","dots":"index-module_dots__2OJFw"};
styleInject(css_248z);

var css_248z$1 = "/**\n * @Author Awen\n * @Date 2024/05/25\n * @Email wengaolng@gmail.com\n **/\n.gocaptcha-module_wrapper__Kpdey {\n  padding: 12px 16px;\n  background: #ffffff;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n}\n.gocaptcha-module_theme__h-Ytl {\n  border: 1px solid rgba(206, 223, 254, 0.5);\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  border-radius: 8px;\n  box-shadow: 0 0 20px rgba(100, 100, 100, 0.1);\n  -webkit-box-shadow: 0 0 20px rgba(100, 100, 100, 0.1);\n  -moz-box-shadow: 0 0 20px rgba(100, 100, 100, 0.1);\n}\n.gocaptcha-module_header__LjDUC {\n  height: 36px;\n  width: 100%;\n  font-size: 15px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.gocaptcha-module_header__LjDUC span {\n  flex: 1;\n  padding-right: 5px;\n}\n.gocaptcha-module_header__LjDUC em {\n  padding: 0 3px;\n  font-weight: bold;\n  color: #3e7cff;\n  font-style: normal;\n}\n.gocaptcha-module_body__KJKNu {\n  position: relative;\n  width: 100%;\n  margin-top: 10px;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  background: #34383e;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  overflow: hidden;\n}\n.gocaptcha-module_picture__LRwbY {\n  position: relative;\n  z-index: 10;\n  width: 100%;\n}\n.gocaptcha-module_loading__Y-PYK {\n  position: absolute;\n  z-index: 9;\n  top: 50%;\n  left: 50%;\n  width: 68px;\n  height: 68px;\n  margin-left: -34px;\n  margin-top: -34px;\n  line-height: 68px;\n  text-align: center;\n}\n.gocaptcha-module_footer__Ywdpy {\n  width: 100%;\n  height: 60px;\n  color: #34383e;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  align-items: center;\n  padding-top: 15px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.gocaptcha-module_iconBlock__mVB8B {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  align-items: center;\n}\n.gocaptcha-module_iconBlock__mVB8B svg {\n  color: #3C3C3C;\n  fill: #3C3C3C;\n  margin: 0 5px;\n  cursor: pointer;\n}\n.gocaptcha-module_buttonBlock__EZ4vg {\n  width: 120px;\n  height: 40px;\n}\n.gocaptcha-module_buttonBlock__EZ4vg button {\n  width: 100%;\n  height: 40px;\n  letter-spacing: 2px;\n  text-align: center;\n  padding: 9px 15px;\n  font-size: 15px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  color: #fff;\n  background-color: #4e87ff;\n  border: 1px solid #4e87ff;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  transition: 0.1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.gocaptcha-module_dragSlideBar__noauW {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  touch-action: none;\n}\n.gocaptcha-module_dragLine__3B9KR {\n  position: absolute;\n  height: 14px;\n  background: #e0e0e0;\n  left: 0;\n  right: 0;\n  top: 50%;\n  margin-top: -7px;\n  -webkit-border-radius: 7px;\n  -moz-border-radius: 7px;\n  border-radius: 7px;\n}\n.gocaptcha-module_dragBlock__bFlwx {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -22px;\n  width: 82px;\n  height: 44px;\n  z-index: 10;\n  background: #3e7cff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-border-radius: 24px;\n  -moz-border-radius: 24px;\n  border-radius: 24px;\n  box-shadow: 0 0 20px rgba(100, 100, 100, 0.35);\n  -webkit-box-shadow: 0 0 20px rgba(100, 100, 100, 0.35);\n  -moz-box-shadow: 0 0 20px rgba(100, 100, 100, 0.35);\n}\n.gocaptcha-module_dragBlock__bFlwx {\n  color: #ffffff;\n  fill: #ffffff;\n}\n";
var styles = {"wrapper":"gocaptcha-module_wrapper__Kpdey","theme":"gocaptcha-module_theme__h-Ytl","header":"gocaptcha-module_header__LjDUC","body":"gocaptcha-module_body__KJKNu","picture":"gocaptcha-module_picture__LRwbY","loading":"gocaptcha-module_loading__Y-PYK","footer":"gocaptcha-module_footer__Ywdpy","iconBlock":"gocaptcha-module_iconBlock__mVB8B","buttonBlock":"gocaptcha-module_buttonBlock__EZ4vg","dragSlideBar":"gocaptcha-module_dragSlideBar__noauW","dragLine":"gocaptcha-module_dragLine__3B9KR","dragBlock":"gocaptcha-module_dragBlock__bFlwx"};
styleInject(css_248z$1);

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const defaultConfig = () => ({
  width: 300,
  height: 240,
  thumbWidth: 150,
  thumbHeight: 40,
  verticalPadding: 16,
  horizontalPadding: 12,
  showTheme: true
});

const Icon = props => createElement("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 200 200",
  width: 26,
  height: 26
}, props), createElement("path", {
  d: "M100.1,189.9C100.1,189.9,100,189.9,100.1,189.9c-49.7,0-90-40.4-90-89.9c0-49.6,40.4-89.9,89.9-89.9\n\t\tc49.6,0,89.9,40.4,89.9,89.9c0,18.2-5.4,35.7-15.6,50.7c-1.5,2.1-3.6,3.4-6.1,3.9c-2.5,0.4-5-0.1-7-1.6c-4.2-3-5.3-8.6-2.4-12.9\n\t\tc8.1-11.9,12.4-25.7,12.4-40.1c0-39.2-31.9-71.1-71.1-71.1c-39.2,0-71.1,31.9-71.1,71.1c0,39.2,31.9,71.1,71.1,71.1\n\t\tc7.7,0,15.3-1.2,22.6-3.6c2.4-0.8,4.9-0.6,7.2,0.5c2.2,1.1,3.9,3.1,4.7,5.5c1.6,4.9-1,10.2-5.9,11.9\n\t\tC119.3,188.4,109.8,189.9,100.1,189.9z M73,136.4C73,136.4,73,136.4,73,136.4c-2.5,0-4.9-1-6.7-2.8c-3.7-3.7-3.7-9.6,0-13.3\n\t\tL86.7,100L66.4,79.7c-3.7-3.7-3.7-9.6,0-13.3c3.7-3.7,9.6-3.7,13.3,0L100,86.7l20.3-20.3c1.8-1.8,4.1-2.8,6.7-2.8c0,0,0,0,0,0\n\t\tc2.5,0,4.9,1,6.7,2.8c1.8,1.8,2.8,4.1,2.8,6.7c0,2.5-1,4.9-2.8,6.7L113.3,100l20.3,20.3c3.7,3.7,3.7,9.6,0,13.3\n\t\tc-3.7,3.7-9.6,3.7-13.3,0L100,113.3l-20.3,20.3C77.9,135.4,75.5,136.4,73,136.4z"
}));

const Icon$1 = props => createElement("svg", Object.assign({
  width: 26,
  height: 26
}, props, {
  viewBox: "0 0 200 200",
  xmlns: "http://www.w3.org/2000/svg"
}), createElement("path", {
  d: "M135,149.9c-10.7,7.6-23.2,11.4-36,11.2c-1.7,0-3.4-0.1-5-0.3c-0.7-0.1-1.4-0.2-2-0.3c-1.3-0.2-2.6-0.4-3.9-0.6\n\tc-0.8-0.2-1.6-0.4-2.3-0.5c-1.2-0.3-2.5-0.6-3.7-1c-0.6-0.2-1.2-0.4-1.7-0.6c-1.4-0.5-2.8-1-4.2-1.5c-0.3-0.1-0.6-0.3-0.9-0.4\n\tc-1.6-0.7-3.2-1.4-4.7-2.3c-0.1,0-0.1-0.1-0.2-0.1c-5.1-2.9-9.8-6.4-14-10.6c-0.1-0.1-0.1-0.1-0.2-0.2c-1.3-1.3-2.5-2.7-3.7-4.1\n\tc-0.2-0.3-0.5-0.6-0.7-0.9c-8.4-10.6-13.5-24.1-13.5-38.8h14.3c0.4,0,0.7-0.2,0.9-0.5c0.2-0.3,0.2-0.8,0-1.1L29.5,60.9\n\tc-0.2-0.3-0.5-0.5-0.9-0.5c-0.4,0-0.7,0.2-0.9,0.5L3.8,97.3c-0.2,0.3-0.2,0.7,0,1.1c0.2,0.3,0.5,0.5,0.9,0.5h14.3\n\tc0,17.2,5.3,33.2,14.3,46.4c0.1,0.2,0.2,0.4,0.3,0.6c0.9,1.4,2,2.6,3,3.9c0.4,0.5,0.7,1,1.1,1.5c1.5,1.8,3,3.5,4.6,5.2\n\tc0.2,0.2,0.3,0.3,0.5,0.5c5.4,5.5,11.5,10.1,18.2,13.8c0.2,0.1,0.3,0.2,0.5,0.3c1.9,1,3.9,2,5.9,2.9c0.5,0.2,1,0.5,1.5,0.7\n\tc1.7,0.7,3.5,1.3,5.2,1.9c0.8,0.3,1.7,0.6,2.5,0.8c1.5,0.5,3.1,0.8,4.7,1.2c1.1,0.2,2.1,0.5,3.2,0.7c0.4,0.1,0.9,0.2,1.3,0.3\n\tc1.5,0.3,3,0.4,4.5,0.6c0.5,0.1,1.1,0.2,1.6,0.2c2.7,0.3,5.4,0.4,8.1,0.4c16.4,0,32.5-5.1,46.2-14.8c4.4-3.1,5.5-9.2,2.4-13.7\n\tC145.5,147.8,139.4,146.7,135,149.9 M180.6,98.9c0-17.2-5.3-33.1-14.2-46.3c-0.1-0.2-0.2-0.5-0.4-0.7c-1.1-1.6-2.3-3.1-3.5-4.6\n\tc-0.1-0.2-0.3-0.4-0.4-0.6c-8.2-10.1-18.5-17.9-30.2-23c-0.3-0.1-0.6-0.3-1-0.4c-1.9-0.8-3.8-1.5-5.7-2.1c-0.7-0.2-1.4-0.5-2.1-0.7\n\tc-1.7-0.5-3.4-0.9-5.1-1.3c-0.9-0.2-1.9-0.5-2.8-0.7c-0.5-0.1-0.9-0.2-1.4-0.3c-1.3-0.2-2.6-0.3-3.8-0.5c-0.9-0.1-1.8-0.3-2.6-0.3\n\tc-2.1-0.2-4.3-0.3-6.4-0.3c-0.4,0-0.8-0.1-1.2-0.1c-0.1,0-0.1,0-0.2,0c-16.4,0-32.4,5-46.2,14.8C49,35,48,41.1,51,45.6\n\tc3.1,4.4,9.1,5.5,13.5,2.4c10.6-7.5,23-11.3,35.7-11.2c1.8,0,3.6,0.1,5.4,0.3c0.6,0.1,1.1,0.1,1.6,0.2c1.5,0.2,2.9,0.4,4.3,0.7\n\tc0.6,0.1,1.3,0.3,1.9,0.4c1.4,0.3,2.8,0.7,4.2,1.1c0.4,0.1,0.9,0.3,1.3,0.4c1.6,0.5,3.1,1.1,4.6,1.7c0.2,0.1,0.3,0.1,0.5,0.2\n\tc9,3.9,17,10,23.2,17.6c0,0,0.1,0.1,0.1,0.2c8.7,10.7,14,24.5,14,39.4H147c-0.4,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.2,0.8,0,1.1l24,36.4\n\tc0.2,0.3,0.5,0.5,0.9,0.5c0.4,0,0.7-0.2,0.9-0.5l23.9-36.4c0.2-0.3,0.2-0.7,0-1.1c-0.2-0.3-0.5-0.5-0.9-0.5L180.6,98.9L180.6,98.9\n\tL180.6,98.9z"
}));

const Icon$2 = props => createElement("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "xMidYMid",
  width: 84,
  height: 84
}, props), createElement("circle", {
  cx: "50",
  cy: "36.8101",
  r: "10",
  fill: "#3e7cff"
}, createElement("animate", {
  attributeName: "cy",
  dur: "1s",
  repeatCount: "indefinite",
  calcMode: "spline",
  keySplines: "0.45 0 0.9 0.55;0 0.45 0.55 0.9",
  keyTimes: "0;0.5;1",
  values: "23;77;23"
})));

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
function getDomXY(dom) {
  let x = 0;
  let y = 0;
  if (dom.getBoundingClientRect) {
    const box = dom.getBoundingClientRect();
    const D = document.documentElement;
    x = box.left + Math.max(D.scrollLeft, document.body.scrollLeft) - D.clientLeft;
    y = box.top + Math.max(D.scrollTop, document.body.scrollTop) - D.clientTop;
  } else {
    while (dom !== document.body) {
      x += dom.offsetLeft;
      y += dom.offsetTop;
      dom = dom.offsetParent;
    }
  }
  return {
    domX: x,
    domY: y
  };
}
function checkTargetFather(that, e) {
  let parent = e.relatedTarget;
  try {
    while (parent && parent !== that) {
      parent = parent.parentNode;
    }
  } catch (e) {
    console.warn(e);
  }
  return parent !== that;
}

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const useHandler = (_data, event) => {
  const [dots, setDots] = useState([]);
  const clickEvent = useCallback(e => {
    const dom = e.currentTarget;
    const xy = getDomXY(dom);
    const mouseX = e.pageX || e.clientX;
    const mouseY = e.pageY || e.clientY;
    const domX = xy.domX;
    const domY = xy.domY;
    const xPos = mouseX - domX;
    const yPos = mouseY - domY;
    const xx = parseInt(xPos.toString());
    const yy = parseInt(yPos.toString());
    const date = new Date();
    const index = dots.length;
    setDots([...dots, {
      key: date.getTime(),
      index: index + 1,
      x: xx,
      y: yy
    }]);
    event.click && event.click(xx, yy);
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  }, [dots, event]);
  const confirmEvent = useCallback(e => {
    event.confirm && event.confirm(dots, () => {
      setDots([]);
    });
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  }, [dots, event]);
  const closeEvent = useCallback(e => {
    event.close && event.close();
    setDots([]);
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  }, [event]);
  const refreshEvent = useCallback(e => {
    event.refresh && event.refresh();
    setDots([]);
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  }, [event]);
  const getDots = useCallback(() => {
    return dots;
  }, [dots]);
  return {
    setDots,
    getDots,
    clickEvent,
    confirmEvent,
    closeEvent,
    refreshEvent
  };
};

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const Index = props => {
  const conf = {
    ...defaultConfig(),
    ...(props.config || {})
  };
  const data = props.data || {};
  const handler = useHandler(data, props.events || {});
  const hPadding = conf.horizontalPadding || 0;
  const vPadding = conf.verticalPadding || 0;
  const width = (conf.width || 0) + vPadding * 2;
  return React__default.createElement("div", {
    className: classnames(styles.wrapper, conf.showTheme && styles.theme),
    style: {
      width: width + "px",
      paddingLeft: vPadding + "px",
      paddingRight: vPadding + "px",
      paddingTop: hPadding + "px",
      paddingBottom: hPadding + "px"
    }
  }, React__default.createElement("div", {
    className: styles.header
  }, React__default.createElement("span", null, "\u8BF7\u5728\u4E0B\u56FE", React__default.createElement("em", null, "\u4F9D\u6B21"), "\u70B9\u51FB\uFF1A"), React__default.createElement("img", {
    style: {
      width: conf.thumbWidth + "px",
      height: conf.thumbHeight + "px"
    },
    src: data.thumb,
    alt: "..."
  })), React__default.createElement("div", {
    className: styles.body
  }, React__default.createElement("div", {
    className: styles.loading
  }, React__default.createElement(Icon$2, null)), React__default.createElement("img", {
    className: styles.picture,
    style: {
      width: conf.width + "px",
      height: conf.height + "px"
    },
    src: data.image,
    alt: "...",
    onClick: handler.clickEvent
  }), React__default.createElement("div", {
    className: cstyles.dots
  }, handler.getDots().map(dot => {
    return React__default.createElement("div", {
      className: "dot",
      style: {
        top: dot.y - 11 + "px",
        left: dot.x - 11 + "px"
      },
      key: dot.key + "-" + dot.index
    }, dot.index);
  }))), React__default.createElement("div", {
    className: styles.footer
  }, React__default.createElement("div", {
    className: classnames(styles.iconBlock, cstyles.iconBlock)
  }, React__default.createElement(Icon, {
    width: 22,
    height: 22,
    onClick: handler.closeEvent
  }), React__default.createElement(Icon$1, {
    width: 22,
    height: 22,
    onClick: handler.refreshEvent
  })), React__default.createElement("div", {
    className: styles.buttonBlock
  }, React__default.createElement("button", {
    onClick: handler.confirmEvent
  }, "\u786E\u8BA4"))));
};
var Click = /*#__PURE__*/React__default.memo(Index);

var css_248z$2 = "/**\n * @Author Awen\n * @Date 2024/05/25\n * @Email wengaolng@gmail.com\n **/\n.index-module_tile__8pkQD {\n  position: absolute;\n  z-index: 30;\n  cursor: pointer;\n}\n.index-module_tile__8pkQD img {\n  display: block;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\n";
var cstyles$1 = {"tile":"index-module_tile__8pkQD"};
styleInject(css_248z$2);

const Icon$3 = props => createElement("svg", Object.assign({
  viewBox: "0 0 200 200",
  xmlns: "http://www.w3.org/2000/svg",
  width: 20,
  height: 20
}, props), createElement("path", {
  d: "M131.6,116.3c0,0-75.6,0-109.7,0c-9.1,0-16.2-7.4-16.2-16.2c0-9.1,7.4-16.2,16.2-16.2c28.7,0,109.7,0,109.7,0\n\ts-5.4-5.4-30.4-30.7c-6.4-6.4-6.4-16.7,0-23.1s16.7-6.4,23.1,0l58.4,58.4c6.4,6.4,6.4,16.7,0,23.1c0,0-32.9,32.9-57.9,57.9\n\tc-6.4,6.4-16.7,6.4-23.1,0c-6.4-6.4-6.4-16.7,0-23.1C121.8,126.2,131.6,116.3,131.6,116.3z"
}));

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const defaultConfig$1 = () => ({
  width: 300,
  height: 240,
  thumbWidth: 150,
  thumbHeight: 40,
  verticalPadding: 16,
  horizontalPadding: 12,
  showTheme: true
});

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const useHandler$1 = (data, event, containerRef, tileRef, dragBlockRef, dragBarRef) => {
  const [dragLeft, setDragLeft] = useState(0);
  const [thumbLeft, setThumbLeft] = useState(data.thumbX || 0);
  const clear = useCallback(() => {
    setDragLeft(0);
    setThumbLeft(0);
  }, []);
  const dragEvent = useCallback(e => {
    const touch = e.touches && e.touches[0];
    const offsetLeft = dragBlockRef.current.offsetLeft;
    const width = containerRef.current.offsetWidth;
    const blockWidth = dragBlockRef.current.offsetWidth;
    const maxWidth = width - blockWidth;
    const thumbX = data.thumbX || 0;
    const tileWith = tileRef.current.offsetWidth;
    const ad = blockWidth - tileWith;
    const ratio = (maxWidth - thumbX + ad) / maxWidth;
    let isMoving = false;
    let startX = 0;
    let currentThumbX = 0;
    if (touch) {
      startX = touch.pageX - offsetLeft;
    } else {
      startX = e.clientX - offsetLeft;
    }
    const moveEvent = e => {
      isMoving = true;
      const mTouche = e.touches && e.touches[0];
      let left = 0;
      if (mTouche) {
        left = mTouche.pageX - startX;
      } else {
        left = e.clientX - startX;
      }
      if (left >= maxWidth) {
        setDragLeft(maxWidth);
        return;
      }
      if (left <= 0) {
        setDragLeft(0);
        return;
      }
      setDragLeft(left);
      currentThumbX = thumbX + left * ratio;
      setThumbLeft(currentThumbX);
      event.move && event.move(currentThumbX, data.thumbY || 0);
      e.cancelBubble = true;
      e.preventDefault();
    };
    const upEvent = e => {
      if (!checkTargetFather(dragBarRef.current, e)) {
        return;
      }
      if (!isMoving) {
        return;
      }
      dragBarRef.current.removeEventListener("mousemove", moveEvent, false);
      dragBarRef.current.removeEventListener("touchmove", moveEvent, {
        passive: false
      });
      dragBarRef.current.removeEventListener("mouseup", upEvent, false);
      dragBarRef.current.removeEventListener("mouseout", upEvent, false);
      dragBarRef.current.removeEventListener("touchend", upEvent, false);
      isMoving = false;
      event.confirm && event.confirm({
        x: parseInt(currentThumbX.toString()),
        y: data.thumbY || 0
      }, () => {
        clear();
      });
      e.cancelBubble = true;
      e.preventDefault();
    };
    dragBarRef.current.addEventListener("mousemove", moveEvent, false);
    dragBarRef.current.addEventListener("touchmove", moveEvent, {
      passive: false
    });
    dragBarRef.current.addEventListener("mouseup", upEvent, false);
    dragBarRef.current.addEventListener("mouseout", upEvent, false);
    dragBarRef.current.addEventListener("touchend", upEvent, false);
  }, [dragBlockRef, containerRef, data.thumbX, data.thumbY, tileRef, dragBarRef, event, clear]);
  const closeEvent = useCallback(e => {
    event && event.close && event.close();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  }, [clear, event]);
  const refreshEvent = useCallback(e => {
    event && event.refresh && event.refresh();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  }, [clear, event]);
  const getPoint = useCallback(() => {
    return {
      x: thumbLeft,
      y: data.thumbY || 0
    };
  }, [data.thumbY, thumbLeft]);
  const getState = useCallback(() => {
    return {
      dragLeft,
      thumbLeft
    };
  }, [thumbLeft, dragLeft]);
  return {
    getState,
    getPoint,
    dragEvent,
    closeEvent,
    refreshEvent
  };
};

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const Index$1 = props => {
  const conf = {
    ...defaultConfig$1(),
    ...(props.config || {})
  };
  const dragBarRef = useRef(null);
  const containerRef = useRef(null);
  const dragBlockRef = useRef(null);
  const tileRef = useRef(null);
  const data = props.data || {};
  const handler = useHandler$1(data, props.events || {}, containerRef, tileRef, dragBlockRef, dragBarRef);
  const hPadding = conf.horizontalPadding || 0;
  const vPadding = conf.verticalPadding || 0;
  const width = (conf.width || 0) + vPadding * 2;
  return React__default.createElement("div", {
    className: classnames(styles.wrapper, conf.showTheme && styles.theme),
    style: {
      width: width + "px",
      paddingLeft: vPadding + "px",
      paddingRight: vPadding + "px",
      paddingTop: hPadding + "px",
      paddingBottom: hPadding + "px"
    }
  }, React__default.createElement("div", {
    className: styles.header
  }, React__default.createElement("span", null, "\u8BF7\u62D6\u52A8\u6ED1\u5757\u5B8C\u6210\u62FC\u56FE"), React__default.createElement("div", {
    className: styles.iconBlock
  }, React__default.createElement(Icon, {
    width: 22,
    height: 22,
    onClick: handler.closeEvent
  }), React__default.createElement(Icon$1, {
    width: 22,
    height: 22,
    onClick: handler.refreshEvent
  }))), React__default.createElement("div", {
    className: styles.body,
    ref: containerRef
  }, React__default.createElement("div", {
    className: styles.loading
  }, React__default.createElement(Icon$2, null)), React__default.createElement("img", {
    className: styles.picture,
    style: {
      width: conf.width + "px",
      height: conf.height + "px"
    },
    src: data.image,
    alt: "..."
  }), React__default.createElement("div", {
    className: cstyles$1.tile,
    ref: tileRef,
    style: {
      width: (data.thumbWidth || 0) + 'px',
      height: (data.thumbHeight || 0) + 'px',
      top: (data.thumbY || 0) + "px",
      left: handler.getState().thumbLeft + "px"
    }
  }, React__default.createElement("img", {
    src: data.thumb,
    alt: "..."
  }))), React__default.createElement("div", {
    className: styles.footer
  }, React__default.createElement("div", {
    className: styles.dragSlideBar,
    ref: dragBarRef,
    onMouseDown: handler.dragEvent
  }, React__default.createElement("div", {
    className: styles.dragLine
  }), React__default.createElement("div", {
    className: styles.dragBlock,
    ref: dragBlockRef,
    onTouchStart: handler.dragEvent,
    style: {
      left: handler.getState().dragLeft + "px"
    }
  }, React__default.createElement(Icon$3, null)))));
};
var Slide = /*#__PURE__*/React__default.memo(Index$1);

var css_248z$3 = "/**\n * @Author Awen\n * @Date 2024/05/25\n * @Email wengaolng@gmail.com\n **/\n.index-module_header__jVeEs {\n  text-align: center;\n}\n.index-module_tile__VR9Ut {\n  position: absolute;\n  z-index: 30;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.index-module_tile__VR9Ut img {\n  display: block;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\n";
var cstyles$2 = {"header":"index-module_header__jVeEs","tile":"index-module_tile__VR9Ut"};
styleInject(css_248z$3);

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const defaultConfig$2 = () => ({
  width: 300,
  height: 240,
  verticalPadding: 16,
  horizontalPadding: 12,
  showTheme: true
});

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const useHandler$2 = (data, event, containerRef, tileRef) => {
  const [thumbPoint, setThumbPoint] = useState({
    x: data.thumbX || 0,
    y: data.thumbY || 0
  });
  const clear = useCallback(() => {
    setThumbPoint({
      x: data.thumbX || 0,
      y: data.thumbY || 0
    });
  }, [data.thumbX, data.thumbY]);
  const dragEvent = useCallback(e => {
    const touch = e.touches && e.touches[0];
    const offsetLeft = tileRef.current.offsetLeft;
    const offsetTop = tileRef.current.offsetTop;
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    const tileWidth = tileRef.current.offsetWidth;
    const tileHeight = tileRef.current.offsetHeight;
    const maxWidth = width - tileWidth;
    const maxHeight = height - tileHeight;
    let isMoving = false;
    let startX = 0;
    let startY = 0;
    let tileLeft = 0;
    let tileTop = 0;
    if (touch) {
      startX = touch.pageX - offsetLeft;
      startY = touch.pageY - offsetTop;
    } else {
      startX = e.clientX - offsetLeft;
      startY = e.clientY - offsetTop;
    }
    const moveEvent = e => {
      isMoving = true;
      const mTouche = e.touches && e.touches[0];
      let left = 0;
      let top = 0;
      if (mTouche) {
        left = mTouche.pageX - startX;
        top = mTouche.pageY - startY;
      } else {
        left = e.clientX - startX;
        top = e.clientY - startY;
      }
      if (left <= 0) {
        left = 0;
      }
      if (top <= 0) {
        top = 0;
      }
      if (left >= maxWidth) {
        left = maxWidth;
      }
      if (top >= maxHeight) {
        top = maxHeight;
      }
      setThumbPoint({
        x: left,
        y: top
      });
      tileLeft = left;
      tileTop = top;
      event.move && event.move(left, top);
      e.cancelBubble = true;
      e.preventDefault();
    };
    const upEvent = e => {
      if (!checkTargetFather(containerRef.current, e)) {
        return;
      }
      if (!isMoving) {
        return;
      }
      isMoving = false;
      containerRef.current.removeEventListener("mousemove", moveEvent, false);
      containerRef.current.removeEventListener("touchmove", moveEvent, {
        passive: false
      });
      containerRef.current.removeEventListener("mouseup", upEvent, false);
      containerRef.current.removeEventListener("mouseout", upEvent, false);
      containerRef.current.removeEventListener("touchend", upEvent, false);
      event.confirm && event.confirm({
        x: tileLeft,
        y: tileTop
      }, () => {
        clear();
      });
      e.cancelBubble = true;
      e.preventDefault();
    };
    containerRef.current.addEventListener("mousemove", moveEvent, false);
    containerRef.current.addEventListener("touchmove", moveEvent, {
      passive: false
    });
    containerRef.current.addEventListener("mouseup", upEvent, false);
    containerRef.current.addEventListener("mouseout", upEvent, false);
    containerRef.current.addEventListener("touchend", upEvent, false);
  }, [containerRef, tileRef, event, clear]);
  const closeEvent = useCallback(e => {
    event && event.close && event.close();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  }, [clear, event]);
  const refreshEvent = useCallback(e => {
    event && event.refresh && event.refresh();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  }, [clear, event]);
  return {
    thumbPoint,
    dragEvent,
    closeEvent,
    refreshEvent
  };
};

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const Index$2 = props => {
  const conf = {
    ...defaultConfig$2(),
    ...(props.config || {})
  };
  const containerRef = useRef(null);
  const tileRef = useRef(null);
  const data = props.data || {};
  const handler = useHandler$2(data, props.events || {}, containerRef, tileRef);
  const hPadding = conf.horizontalPadding || 0;
  const vPadding = conf.verticalPadding || 0;
  const width = (conf.width || 0) + vPadding * 2;
  useEffect(() => {
    tileRef.current.addEventListener('dragstart', event => event.preventDefault());
  }, [tileRef]);
  return React__default.createElement("div", {
    className: classnames(styles.wrapper, cstyles$2.wrapper, conf.showTheme && styles.theme),
    style: {
      width: width + "px",
      paddingLeft: vPadding + "px",
      paddingRight: vPadding + "px",
      paddingTop: hPadding + "px",
      paddingBottom: hPadding + "px"
    }
  }, React__default.createElement("div", {
    className: classnames(styles.header, cstyles$2.header)
  }, React__default.createElement("span", null, "\u8BF7\u62D6\u52A8\u6ED1\u5757\u5B8C\u6210\u62FC\u56FE")), React__default.createElement("div", {
    className: styles.body,
    ref: containerRef
  }, React__default.createElement("div", {
    className: styles.loading
  }, React__default.createElement(Icon$2, null)), React__default.createElement("img", {
    className: styles.picture,
    src: data.image,
    alt: "..."
  }), React__default.createElement("div", {
    className: cstyles$2.tile,
    ref: tileRef,
    style: {
      width: (data.thumbWidth || 0) + 'px',
      height: (data.thumbHeight || 0) + 'px',
      top: handler.thumbPoint.y + "px",
      left: handler.thumbPoint.x + "px"
    },
    onMouseDown: handler.dragEvent,
    onTouchStart: handler.dragEvent
  }, React__default.createElement("img", {
    src: data.thumb,
    alt: "..."
  }))), React__default.createElement("div", {
    className: styles.footer
  }, React__default.createElement("div", {
    className: styles.iconBlock
  }, React__default.createElement(Icon, {
    width: 20,
    height: 20,
    onClick: handler.closeEvent
  }), React__default.createElement(Icon$1, {
    width: 20,
    height: 20,
    onClick: handler.refreshEvent
  }))));
};
var SlideRegion = /*#__PURE__*/React__default.memo(Index$2);

var css_248z$4 = "/**\n * @Author Awen\n * @Date 2024/05/25\n * @Email wengaolng@gmail.com\n **/\n.index-module_body__5eTaZ {\n  background: transparent !important;\n  display: flex;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  justify-content: center;\n  align-items: center;\n}\n.index-module_picture__M-qbX {\n  position: relative;\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 10;\n  border-radius: 100%;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.index-module_picture__M-qbX img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.index-module_round__zaOPS {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 100%;\n  z-index: 20;\n  border: 6px solid #e0e0e0;\n}\n.index-module_thumb__jChIh {\n  position: absolute;\n  z-index: 30;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.index-module_thumb__jChIh img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.index-module_thumbBlock__u3U1X {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n";
var cstyles$3 = {"body":"index-module_body__5eTaZ","picture":"index-module_picture__M-qbX","round":"index-module_round__zaOPS","thumb":"index-module_thumb__jChIh","thumbBlock":"index-module_thumbBlock__u3U1X"};
styleInject(css_248z$4);

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const defaultConfig$3 = () => ({
  width: 300,
  height: 240,
  size: 240,
  verticalPadding: 16,
  horizontalPadding: 12,
  showTheme: true
});

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const useHandler$3 = (data, event, dragBlockRef, dragBarRef) => {
  const [dragLeft, setDragLeft] = useState(0);
  const [thumbAngle, setThumbAngle] = useState(data.angle || 0);
  const clear = useCallback(() => {
    setDragLeft(0);
    setThumbAngle(0);
  }, []);
  const dragEvent = useCallback(e => {
    const touch = e.touches && e.touches[0];
    const offsetLeft = dragBlockRef.current.offsetLeft;
    const width = dragBarRef.current.offsetWidth;
    const blockWidth = dragBlockRef.current.offsetWidth;
    const maxWidth = width - blockWidth;
    const p = 360 / maxWidth;
    let angle = 0;
    let isMoving = false;
    let startX = 0;
    if (touch) {
      startX = touch.pageX - offsetLeft;
    } else {
      startX = e.clientX - offsetLeft;
    }
    const moveEvent = e => {
      isMoving = true;
      const mTouche = e.touches && e.touches[0];
      let left = 0;
      if (mTouche) {
        left = mTouche.pageX - startX;
      } else {
        left = e.clientX - startX;
      }
      if (left >= maxWidth) {
        setDragLeft(maxWidth);
        return;
      }
      if (left <= 0) {
        setDragLeft(0);
        return;
      }
      setDragLeft(left);
      angle = left * p;
      setThumbAngle(angle);
      event.rotate && event.rotate(angle);
      e.cancelBubble = true;
      e.preventDefault();
    };
    const upEvent = e => {
      if (!checkTargetFather(dragBarRef.current, e)) {
        return;
      }
      if (!isMoving) {
        return;
      }
      dragBarRef.current.removeEventListener("mousemove", moveEvent, false);
      dragBarRef.current.removeEventListener("touchmove", moveEvent, {
        passive: false
      });
      dragBarRef.current.removeEventListener("mouseup", upEvent, false);
      dragBarRef.current.removeEventListener("mouseout", upEvent, false);
      dragBarRef.current.removeEventListener("touchend", upEvent, false);
      isMoving = false;
      event.confirm && event.confirm(parseInt(angle.toString()), () => {
        clear();
      });
      e.cancelBubble = true;
      e.preventDefault();
    };
    dragBarRef.current.addEventListener("mousemove", moveEvent, false);
    dragBarRef.current.addEventListener("touchmove", moveEvent, {
      passive: false
    });
    dragBarRef.current.addEventListener("mouseup", upEvent, false);
    dragBarRef.current.addEventListener("mouseout", upEvent, false);
    dragBarRef.current.addEventListener("touchend", upEvent, false);
  }, [dragBlockRef, dragBarRef, event, clear]);
  const closeEvent = useCallback(e => {
    event && event.close && event.close();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  }, [clear, event]);
  const refreshEvent = useCallback(e => {
    event && event.refresh && event.refresh();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  }, [clear, event]);
  const getState = useCallback(() => {
    return {
      dragLeft,
      thumbAngle
    };
  }, [thumbAngle, dragLeft]);
  return {
    getState,
    thumbAngle,
    dragEvent,
    closeEvent,
    refreshEvent
  };
};

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const Index$3 = props => {
  const conf = {
    ...defaultConfig$3(),
    ...(props.config || {})
  };
  const dragBarRef = useRef(null);
  const dragBlockRef = useRef(null);
  const data = props.data || {};
  const handler = useHandler$3(data, props.events || {}, dragBlockRef, dragBarRef);
  const hPadding = conf.horizontalPadding || 0;
  const vPadding = conf.verticalPadding || 0;
  const width = (conf.width || 0) + vPadding * 2;
  return React__default.createElement("div", {
    className: classnames(styles.wrapper, cstyles$3.wrapper, conf.showTheme && styles.theme),
    style: {
      width: width + "px",
      paddingLeft: vPadding + "px",
      paddingRight: vPadding + "px",
      paddingTop: hPadding + "px",
      paddingBottom: hPadding + "px"
    }
  }, React__default.createElement("div", {
    className: styles.header
  }, React__default.createElement("span", null, "\u8BF7\u62D6\u52A8\u6ED1\u5757\u5B8C\u6210\u62FC\u56FE"), React__default.createElement("div", {
    className: styles.iconBlock
  }, React__default.createElement(Icon, {
    width: 22,
    height: 22,
    onClick: handler.closeEvent
  }), React__default.createElement(Icon$1, {
    width: 22,
    height: 22,
    onClick: handler.refreshEvent
  }))), React__default.createElement("div", {
    className: classnames(styles.body, cstyles$3.body)
  }, React__default.createElement("div", {
    className: styles.loading
  }, React__default.createElement(Icon$2, null)), React__default.createElement("div", {
    className: cstyles$3.picture,
    style: {
      width: conf.size + 'px',
      height: conf.size + 'px'
    }
  }, React__default.createElement("img", {
    src: data.image,
    alt: "..."
  }), React__default.createElement("div", {
    className: cstyles$3.round
  })), React__default.createElement("div", {
    className: cstyles$3.thumb
  }, React__default.createElement("div", {
    className: cstyles$3.thumbBlock,
    style: {
      transform: "rotate(" + handler.getState().thumbAngle + "deg)"
    }
  }, React__default.createElement("img", {
    src: data.thumb,
    alt: "..."
  })))), React__default.createElement("div", {
    className: styles.footer
  }, React__default.createElement("div", {
    className: styles.dragSlideBar,
    ref: dragBarRef,
    onMouseDown: handler.dragEvent
  }, React__default.createElement("div", {
    className: styles.dragLine
  }), React__default.createElement("div", {
    className: styles.dragBlock,
    ref: dragBlockRef,
    onTouchStart: handler.dragEvent,
    style: {
      left: handler.getState().dragLeft + "px"
    }
  }, React__default.createElement(Icon$3, null)))));
};
var Rotate = /*#__PURE__*/React__default.memo(Index$3);

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
const defaultConfig$4 = () => ({
  width: 330,
  height: 44,
  verticalPadding: 12,
  horizontalPadding: 16
});

var css_248z$5 = "/**\n * @Author Awen\n * @Date 2024/05/25\n * @Email wengaolng@gmail.com\n **/\n.index-module_btnBlock__L96Vx {\n  position: relative;\n  box-sizing: border-box;\n  display: block;\n  font-size: 13px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  letter-spacing: 1px;\n  border-radius: 5px;\n  line-height: 1;\n  white-space: nowrap;\n  -webkit-appearance: none;\n  outline: none;\n  margin: 0;\n  transition: 0.1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  justify-content: center;\n  justify-items: center;\n  box-shadow: 0 0 20px rgba(62, 124, 255, 0.1);\n  -webkit-box-shadow: 0 0 20px rgba(62, 124, 255, 0.1);\n  -moz-box-shadow: 0 0 20px rgba(62, 124, 255, 0.1);\n}\n.index-module_btnBlock__L96Vx span {\n  padding-left: 8px;\n}\n.index-module_disabled__U5sNo {\n  pointer-events: none;\n}\n.index-module_default__r2sQq {\n  color: #3e7cff;\n  border: 1px solid #50a1ff;\n  background: #ecf5ff;\n  cursor: pointer;\n}\n.index-module_default__r2sQq:hover {\n  background: #e0efff !important;\n}\n.index-module_error__mCm6a {\n  cursor: pointer;\n  color: #ed4630;\n  background: #fef0f0;\n  border: 1px solid #ff5a34;\n}\n.index-module_warn__CT1sW {\n  cursor: pointer;\n  color: #ffa000;\n  background: #fdf6ec;\n  border: 1px solid #ffbe09;\n}\n.index-module_success__61kOU {\n  color: #5eaa2f;\n  background: #f0f9eb;\n  border: 1px solid #8bc640;\n  pointer-events: none;\n}\n.index-module_ripple__KF4IK {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  justify-content: center;\n  justify-items: center;\n}\n.index-module_ripple__KF4IK::after {\n  background: #409eff;\n  -webkit-border-radius: 50px;\n  -moz-border-radius: 50px;\n  border-radius: 50px;\n  content: \"\";\n  display: block;\n  width: 20px;\n  height: 20px;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9;\n  animation: index-module_ripple__KF4IK 1.3s infinite;\n  -moz-animation: index-module_ripple__KF4IK 1.3s infinite;\n  -webkit-animation: index-module_ripple__KF4IK 1.3s infinite;\n  animation-delay: 2s;\n  -moz-animation-delay: 2s;\n  -webkit-animation-delay: 2s;\n}\n@keyframes index-module_ripple__KF4IK {\n  0% {\n    opacity: 0;\n  }\n  5% {\n    opacity: 0.05;\n  }\n  20% {\n    opacity: 0.35;\n  }\n  65% {\n    opacity: 0.01;\n  }\n  100% {\n    transform: scaleX(2) scaleY(2);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes index-module_ripple__KF4IK {\n  0% {\n    opacity: 0;\n  }\n  5% {\n    opacity: 0.05;\n  }\n  20% {\n    opacity: 0.35;\n  }\n  65% {\n    opacity: 0.01;\n  }\n  100% {\n    transform: scaleX(2) scaleY(2);\n    opacity: 0;\n  }\n}\n";
var styles$1 = {"btnBlock":"index-module_btnBlock__L96Vx","disabled":"index-module_disabled__U5sNo","default":"index-module_default__r2sQq","error":"index-module_error__mCm6a","warn":"index-module_warn__CT1sW","success":"index-module_success__61kOU","ripple":"index-module_ripple__KF4IK"};
styleInject(css_248z$5);

const Icon$4 = props => createElement("svg", Object.assign({
  viewBox: "0 0 200 200",
  xmlns: "http://www.w3.org/2000/svg",
  width: 20,
  height: 20
}, props), createElement("circle", {
  fill: "#3E7CFF",
  cx: "100",
  cy: "100",
  r: "96.3"
}), createElement("path", {
  fill: "#FFFFFF",
  d: "M140.8,64.4l-39.6-11.9h-2.4L59.2,64.4c-1.6,0.8-2.8,2.4-2.8,4v24.1c0,25.3,15.8,45.9,42.3,54.6\n\tc0.4,0,0.8,0.4,1.2,0.4c0.4,0,0.8,0,1.2-0.4c26.5-8.7,42.3-28.9,42.3-54.6V68.3C143.5,66.8,142.3,65.2,140.8,64.4z"
}));

const Icon$5 = props => createElement("svg", Object.assign({
  viewBox: "0 0 200 200",
  xmlns: "http://www.w3.org/2000/svg",
  width: 20,
  height: 20
}, props), createElement("path", {
  fill: "#ED4630",
  d: "M184,26.6L102.4,2.1h-4.9L16,26.6c-3.3,1.6-5.7,4.9-5.7,8.2v49.8c0,52.2,32.6,94.7,87.3,112.6\n\tc0.8,0,1.6,0.8,2.4,0.8s1.6,0,2.4-0.8c54.7-18,87.3-59.6,87.3-112.6V34.7C189.8,31.5,187.3,28.2,184,26.6z M134.5,123.1\n\tc3.1,3.1,3.1,8.2,0,11.3c-1.6,1.6-3.6,2.3-5.7,2.3s-4.1-0.8-5.7-2.3L100,111.3l-23.1,23.1c-1.6,1.6-3.6,2.3-5.7,2.3\n\tc-2,0-4.1-0.8-5.7-2.3c-3.1-3.1-3.1-8.2,0-11.3L88.7,100L65.5,76.9c-3.1-3.1-3.1-8.2,0-11.3c3.1-3.1,8.2-3.1,11.3,0L100,88.7\n\tl23.1-23.1c3.1-3.1,8.2-3.1,11.3,0c3.1,3.1,3.1,8.2,0,11.3L111.3,100L134.5,123.1z"
}));

const Icon$6 = props => createElement("svg", Object.assign({
  viewBox: "0 0 200 200",
  xmlns: "http://www.w3.org/2000/svg",
  width: 20,
  height: 20
}, props), createElement("path", {
  fill: "#FFA000",
  d: "M184,26.6L102.4,2.1h-4.9L16,26.6c-3.3,1.6-5.7,4.9-5.7,8.2v49.8c0,52.2,32.6,94.7,87.3,112.6\n\tc0.8,0,1.6,0.8,2.4,0.8s1.6,0,2.4-0.8c54.7-18,87.3-59.6,87.3-112.6V34.7C189.8,31.5,187.3,28.2,184,26.6z M107.3,109.1\n\tc-0.5,5.4-3.9,7.9-7.3,7.9c-2.5,0,0,0,0,0c-3.2-0.6-5.7-2-6.8-7.4l-4.4-50.9c0-5.1,6.2-9.7,11.5-9.7c5.3,0,11,4.7,11,9.9\n\tL107.3,109.1z M109.3,133.3c0,5.1-4.2,9.3-9.3,9.3c-5.1,0-9.3-4.2-9.3-9.3c0-5.1,4.2-9.3,9.3-9.3C105.1,124,109.3,128.1,109.3,133.3\n\tz"
}));

const Icon$7 = props => createElement("svg", Object.assign({
  viewBox: "0 0 200 200",
  xmlns: "http://www.w3.org/2000/svg",
  width: 20,
  height: 20
}, props), createElement("path", {
  fill: "#5EAA2F",
  d: "M183.3,27.2L102.4,2.9h-4.9L16.7,27.2C13.4,28.8,11,32,11,35.3v49.4c0,51.8,32.4,93.9,86.6,111.7\n\tc0.8,0,1.6,0.8,2.4,0.8c0.8,0,1.6,0,2.4-0.8c54.2-17.8,86.6-59.1,86.6-111.7V35.3C189,32,186.6,28.8,183.3,27.2z M146.1,81.4\n\tl-48.5,48.5c-1.6,1.6-3.2,2.4-5.7,2.4c-2.4,0-4-0.8-5.7-2.4L62,105.7c-3.2-3.2-3.2-8.1,0-11.3c3.2-3.2,8.1-3.2,11.3,0l18.6,18.6\n\tl42.9-42.9c3.2-3.2,8.1-3.2,11.3,0C149.4,73.3,149.4,78.2,146.1,81.4L146.1,81.4z"
}));

const Index$4 = props => {
  const conf = {
    ...defaultConfig$4(),
    ...(props.config || {})
  };
  const type = props.type || "default";
  let btnIcon = React__default.createElement(Icon$4, null);
  let cn = styles$1.default;
  if (type == "warn") {
    btnIcon = React__default.createElement(Icon$6, null);
    cn = styles$1.warn;
  } else if (type == "error") {
    btnIcon = React__default.createElement(Icon$5, null);
    cn = styles$1.error;
  } else if (type == "success") {
    btnIcon = React__default.createElement(Icon$7, null);
    cn = styles$1.success;
  }
  return React__default.createElement("div", {
    className: classnames(styles$1.btnBlock, cn, props.disabled && styles$1.disabled),
    style: {
      width: conf.width + "px",
      height: conf.height + "px",
      paddingLeft: conf.verticalPadding + "px",
      paddingRight: conf.verticalPadding + "px",
      paddingTop: conf.verticalPadding + "px",
      paddingBottom: conf.verticalPadding + "px"
    },
    onClick: props.clickEvent
  }, type == "default" ? React__default.createElement("div", {
    className: styles$1.ripple
  }, btnIcon) : btnIcon, React__default.createElement("span", null, props.title || "点击按键进行验证"));
};
var Button = /*#__PURE__*/React__default.memo(Index$4);

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
var GoCaptcha = {
  Click,
  Slide,
  SlideRegion,
  Rotate,
  Button
};

/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/

export default GoCaptcha;
//# sourceMappingURL=go-captcha-react.esm.js.map
