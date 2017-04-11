<template>
    <div class="frontend-main">
        <div class="frontend-container">
            <h3 class="frontend-title">
                <span>Web前端工程师</span>  
                <a class="more">更多></a>
            </h3>
            <div class="frontend-list">
                    <div class="frontend-box" v-for="item in frontendList">
                       <img :src="item.imgUrl" width="160"  alt=''/>
                        <div class="img-desc">
                            <h3 class="img-title">{{item.title}}</h3>
                            <p>{{item.learnNumber}}人在学习</p>
                        </div>
                    </div>
            </div>
            <div class="clear"></div>
         </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'nav',
    data(){
        return {
           frontendList:[
               {imgUrl: 'http://img.mukewang.com/5746720700019b5a06000338-228-128.jpg',title:'快乐的sublime编辑器',learnNumber: '9998',targetSrc:'http://coding.imooc.com/wap/classindex/cid/83'},
               {imgUrl: 'http://img.mukewang.com/58533fe900019f3006000338-228-128.jpg',title:'AC2016腾讯前端技术大会',learnNumber: '8484',targetSrc:'http://coding.imooc.com/wap/classindex/cid/78'},
               {imgUrl: 'http://img.mukewang.com/5704ae0000015fe706000338-228-128.jpg',title:'前端性能优化',learnNumber: '4211',targetSrc:'http://coding.imooc.com/wap/classindex/cid/48'},
               {imgUrl: 'http://img.mukewang.com/5518ecf20001cb4e06000338-228-128.jpg',title:'高德云图在线制作地图',learnNumber: '2564',targetSrc:'http://coding.imooc.com/wap/classindex/cid/75'}
            
           ]
        }
    },
    mounted(){
        
    }
}
</script>
<style type="text/css"  scope>
.clear{
    clear: both;
}
.frontend-main{
    width: 100%;
    margin-top: 12px;
}
.frontend-container{
    padding:0 12px 0 12px;
}
.frontend-title{
    display: block;
    width: 100%;
    height: 44px
}
.frontend-title span{
    display:block;
    width: 50%;
    float: left;
    text-align: left;
    height: 44px;
    line-height: 44px;
    color: #868f9a;
}

.frontend-title .more{
     display:block;
    width: 50%;
    float: left;
    text-align: right;
    height: 44px;
    line-height: 44px;
    color: #868f9a;
}
.frontend-list{
    width: 100%;
}
.frontend-box{
    width: 50%;
    height: 100px;
    margin-bottom: 16px;
    float: left;
    position: relative;
}

.frontend-box .img-desc{
    width:100%;
    background-color: #fff;
    position: absolute;
    top: 50px;
    left: 0;
}
.frontend-box .img-desc .img-title{
   padding-top:12px;
    font-size: 14px;
    font-weight: bold;
    color: #36363c;
    text-align: center;
     text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}
.frontend-box .img-desc p{
    font-size: 12px;
    color: #868f9a;
    padding:8px 0;
}
</style>
