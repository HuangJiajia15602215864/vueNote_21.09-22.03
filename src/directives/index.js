import copy from './copy'
import longpress from './longpress'
import debounce from './debounce'
import waterMarker from './waterMarker'
import permission from './permission'
import inputFilter from './inputFilter'

// 自定义指令
const directives = {
  copy,
  longpress,
  debounce,
  waterMarker,
  permission,
  inputFilter
}
 
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}