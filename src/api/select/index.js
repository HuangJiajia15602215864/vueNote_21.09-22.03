import request from '@/utils/request'
import qs from 'qs';

// 获取区服列表
export function getServerList() {
  return request({
    baseURL: 'server',
    url: 'Xlcw/getServerList',
    method: 'get',
  })
}

// 获取角色列表
export function getRoleInfo(data) {
  return request({
    baseURL: 'server',
    url: 'Xlcw/getRoleInfo',
    method: 'post',
    data: qs.stringify(data)
  })
}

// 获取充值商品
export function getWebGift(data) {
  return request({
    baseURL: 'server',
    url: 'Xlcw/getWebGift',
    method: 'post',
    data: qs.stringify(data)
  })
}