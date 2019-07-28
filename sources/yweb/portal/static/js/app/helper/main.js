let UTILS = {
    version: "1.0.0",
    v: "1.0.0"
};
const formatDateTime = (date, fmt = "YYYY-MM-dd HH:mm:ss") => {
    let o = {
        'M+': date.getMonth() + 1,                 // 月份
        'd+': date.getDate(),                    // 日
        'h+': date.getHours(),                   // 小时
        'm+': date.getMinutes(),                 // 分
        's+': date.getSeconds(),                 // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds()             // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    ;
    return fmt
};


const fullScreen = () => {
    // W3C
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
    }
    // FireFox
    if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
    }
    // Chrome等
    if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen()
    }
    // IE11
    if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen()
    }
};
const exitFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    }
    if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    }
    if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    }
    if (document.msExitFullscreen) {
        document.msExitFullscreen()
    }
};

UTILS.formatDateTime = formatDateTime;
UTILS.fullScreen = fullScreen;
UTILS.exitFullscreen = exitFullscreen;
UTILS.mix = mix;


function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
// 这样使用
// class DistributedEdit extends mix(Class1, Class2) {
//   // ...
// }

export default UTILS;