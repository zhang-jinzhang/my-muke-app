<template>
    <div class="header-wrapper">
      <div class="container">
         <div class="header-home">首页</div>
         <div class="header-seacher">
             <form>
                 <div class="form-group">
                     <input type="search" class="form-input" placeholder="请输入内容"/>
                     <div class="search-button"></div>
                 </div>
             </form>
         </div>
         <div class="header-personal">
             个人中心
         </div>
      </div>
    </div>
</template>
<script>
   export default {
     name : 'header',
     data() {
       return {

       }
     },
     methods: {

     }
   }
</script>
<style lang="less" scope>
   .header-wrapper{
       width: 100%;
       max-width: 640px;
       margin: 0 auto;
       overflow: hidden;
       position: relative;
       .container{
           width: 100%;
           height: 44px;
           background-color: #f8f8f8;
           .header-home{
             width: 25%;
             height: 44px;
             line-height: 44px;
             float: left;
             box-sizing:border-box;
             padding-left: 12px;
           }
           .header-seacher{
             width: 50%;
             float: left;
             .form-group{
                 width: 100%;
                 height: 44px;
                 position: relative;
                 .form-input{
                     width: 100%;
                     height: 44px;
                     line-height: 44px;
                     background-color: #f8f8f8;
                     border-bottom: 1px solid #bebebe;
                 }
                 .search-button{
                     width:25%;
                     height: 44px;
                     font-size: 14px;
                     color: #f3f7fc;
                     position: absolute;
                     right: 15px;
                     top: 0;
                     background: url('http://img2.web07.cn/UpPic/Png/201411/01/30220501143805183.png') no-repeat top center;
                     background-size: 100% 100%;
                 }
             }
           }
           .header-personal{
             width: 25%;
             height: 44px;
             line-height: 44px;
             float: left;
             box-sizing:border-box;
             padding-right: 12px;
             text-align: right;
           }
       }
   }
</style>