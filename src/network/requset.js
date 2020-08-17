import axios from "axios"

export function request (config) {
  const instance = axios.create({
    baseURL:"http://152.136.185.210:8000/api/z8" ,
    timeout:5000
  })
  //axios的拦截器
  instance.interceptors.request.use(config =>{
    // console.log(config)
     return config
  },err => {
    console.log(err)
  })

  //响应请求

  instance.interceptors.response.use(res =>{
    // console.log(res)   //网络请求成功后
    return res.data  //拦截后需要返回 可以直接返回data
  },err =>{
    console.log(err)
  })

  //发送真正的网络请求
  return instance(config)   //返回Promist
}