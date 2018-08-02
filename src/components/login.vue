<template>
  <div>
        <header>
            <div class="header width">
        <router-link to="/">
                    <img class="imgs" src="@/assets/image/logo.png" alt="" width="100" >
                </router-link >
                <span >
                    <i class="el-icon-location"></i>南京
                </span>
                
                <div style="float:right">
                    <div class="phone">
			                  <p class="ph1">
			                  	<img src="@/assets/image/icon01.png" alt="超享租">&nbsp;看房热线：&nbsp;8:00~22:00
			                  </p>
			                  <p class="ph2">400-1737-365</p>
		                </div>
                </div>
                <div style="float:right">

		                <router-link to="/register" id="loginli" title="上海租房" style="    line-height: 60px;
                        margin-right: 35px;
                        color: #5b5b5b;
                        font-size: 16px;
                    ">注册</router-link>
		                <router-link to="/userLogin" id="loginli" title="上海租房" style="    line-height: 60px;
                        margin-right: 35px;
                        color: #5b5b5b;
                        font-size: 16px;
                    ">登录</router-link>
		                <!--头部登录结构 Begin -->

		                <!--头部登录结构 End -->
		                <!-- <a id="regli" href="javascript:logOut();">退出</a> -->
	
                </div>
            </div>
        </header>
        <section>
            <div class="card">
                    <h1>
                      <img src="@/assets/image/logo.png" alt="" width="100" >
                    </h1>
                    <div class="login-nav">
		            	<em class="m-r nav-active p-sign">登录</em>
		            </div>     
                    <div class="user message-sign">
			        	<input class="new-message" type="text" id="captcha" autocomplete="off" placeholder="请输入图形验证码" maxlength="4">
			        	<img class="get-captcha" src="http://www.qk365.com/security/captcha.do" id="imgCode">
			        </div>  
                    <input class="" type="text" name="mobile" id="mobile" autocomplete="off" placeholder="请输入账户号" onkeyup="value=value.replace(/\D/g,'')" maxlength="11">                                                        
                    <div class="message-sign">
						<input class="password new-message" type="text" name="smsCode" id="smsCode" autocomplete="off" placeholder="请输入密码" onkeyup="value=value.replace(/\D/g,'')" maxlength="10">
						<button class="get-message" type="button" id="smsCodeBtn">忘记密码</button>
					</div>     
                    <!-- <div class="again-login" id="provisions">
						<input type="checkbox" id="protocol" name="" style="position:relative;top:2px;">
						<span>我已阅读并同意<strong id="test2" style="cursor:pointer;" @click="dialogVisable=true">《网站注册服务条款》</strong></span>
					</div>    -->
                    <input id="register" class="btn" type="submit" value="立即登录">                                                    
            </div>
        
        </section>
  
  </div>
</template>

