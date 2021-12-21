//input.js 全局指令处理输入框

// 监听函数
const addListener = function (el, type, fn) {
  el.addEventListener(type, fn, false)
}

// 防抖
let debounce = (fn, delay) => {
  var delay = delay || 300;
  var timer;
  return function () {
    var th = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(th, args);
    }, delay);
  };
}

//去掉空格
const spaceFilter = function (el) {
  addListener(el, 'input', () => {
    el.value = el.value.replace(/\s+/, '')
  })
}

// 限制只能输入整数和小数（适用于价格类、最多两位小数）
const priceFilter = function(el) {
  addListener(el, 'keyup', debounce(() => {//添加防抖 方便添加小数点
    el.value = (el.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
    if (isNaN(el.value)) {
      el.value = ''
    }
    //格式化去掉却没有输入小数位的小数点
    el.value = +el.value
    //触发input事件
    el.dispatchEvent(new Event('input'))
  }))
}

// 限制只能输入字母数字（适用于运单号）
const integerLetterFilter = function (el) {
  addListener(el, 'input', debounce(() => {
    el.value = el.value.replace(/[\W]/g, '')
    el.dispatchEvent(new Event('input'))
  }))
}

export default {
  bind(el, binding) {
    if (el.tagName.toLowerCase() !== 'input') {
      el = el.getElementsByTagName('input')[0]
    }
    spaceFilter(el)
    switch (binding.arg) {
      case 'price':
        priceFilter(el)
        break
      case 'integerLetter':
        integerLetterFilter(el)
        break
      default:
        console.warn('未知指令类型', binding.arg)
        break
    }
  }
}
