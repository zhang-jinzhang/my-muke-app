<template>
    <div class="nav-main">
        <div class="nav-container">
            <ul clsass="nav-list">
                <li class="nav-item" v-for="item in navsList">
                    <a class="nav-box">
                        <div class="nav-content">
                            <h3 class="nav-title">{{item.title}}</h3>
                            <p class="nav-desc">{{item.desc}}</p>
                            <img :src="item.imgUrl"  :alt="item.title" width="30" height="28"/>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="clear"></div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'nav',
    data(){
        return {
          navsList: [
              {imgUrl:'http://m.imooc.com/m/img/home/course_bg.png',title:'课程',desc:'精致免费课程',targetUrl:'http://m.imooc.com/course/list'},
              {imgUrl:'http://m.imooc.com/m/img/home/shizhan_bg.png',title:'实战',desc:'战已学 学为战',targetUrl:'http://coding.imooc.com/wap/courselist'},
              {imgUrl:'http://m.imooc.com/m/img/home/wenda_bg.png',title:'猿问',desc:'解答开发疑惑',targetUrl:'http://m.imooc.com/wenda/'},
              {imgUrl:'http://m.imooc.com/m/img/home/article_bg.png',title:'手记',desc:'获取撩妹技巧',targetUrl:'http://m.imooc.com/article/'}
          ]
        }
    }
}
</script>
<style lang="less"  scope>
.nav-main{
 width: 100%;
 border-bottom: 1px solid #e7e7e7
}

.nav-container{
    width: 100%;
    height: 75px;
}
.nav-list{
    width: 100%;
    float: left;
}

.nav-item{
    width: 25%;
    float: left;
}
.nav-box{
    display: block;
    width: 100%;
    text-align: center;
    padding:8px 0 0 0;
}
.nav-content{
    width: 100%;
}
.nav-content img{
    display: block;
    margin: 5px auto 0;
}
.nav-title{
    color:#3e3e3e;
    font-size: 14px;
    font-weight: bold;
    font-family: '微软雅黑'
}
.nav-desc{
    color: #737373;
    font-size: 12px;
    padding-top: 5px;
}
</style>