config = {
  gameApi: 'http://10.19.9.114:13007/', // 游戏下单URL
  sdkApi: 'http://10.19.9.114:13013/', // sdk下单URL
  serverApi: 'http://10.19.9.114:13006/', // 自买量获取服务器数据URL
  gameApi: 'http://122.112.237.78:13007/', // 游戏下单URL
  sdkApi: 'http://106.75.236.48:13000/', // sdk下单URL
  serverApi: 'http://122.112.237.78:13006/',
  language: "cn", // 配置语言（越南为vi,其他为cn）
  order_type: 0, // 订单类型，0：测试，1：正常,4:网页支付
  pay_notify_env: 'test', // 支付环境，正式：product，测试：test，提审：auth
  os: 2, // 系统类型 1：安卓，2：ios

  app_id: '3', // app_id
  secret_name: 'app_secret', // app_secret键名
  game_secret: 'iUrD9EFhDm5Z6AFF', // 游戏app_secret键值
  sdk_secret: 'dfdae0de0cbf5424406e259e343a9477', // sdk app_secret键值

  xlcw_sdk_type: 998 // SDK类型
}

/*
不同环境接口地址
本地开发：
  gameApi:'http://10.19.9.114:13007/',// 游戏下单URL
  sdkApi:'http://10.19.9.114:13013/',// sdk下单URL
  serverApi:'http://10.19.9.114:13006/',// 自买量获取服务器数据URL

联调：
  gameApi:'http://10.19.9.114:13007/',// 游戏下单URL
  sdkApi:'http://pay.rapidinnovative.com:9010/',// sdk下单URL
*/