<script>
import { addClass } from "@/assets/js/dom";
import cSection from "@/components/common/section";
import cNews from "@/components/common/news";
export default {
  name: "HelloWorld",
  data() {
    return {
      dialogVisable: false
    };
  },

  methods: {},
  components: {
    cSection,
    cNews
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 400px;
  height: 520px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -260px;
  font-size: 30px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  padding: 0 20px;
}
.card h1 {
  text-align: center;
}
.login-nav {
  padding-bottom: 17px;
  border-bottom: 1px solid #e5e5e5;
  margin-top: -20px;
}
.login-nav em {
  font-size: 18px;
  color: #999999;
  cursor: pointer;
}
.nav-active {
  border-bottom: 2px solid #5f5f5f;
  padding-bottom: 12px;
  color: #5f5f5f !important;
}
.m-r {
  margin-right: 47px;
}
.message-sign {
  margin-top: 30px;
  height: 48.7px;
  overflow: hidden;
  margin-bottom: 20px;
}
.new-message {
  width: 248px !important;

  padding-right: 120px !important;
}
input[type="text"] {
  width: 358px;
  display: block;
  font-size: 14px;
  padding: 15px 10px;
  background-color: #efefef;
  border: 1px solid #e4e4e4;
  opacity: 0.7;
  filter: alpha(opacity=70);
  margin-bottom: 20px;
  border-radius: 5px;
}
.get-captcha {
  font-family: "微软雅黑";
  color: #00aa84;
  border: none;
  background: none;
  display: inline;
  cursor: pointer;
  float: right;
  position: relative;
  left: -32px;
  top: -65px;
}
.get-message {
  font-family: "微软雅黑";
  color: #00aa84;
  border: none;
  background: none;
  display: inline;
  cursor: pointer;
  float: right;
  position: relative;
  left: -32px;
  top: -55px;
}
#provisions {
  margin-bottom: 0;
  margin-top: 20px;
}
.again-login {
  margin-bottom: 20px !important;
}
.again-login {
  font-size: 14px;
  margin-bottom: 45px;
  overflow: hidden;
}
.btn {
  font-family: "微软雅黑";
  width: 100%;
  height: 46px;
  font-size: 16px;
  color: #ffffff;
  line-height: 46px;
  background-color: #00aa84;
  border: 0;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.move-title {
  width: 1170px;
  margin: 120px auto 50px;
  height: 66px;
  line-height: 66px;
  text-align: center;
}
.moveSpan {
  display: inline-block;
  background: #f0f0f0;
  padding: 0 30px;
  border-radius: 30px;
  font-size: 50px;
}
.img {
  width: 100%;
  height: 100%;
  display: block;
  margin: auto;
  cursor: pointer;
}
.move {
  /* animation: head-move 2s; */
  position: relative;
  transition: all 1s;
}
.slider-item {
  animation: head-move 1s linear;
}
@keyframes head-move {
  0% {
    top: 50px;
    /* opacity: 0; */
  }
  40% {
    top: 50px;
    /* opacity: 0; */
  }
  100% {
    top: 0px;
    /* opacity: 1; */
  }
}

.person {
  width: 100%;
  background: url(../assets/image/person.jpg) no-repeat center;
  height: 635px;
  margin-top: 93px;
}
.person .personCont {
  width: 1170px;
  margin: 0 auto;
}
.person .personCont .introduce {
  width: 455px;
}

.person .personCont .introduce h5 {
  color: #21cfbb;
  font-size: 24px;
  padding-top: 137px;
}
.person .personCont .introduce h3 {
  color: #1a323e;
  font-size: 52px;
  margin: 20px 0 50px;
  width: 512px;
  line-height: 70px;
}
.person .personCont .introduce p {
  color: #1a323e;
  font-size: 14px;
  line-height: 28px;
}
.person .personCont .introduce .button {
  margin-top: 25px;
  position: relative;
}
.person .personCont .introduce .button .btnLf {
  width: 134px;
  height: 47px;
  position: absolute;
  top: 0;
  left: 0;
}
.person .personCont .introduce .button .btnRig {
  width: 160px;
  height: 47px;
  position: absolute;
  top: 0;
  left: 168px;
}
.person .personCont .introduce .button a {
  color: #1a323e;
  font-size: 16px;
  border: 1px solid #1a323e;
  border-radius: 30px;
  text-align: center;
  line-height: 47px;
  display: block;
}
.flowLay {
  margin-top: 50px;
  background: url(../assets/image/flowLay.jpg) no-repeat center;
  height: 170px;
}
.flowList {
  width: 1170px;
  margin: 0 auto;
}

.flowList .flowIcon01 {
  float: left;
  padding: 42px 30px 0;
  background: url(../assets/image/flowLine.png) no-repeat 95px 70px;
}
.flowList .flowIcon01 em {
  font-size: 18px;
  color: #fffefe;
  display: block;
  padding-top: 77px;
  background: url(../assets/image/flowBg01.png) no-repeat center 0;
}
.flowList .flowIcon02 {
  float: left;
  padding: 42px 35px 0 0;
  background: url(../assets/image/flowLine.png) no-repeat 213px 70px;
}
.flowList .flowIcon02 span {
  display: block;
  padding-left: 94px;
  background: url(../assets/image/flowLine.png) no-repeat -48px 28px;
}
.flowList .flowIcon02 em {
  font-size: 18px;
  color: #fffefe;
  display: block;
  padding-top: 77px;
  background: url(../assets/image/flowBg02.png) no-repeat center 0;
}
.flowList .flowIcon03 {
  float: left;
  padding: 42px 90px 0 0;
  background: url(../assets/image/flowLine.png) no-repeat 163px 70px;
}
.flowList .flowIcon03 span {
  display: block;
  padding-left: 80px;
  background: url(../assets/image/flowLine.png) no-repeat -97px 28px;
}
.flowList .flowIcon03 em {
  font-size: 18px;
  color: #fffefe;
  display: block;
  padding-top: 77px;
  background: url(../assets/image/flowBg03.png) no-repeat center 0;
}
.flowList .flowIcon04 {
  float: left;
  padding: 42px 140px 0 0;
  background: url(../assets/image/flowLine.png) no-repeat 145px 70px;
}
.flowList .flowIcon04 span {
  display: block;
  padding-left: 80px;
  background: url(../assets/image/flowLine.png) no-repeat -116px 28px;
}
.flowList .flowIcon04 em {
  font-size: 18px;
  color: #fffefe;
  display: block;
  padding-top: 77px;
  background: url(../assets/image/flowBg04.png) no-repeat center 0;
}
.flowList .flowIcon05 {
  float: left;
  padding: 42px 40px 0;
  background: url(../assets/image/flowLine.png) no-repeat -155px 70px;
}
.flowList .flowIcon05 em {
  font-size: 18px;
  color: #fffefe;
  display: block;
  padding-top: 77px;
  background: url(../assets/image/flowBg05.png) no-repeat center 0;
}
.w1170TabMenu {
  overflow: hidden;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 18px;
  margin: 50px 0 0;
}
.w1170TabMenu ul {
  width: 478px;
  display: block;
  margin: 0 auto;
  position: relative;
}
.w1170TabMenu ul li {
  float: left;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #818181;
  width: 110px;
  margin: 0 4px;
  background: #e5e5e5;
  height: 38px;
  line-height: 38px;
}
.w1170TabMenu ul li.selected {
  color: #20cebb;
  background: url(../assets/image/selectedBg.png) no-repeat center;
  height: 45px;
}
.fotLink {
  font-size: 12px;
  color: #818181;
  line-height: 24px;
  padding: 22px 0;
  text-align: center;
}
.fotLink a {
  color: #818181;
  white-space: nowrap;
  display: inline-block;
  margin: 0 5px;
}
.Copyright {
  font-size: 12px;
  text-align: center;
  color: #848484;
  padding-top: 10px;
}
header {
  position: fixed;
  height: 60px;
  width: 100%;
  background: #fff;
  z-index: 99;
  box-shadow: 0 1px 3px #959595;
}
header .imgs {
  position: absolute;
  top: -20px;
}
header span {
  border-left: 1px solid #e9e9e9;
  padding-left: 28px;
  position: relative;
  color: #21cfbb;
  left: 100px;
  line-height: 60px;
}
.phone {
  padding: 10px 22px;
  margin-right: 80px;
}
.phone .ph1 {
  font-size: 12px;
}
.phone .ph2 {
  color: #21cfbb;
  font-size: 21px;
  font-weight: bold;
  /* margin-top: 5px; */
}
.block {
  position: relative;
  top: 60px;
}
section {
  position: fixed;
  width: 100%;
  top: 60px;
  bottom: 0;
  background: url(../assets/image/bannner2.jpg);
}
</style>
