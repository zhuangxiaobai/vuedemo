import request from '@/utils/request'

 //登录博客
 export function login(data) {
    return request({
      url: '/user/login',
      method: 'post',
      data
    })
  }