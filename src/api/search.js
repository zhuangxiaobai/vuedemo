import request from '@/utils/request'


//点击搜索栏查询查询博文
export function searchBlog(data) {
    return request({
      url: '/vue-admin-template/table/list',
      method: 'post',
      data
    })
  }