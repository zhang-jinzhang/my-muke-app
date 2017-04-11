<template>
    <div class="freeCourse-main">
        <div class="freeCourse-container">
            <h3 class="freeCourse-title">
                <span>免费好课</span>  
                <a class="more">更多></a>
            </h3>
            <div class="freeCourse-swiper">
                     <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in freeCourseList">
                       <div class="freeCourse-box">
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
           freeCourseList:[
               {imgUrl: 'http://img.mukewang.com/58d339b7000146bf06000338-228-128.jpg',title:'WeTest移动测试系列沙龙-手游安全测试',price:'198',learnNumber: '589',targetSrc:'http://coding.imooc.com/wap/classindex/cid/83'},
               {imgUrl: 'http://img.mukewang.com/58d87782000175e006000338-228-128.jpg',title:'如何写好测试用例',price:'128',learnNumber: '988',targetSrc:'http://coding.imooc.com/wap/classindex/cid/78'},
               {imgUrl: 'http://img.mukewang.com/58cf8c2e00014c8406000338-228-128.jpg',title:'机器学习-实现简单神经网络',price:'78',learnNumber: '',targetSrc:'http://coding.imooc.com/wap/classindex/cid/48'},
               {imgUrl: 'http://img.mukewang.com/58cf6639000183f406000338-228-128.jpg',title:'Spark从零开始',price:'99',learnNumber: '345',targetSrc:'http://coding.imooc.com/wap/classindex/cid/75'},
               {imgUrl: 'http://img.mukewang.com/58b7b2ed0001cc1506000338-228-128.jpg',title:'Android语音词典',price:'99',learnNumber: '345',targetSrc:'http://coding.imooc.com/wap/classindex/cid/75'}
           ]
        }
    },
    mounted(){
        var actualSwiper = new Swiper('.freeCourse-swiper .swiper-container',{
            spaceBetween: 12
        });
    }
}
</script>
<style type="text/css"  scope>
 @import './../../../static/swiper.css';
.freeCourse-main{
    width: 100%;
    margin-top: 12px;
}
.freeCourse-container{
    padding:0 12px 0 12px;
}
.freeCourse-title{
    display: block;
    width: 100%;
    height: 44px;
}
.freeCourse-title span{
    display:block;
    width: 50%;
    float: left;
    text-align: left;
    height: 44px;
    line-height: 44px;
    color: #868f9a;
}

.freeCourse-title .more{
     display:block;
    width: 50%;
    float: left;
    text-align: right;
    height: 44px;
    line-height: 44px;
    color: #868f9a;
}
.freeCourse-swiper .swiper-container{
    width: 100%;
}

.freeCourse-swiper .swiper-slide{
    width: 160px !important;
}
.freeCourse-box{
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
