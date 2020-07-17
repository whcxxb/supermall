import {request} from "../network/requset"

export function homedata (){
  return request({
    url:"/home/multidata"
  })
}

export function gethomegoods(type,page) {
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}