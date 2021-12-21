import Vue from 'vue' // 全家桶
import App from './App.vue'
import router from './router'

import 'lib-flexible/flexible.js'// UI组件、移动端适配
import {
  Button,
  Loading,
  Icon,
  Radio,
  RadioGroup,
  Cell,
  CellGroup,
  Form,
  Field,
  Popup,
  Picker,
  Checkbox
} from 'vant'
import 'vant/lib/index.css';
import '@/styles/index.scss'

import VueI18n from 'vue-i18n'// 国际化
import messages from "./language/index"
//import config from '../config/index.js'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: config.language || 'cn',
  messages
})

import Directives from '@/directives/index.js'// 全局指令
Vue.use(Directives)

Vue.use(Button).use(Loading).use(Icon).use(Radio).use(RadioGroup).use(Cell).use(CellGroup).use(Form).use(Field).use(Popup).use(Picker).use(Checkbox);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})