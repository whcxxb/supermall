<template>
  <div>
    <detailnavbar></detailnavbar>
    <detailswiper :topimage='topImage'></detailswiper>
    <detabaseinfo></detabaseinfo>
  </div>
</template>


<script>
import detailnavbar from './childComps/DetailNavBar'
import {getDetailData} from '../../network/detail'
import detailswiper from './childComps/DetailSwiper'
import detabaseinfo from "./childComps/DetaBaseInfo"
export default {
  name:'Detail',
  components:{
    detailnavbar,
    detailswiper,
    detabaseinfo
  },
  data() {
    return {
      iid:null,
      topImage:[],
      desc:null
    }
  },
  created(){
    //获取iid
    this.iid = this.$route.query.iid
    //请求详情页数据
    getDetailData(this.iid).then(res =>{
      //在res中取出轮播图的数据 
      this.topImage = res.result.itemInfo.topImages
      this.desc = res.result.itemInfo.desc
      console.log(res);
    })
  }
}
</script>

