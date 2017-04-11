<template>
    <div class="actual-main">
        <div class="actual-container">
            <h3 class="actual-title">
                <span>实战推荐</span>  
                <a class="more">更多></a>
            </h3>
            <div class="actual-swiper">
                     <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in actualList">
                       <div class="actual-box">
                           <img :src="item.imgUrl" width="160"  alt=''/>
                          <div class="img-desc">
                              <h3>{{item.title}}</h3>
                              <em>￥{{item.price}}</em>
                              <span>{{item.learnNumber}}人学习</span>
                              <div class="clear"></div>
                           </div>
                       </div>
                    </div>
                   
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import Swiper from './../../../static/swiper.js'
export default {
    name: 'nav',
    data(){
        return {
           actualList:[
               {imgUrl: 'http://szimg.mukewang.com/58a68f000001262805400300-360-202.jpg',title:'React.js入门与实践项目   开发适配PC及移动端新闻头条平台 ',price:'198',learnNumber: '589',targetSrc:'http://coding.imooc.com/wap/classindex/cid/83'},
               {imgUrl: 'http://szimg.mukewang.com/5859ed790001b9da05400300-360-202.jpg',title:'强力django+杀手级xadmin  打造上线标准的在线教育平台',price:'128',learnNumber: '988',targetSrc:'http://coding.imooc.com/wap/classindex/cid/78'},
               {imgUrl: 'http://szimg.mukewang.com/583e42fb0001e04f05400300-360-202.jpg',title:'前端后台ThinkPHP开发整站',price:'78',learnNumber: '',targetSrc:'http://coding.imooc.com/wap/classindex/cid/48'},
               {imgUrl: 'http://szimg.mukewang.com/586e0f55000158db05400300-360-202.jpg',title:'微信小程序入门与实战  常用组件 API 开发技巧 项目实战',price:'99',learnNumber: '345',targetSrc:'http://coding.imooc.com/wap/classindex/cid/75'}
            
           ]
        }
    },
    mounted(){
        var actualSwiper = new Swiper('.actual-swiper .swiper-container',{
            spaceBetween: 12
        });
    }
}
</script>
<style type="text/css"  scope>
 @import './../../../static/swiper.css';
.actual-main{
    width: 100%;
}
.actual-container{
    padding:0 12px 0 12px;
}
.actual-title{
    display: block;
    width: 100%;
    height: 44px;
}
.actual-title span{
    display:block;
    width: 50%;
    float: left;
    text-align: left;
    height: 44px;
    line-height: 44px;
    color: #868f9a;
}

.actual-title .more{
     display:block;
    width: 50%;
    float: left;
    text-align: right;
    height: 44px;
    line-height: 44px;
    color: #868f9a;
}
.actual-swiper .swiper-container{
    width: 100%;
}

.actual-swiper .swiper-slide{
    width: 160px !important;
}
.actual-box{
   width: 100%;
   height: 100px;
   position: relative;
}
.img-desc{
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: absolute;
    top: 55px;
    left: 0;
}
.img-desc h3{
    padding-top:12px;
    font-size: 14px;
    font-weight: bold;
    color: #36363c;
    text-align: center;
     text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}
.img-desc span{
    color: #868f9a;
    font-size: 12px;
   float:right;
   padding-top: 8px;
}
.img-desc em{
    color: #ea390e;
    font-size: 12px;
    float: left;
    padding-top: 8px;
}
</style>
