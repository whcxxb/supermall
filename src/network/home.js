import {request} from "../network/requset"

export function homedata (){
  return request({
    url:"/home/multidata"
  })
}