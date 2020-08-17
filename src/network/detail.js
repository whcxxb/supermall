import {request} from "./requset"

export function getDetailData(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,service){
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
  }
}