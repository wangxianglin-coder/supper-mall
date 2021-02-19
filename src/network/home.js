import {request} from './request'
export function homeRequest(){
  return request({
    url: "/home/multidata"
  })
}

export function getHomeGoods(type,page){
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  })
}
