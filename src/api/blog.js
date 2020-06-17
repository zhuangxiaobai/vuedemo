import request from '@/utils/request'


//进入首页获取博客列表
export function getBlogList(params) {
    return request({
      url: '/blog/blogList',
      method: 'get',
      params
    })
  }

  export function createOrUpdate(data) {
    return request({
      url: '/blog/createOrUpdate',
      method: 'post',
      data
    })
  }