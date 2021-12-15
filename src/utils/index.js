//import config from '../../config/index'
import md5 from 'js-md5'
import {
  Base64
} from 'js-base64';

/*
 生成签名,用于校验
 输入：obj需要加密的重要参数对象；
 输出：sign加密后的签名
*/
export function createSign(obj, secret) {
  let keys = Object.keys(obj)
  keys.sort()

  let objStr = ''
  for (let i = 0; i < keys.length; i++) {
    objStr += keys[i] + '=' + obj[keys[i]] + '&'
  }
  let sign = md5(objStr + config.secret_name + '=' + config[secret])
  return sign
}

/*
  将链接参数进行加密和编码
  输入：obj链接参数
  输出：编码后的加密参数(防止+在浏览器传输编码成%20，提前编码为%2B，链接解码会返回+)
*/
export function encodeAndSign(obj) {
  let sign = createSign({ // 重要参数加密对象
    order_id: obj.order_id,
    amount: obj.amount
  }, 'game_secret')
  let objStr = ''
  for (let key in obj) {
    objStr += key + '=' + obj[key] + '&'
  }
  objStr += 'sign=' + sign
  return Base64.encode(objStr)
  //return Base64.encode(objStr).replace("+","%2B")
}


/*
  将链接参数进行解密和校验
  输入：path待解密的链接，arr需要加密的重要参数键名数组
  输出：【解密后的参数对象，是否校验通过】
 */
  export function decodeAndCheck(path,arr,type) {
    console.log('2021/12/09 16:45')
    let index = path.indexOf('?')
    let query = path.substr(index + 1).replace(/%20/g,"%2B") // 获取到加密参数部分(+在浏览器传输编码成%20，导致链接解码会返回空格；替换成%2B，解码为+)
    console.log(path.substr(index + 1))
    console.log(query)
    let decBase64 = ''
    if(type){
      decBase64 = window.decodeURIComponent(query)
    }else{
      decBase64 = Base64.decode(window.decodeURIComponent(query))// URL解码，防止浏览器跳转链接编码，Base64解码
    }
    console.log(query)
    console.log(decBase64)
  
    let obj = getUrlObj(decBase64)// 获取链接参数对象
    let mainObj = {}// 重要参数加密对象
    for(let i=0;i<arr.length;i++){
      mainObj[arr[i]] = obj[arr[i]]
    }
    
    if(createSign(mainObj,'game_secret') == obj.sign){// 生成部分参数签名与链接签名进行校验,若校验通过
      return [obj,1]
    }else{// 若校验不通过
      return [obj,0]
    }
  }

// 获取链接上的参数转化为对象
function getUrlObj(url) {
  var oldarray = url.split('&')
  var obj = {}
  for (var i = 0; i < oldarray.length; i++) {
    var arritem = oldarray[i]
    var item = arritem.split('=')
    obj[item[0]] = item[1]
  }
  return obj
}

// 将对象键名排序并拼接成字符串
export function handleObjToStr(obj, secret) {
  let keys = Object.keys(obj)
  keys.sort()

  let objStr = ''
  for (let i = 0; i < keys.length; i++) {
    objStr += keys[i] + '=' + obj[keys[i]] + '&'
  }
  let sign = md5(objStr + config.secret_name + '=' + config[secret])
  return objStr + 'sign=' + sign
}

// 校验参数是否存在
export function checkParam(obj) {
  let arr = ['account_id', 'role_id', 'server_id', 'channel_id', 'sub_chan_merchant', 'open_id',
    'amount', 'item_id', 'item_name', 'deviceid', 'rydevicetype'
  ]
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      str += arr[i] + ','
    }
  }
  str = str.slice(0, str.length - 1)
  return str
}

// 筛选列表
export const selectList = [{
    id: 1,
    text: '推荐',
    showPopover: false,
    children: [{
      id: 2,
      text: '热销'
    }, {
      id: 3,
      text: '技能'
    }]
  }, {
    id: 4,
    text: '超值礼包',
    showPopover: false,
    children: [{
      id: 5,
      text: '热销'
    }, {
      id: 6,
      text: '成长助力'
    }, {
      id: 7,
      text: '稀有物资'
    }, {
      id: 8,
      text: '戒指'
    }]
  }, {
    id: 9,
    text: '荣誉',
    showPopover: false,
    children: []
  }, {
    id: 10,
    text: '积分',
    showPopover: false,
    children: [{
      id: 11,
      text: '挑战'
    }, {
      id: 12,
      text: '活跃',
    }]
  },
  {
    id: 13,
    text: '充值',
    showPopover: false,
    children: [],
    selected: true
  }
]