<template>
    <div class="footer-wrapper">
        <div class="footer-container">
            <a class="footer-link">下载App</a>
            <a class="footer-sugges">
                意见反馈
                <em></em>
            </a>
            <div class="clear"></div>
        
        </div>
         <p>Copyright © 2016 小胖科技发展有限公司</p>
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
   .clear{
       clear: both;
   }
   .footer-wrapper{
       width: 100%;
       margin: 0 auto;
       background-color: #f8f8f8;
        >p{
             font-size: 12px;
             color: #868f9a;
             text-align: center;
             padding-bottom: 16px;
         } 
       .footer-container{
           width: 50%;
           margin: 0 auto;
           text-align: center;
         >a{
           width: 50%;
           padding: 16px 0;
           display: block;
           text-align: center;
           font-size: 12px;
           color: #868f9a;
           float: left;
           position: relative;
           >em{
               content: '';
               display: block;
                position: absolute;
                left: 0;
                top: 15px;
                height: 15px;
                width: 1px;
                background-color: #c3c7cb;
                zoom: 1;
           }
          }
    
       }

   }
</style>