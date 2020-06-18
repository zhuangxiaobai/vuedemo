import request from '@/utils/request'


//进入首页获取博客列表
export function getBlogList(params) {
    return request({
      url: '/blogs/blogLists',
      method: 'get',
      params
    })
  }

  //进入具体博客
export function getBlogById(params) {
  return request({
    url: '/blogs/'+params,
    method: 'get'
    
  })
}


 //创建或者修改博客
  export function createOrUpdate(data) {
    return request({
      url: '/blogs/createOrUpdate',
      method: 'post',
      data
    })
  }