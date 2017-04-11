<template>
    <div class="slide-main">
      <div class="slider-wrapper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in url">
                    <a :href="item.clickUrl">
                         <img :src="item.imgUrl" width="100%" height="100%" alt='slider'>
                    </a>
                    <!--<router-link :to='item.clickUrl'>
                         <img :src="item.imgUrl" width="100%" height="100%" alt='slider'>
                    </router-link>-->
                </div>
            </div>
            <!--分页器-->
            <div class="swiper-pagination"></div>
        </div>
       </div>
    </div>
</template>
<script>
import Swiper from './../../../static/swiper.js'
   export default {
     name : 'header',
     data() {
       return {
          url: [
              {'imgUrl': 'https://img3.doubanio.com/img/files/file-1486953805-0.jpg','clickUrl':'https://fund.gstianfu.com'},
              {'imgUrl': 'https://img3.doubanio.com/img/files/file-1485236684-0.jpg','clickUrl':'https://fund.gstianfu.com'},
              {'imgUrl': 'https://img3.doubanio.com/img/files/file-1487144115-0.jpg','clickUrl':'https://fund.gstianfu.com'},
              {'imgUrl': 'https://img3.doubanio.com/img/files/file-1486953805-0.jpg','clickUrl':'https://fund.gstianfu.com'},
              {'imgUrl': 'https://img3.doubanio.com/img/files/file-1485236684-0.jpg','clickUrl':'https://fund.gstianfu.com'}
          ]
       }
     },
     mounted (){
       var mySwiper = new Swiper('.slide-main .swiper-container',{
           loop: true,
           pagination: '.swiper-pagination'
       });
     }
   }
</script>
<style type="text/css" scope>
   @import './../../../static/swiper.css';
   .main-wrapper{
       width: 100%;
       max-width: 640px;
       margin: 0 auto;
       overflow: hidden;
       position: relative;
   }

    .swiper-container{
           width: 100%;
           margin-top: 3px;
       }
</style>