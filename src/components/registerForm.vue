<template>
  <div class="main-wrapper">
      <div class="logo">
         <img src='../assets/images/logo.png' width="90" height="90" alt="logo"/>
      </div>
      <form>
        <div class="form-group">
            <label class="form-label">用户名：</label>
            <input type="tel" placeholder="请输入11位手机号码" maxlength="11" class="form-input" name="telphone">
            <div class="clear"></div>
        </div>
        
        <div class="form-group">
            <label class="form-label">验证码：</label>
            <input type="tel" placeholder="请输入验证码" maxlength="6" class="form-input" name="checkcode">
            <div class="clear"></div>
            <button type="button" class="get-checkcode">获取短信验证码</button>
        </div>

         <div class="form-group">
            <label class="form-label">密码：</label>
            <input type="password" placeholder="请输入密码"  class="form-input" name="password">
            <div class="clear"></div>
        </div>

        <div class="form-group">
            <button type="button" class="form-button" @click="register">注册</button>
        </div>    
      </form>
  </div>
</template>

<script>
export default {
  name: 'form',
  data () {
    return {
       
    }
  },
  methods: {
    register: function(){
      var phone_number = this.telphone,
        password = this.password;   
      console.log(phone_number);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  scope>
  .clear{
    clear: both;
  }
  .main-wrapper{
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    .logo{
      width: 90px;
      height: 90px;
      margin: 0 auto;
    }

   .form-group{
     width: 85%;
     margin: 0 auto 16px;
     position: relative;
     .form-label{
       width: 25%;
       height: 44px;
       padding-top: 24px;
       box-sizing: border-box;
       float:left;
       display:block;
       color: #999;
     }
     .get-checkcode {
       width: 35%;
       height: 34px;
       text-align: center;
       font-size: 12px;
       border: 1px solid #c0c0c0;
       border-radius: 4px;
       color: #7e7e7e;
       position: absolute;
       right: 0;
       top: 0;
     }
     .form-input{
       width: 70%;
       height: 44px;
       line-height: 44px;
       padding-left: 5px;
       float:left;
       border-bottom: 2px solid #d2d2d2;
       color: #999;
     }
     .form-button{
       width: 100%;
       height: 44px;
       margin-top: 16px;
       line-height: 44px;
       text-align: center;
       border-radius: 4px;
       color: #fff;
       letter-spacing: 2px;
       background:-webkit-linear-gradient(left,rgb(65,184,131),rgb(65,84,131));
       background:linear-gradient(left,rgb(65,184,131),rgb(65,184,131));
     }
   }
  }
</style>
