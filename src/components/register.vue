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
		            	<em class="m-r nav-active p-sign">注册</em>
		            </div>     
                    <div class="user message-sign">
			        	<input class="new-message" type="text" id="captcha" autocomplete="off" placeholder="请输入图形验证码" maxlength="4">
			        	<img class="get-captcha" src="http://www.qk365.com/security/captcha.do" id="imgCode">
			        </div>  
                    <input class="" type="text" name="mobile" id="mobile" autocomplete="off" placeholder="请输入手机号" onkeyup="value=value.replace(/\D/g,'')" maxlength="11">                                                        
                    <div class="message-sign">
						<input class="password new-message" type="text" name="smsCode" id="smsCode" autocomplete="off" placeholder="请输入短信验证码" onkeyup="value=value.replace(/\D/g,'')" maxlength="10">
						<button class="get-message" type="button" id="smsCodeBtn">发送验证码</button>
					</div>     
                    <div class="again-login" id="provisions">
						<input type="checkbox" id="protocol" name="" style="position:relative;top:2px;">
						<span>我已阅读并同意<strong id="test2" style="cursor:pointer;" @click="dialogVisable=true">《网站注册服务条款》</strong></span>
					</div>   
                    <input id="register" class="btn" type="submit" value="立即注册">                                                    
            </div>
        
        </section>
         <el-dialog
          title="网站注册服务条款"
          :visible.sync="dialogVisable"
          width="40%"
          >
<div class="danchu_k">
&nbsp;&nbsp;&nbsp;&nbsp;尊敬的用户，欢迎您注册成为超享租时尚租房网站的用户。此服务条款详细表述您在“超享租时尚租房”网站享受我们的服务时所须遵守的条款，如您有任何疑问，请及时与我们联系。
在您注册成为“超享租时尚租房”电子商务用户（以下简称：本网站用户）前，请务必仔细阅读本用户协议、隐私保护、以及其他本网站公布之相关有效规则、文件，一旦您注册成为了本网站用户即表示您已经阅读、同意并接受本网站相关法律文件中所含的所有条款。如果我们对本声明进行了任何变更，我们会在“超享租时尚租房”官方网站页面上发布相关变更事项的通知，所有协议内容在发布之日后自动生效。如您有任何疑问，请先致电我们的客服。 
一、服务条款的确认和接纳
超享租时尚租房网站各项服务的所有权和运作权归本网站拥有。
邮件/短信服务：
超享租时尚租房网站会通过邮件、短信的形式，对本网站注册、预约用户发送订单信息、促销活动等告知服务。如果你不想接受来自超享租时尚租房网站的邮件、短信，您可以向超享租时尚租房网站提出退阅申请，并注明您的E-mail地址、手机号或相关地址信息，超享租时尚租房网站会在收到申请后为您办理退阅。

<h3>二、用户注册 </h3>
<p> 1、在线用户注册成功后，您将拥有一个超享租（商城、社区）专用免费帐号及相应的密码，该帐号和密码将成为用户登录“超享租（商城、社区）”、享受“超享租（商城、社区）”服务、发表评论、预约房源等服务的凭证。</p>
<p> 2、每位用户只允许在“超享租（商城、社区）”拥有一个有效账户，如有证据证明用户存在恶意注册多个账户的情形，超享租有权采取取消、冻结或关闭账号等措施。该账户被取消、冻结或关闭之前所作出的行为引起的所有法律后果均由该用户承担，如该行为造成超享租官网损失的，用户需承担相应的损害赔偿责任。</p>
 <p>3、享受“超享租（商城、社区）”服务过程中，用户有义务保管好其个人账号及密码，并对他人使用私人计算机作出限制。用户不得以任何形式擅自转让或授权他人使用自己的“超享租（商城、社区）”帐号及密码。如果因为用户管理不善造成帐号、密码等被复制或被盗用，相应损失由用户自行承担。同时，通过该用户的个人账户在“超享租（商城、社区）”上发生的所有活动以及产生的责任，亦应由该用户承担。</p>
 <p>4、注册用户不得采用测试、欺骗等任何非法手段，盗取其他用户的账户信息或对他人进行骚扰。</p>
<p> 5、超享租承诺仅根据本网站服务目的使用用户个人信息。服务目的包括但不限于预约确认、时间安排、客户回访、政策更新、用户通知、发送促销信息、商业信息以及其他与预约和服务相关的辅助服务等。如用户认为“超享租（商城、社区）”超范围使用了其个人信息，请立即与客服中心联系，上海超享租设备租赁有限公司将核实处理。</p>
<h3>三、用户隐私保护 </h3>
<h4>维护与尊重用户个人隐私是“超享租时尚租房网站”的一项基本政策，因此，“超享租时尚租房网站”非依法律规定或其他有效法律约定不会向任何第三方披露、转让、出租或者出售预约用户名单、预约记录等涉及消费者个人信息的数据以及用户保存在“超享租时尚租房网站”各项服务中的非公开内容。
对用户注册资料的保护</h4>
用户可授权“超享租时尚租房网站”向第三方透露其注册资料，否则“超享租时尚租房网站”不会公开用户的姓名、住址、通信地址、电子邮箱、电话及帐号。以下情况除外：
<p>1）事先获得用户明确授权后，用户许可或授权“超享租时尚租房网站”通过电子邮件服务或其他方式透露这些信息； </p>
<p>2）相应的法律、法规要求以及按照有关政府主管部门的要求，需要“超享租时尚租房网站”提供用户的个人资料；</p>
<p>3）为了维护交易双方、用户和（或）“超享租时尚租房网站”、 上海超享租设备租赁有限公司合法利益；</p>
<p>4）“超享租时尚租房网站”可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与“超享租时尚租房网站”同等的保护用户隐私的责任，则“超享租时尚租房网站”有权将用户的注册资料等提供给该第三方；</p>
<p>5）在不透露单个用户隐私资料的前提下，“超享租时尚租房网站”有权对整个用户数据库进行分析并对用户数据库进行商业上的利用；</p>
<p>6）根据本网站已经公布之有效法律文件，本网站有权许可第三方使用该用户个人信息的其他情形。</p>
<h3>四、预约及留言管理 </h3>
<h4>注册用户在本网站进行商品预约和留言时必须遵守以下条款 ：</h4>
<p>1. 您在本网站的一切操作应遵守所有适用的中国法律法规、规章制度和地方性法规要求。同时您必须确保遵守本用户协议和隐私保护以及纳入上述文件的所有其它条款、规则等一切相关内容。</p>
<p>2. 如您在本网站预约商品，您有义务完成与本网站的预约流程（法律或本用户协议禁止的预约除外）。预约操作执行并下预约单后，即表示您同意该商品描述所含的一切出售条件，（商品出售条件不违反本协议并合法）。</p>
<p>3. “超享租时尚租房网站”保留对商品预约数量的限制权。在下预约单的同时，您也同时承认了您拥有购买这些产品的权利能力和行为能力，并且将您对您在订单中提供的所有信息的真实性负责。</p>
<p>4. “超享租时尚租房网站”网站上的广告，价目表和声明并不构成要约。在本网站对您的预约单进行确认之前，您和本网站之间不存在合同关系。本网站有权在发现显现的商品及订单的明显错误或缺货的情况下，单方面撤回该信息或终止交易。5. 商品价格和可获性都在网站上指明。这类信息将随时更改且不另行通知。在确认了您的订单后发生的意外情况，比如由于商家提价、市场调节、税额变化引起的价格变化、或是由于网站的错误等造成价格变化，本网站会通过E-mail或电话形式通知您，让您决定是否取消订单。</p>
<p>6. 拒绝提供担保:用户明确同意信息服务的使用由用户个人承担风险。 “超享租时尚租房网站”不担保服务不会受中断，对服务的及时性，安全性，出错发生都不作担保，但会在能力范围内，避免出错。</p>
<p>8. 用户不能在本网站上使用谩骂，侮辱，诽谤等不雅言语以及其它攻击其他用户和网站的言语。“超享租时尚租房网站”有权自行决定删除此类言论及其它“超享租时尚租房网站”认为不合适的言论，而不负有通知义务并承担责任。</p>
<p>9. 您在本网站下订单并完成订单交易后，如出现任何问题需与客服人员取得联系，并按照本网站“消费保障”政策进行处理。</p>
<h3>六、网站安全 </h3>
<h4>您同意，未经本网站明示书面准许，您不会为了任何目的使用任何机器人、蜘蛛软件、刷屏软件或其他自动方式进入网站。此外，您同意绝不进行以下操作：</h4>
<p>1. 进行任何对本网站造成或可能造成（按本网站自行酌情确定）不合理或不合比例的重大负荷的行为；</p>
<p>2. 未经本网站事先明示书面准许，对本网站的任何内容（除您的个人信息以外）制作拷贝、进行复制、修改、制作衍生作品、分发或公开展示等的侵权行为；</p>
<p>3. 干扰或试图干扰本网站的正常工作或活动；</p>
<p>4. 在本网站中使用可能视为被禁止或可能被禁止的任何内容；</p>
<p>5. 对本网站使用不良数据。包含可能破坏、改变、删除、不利影响、秘密截取、未经授权而接触，或占用任何系统、数据、个人资料的病毒、间谍软件、其他电脑程序等；</p>
<p>6、侵犯他人合法权益的行为；</p>
<p>7、违反法律法规或本网站有效法律文件约定之行为。</p>
<h3>七、知识产权声明 </h3>
本网站所提供的网络服务的相关著作权、专利权、商标、商业隐私及其它权利，均属“中国婚博会官网”所有。非经本网站同意，任何个人或单位均不得擅自下载、复制、传输、修改、编辑制作等操作，否则将承担所有法律责任。“超享租时尚租房网站”拥有本网站服务器中的任何数据信息的绝对所有权。 
<h3>八、免责声明 </h3>
本网站用户同意接收来自“超享租时尚租房网站”或者“超享租时尚租房网站”合作伙伴发出的信息，包括但不限于电子邮件，手机短消息。
 “超享租时尚租房网站”有义务在技术上确保网站的正常运行，尽力避免服务中断或将中断时间限制在最短时间内，保证用户网上预约活动顺利进行。但如因不可抗力或其他本网站无法控制的因素使网站崩溃或无法正常使用导致网上预约无法完成或丢失有关的信息、记录等，本网站不承担责任；任何用户向本网站提供错误、不完整、不实信息等造成不能正常使用本网站服务或遭受任何其他损失，概与本网站无关。
本网站《免责声明》中所列之其他情形。
<h3>九、服务终止</h3>
<h4>1. 注册会员或“超享租时尚租房网站”可随时根据实际情况中断一项或多项服务。“超享租时尚租房网站”不需对任何个人或第三方负责而随时中断服务。会员若反对任何服务条款的建议或对后来的条款修改有异议，或对“超享租时尚租房网站”服务不满，会员可以行使如下权利：</h4>
<p>1)会员用户不再享受“超享租时尚租房网站”相关信息服务 。</p>
<p>2)通知“超享租时尚租房网站”停止对该会员的服务。</p>
<p>3)结束用户会员服务后，注册会员使用“超享租时尚租房网站”服务的权利马上中止。会员服务终止后，会员没有权利，“超享租时尚租房网站”也没有义务传送任何未处理的信息或未完成的服务给会员或第三方。</p>
<h4>2. 如有以下行为的注册会员将会被取消会员资格：</h4>
<p>1)违反“超享租时尚租房网站”注册条款。</p>
<p>2)提供虚假注册会员个人资料。</p>
<p>3)注册会员有损公司利益的行为。 </p>
<p>4)有违反中国的法律、法规、违反互联网相关规定的行为。 </p>
<p>5)用户将会员帐号用于出售、拍卖等，利用会员帐号当作商品进行交易的行为。 </p>
<p>6)用户出借、转让会员帐号给其他会员等不恰当行使会员权利的行为。</p>
<p>7)利用盗取密码、诈骗等不正当手段获得会员帐号的行为。</p>
<p>8)恶意在商品留言，博客、微博等个人空间中多次或大量使用谩骂，侮辱，诽谤等不雅言语的行为。</p>
<h3>十、其它 </h3>
<p>1、本服务条款以及与使用“超享租时尚租房网站”服务相关的声明、说明、规则、政策、程序，构成“超享租时尚租房网站”与用户之间有效的完整协议，将对用户持续有效，有效期至用户注销或者被取消账户、且停止一切使用“超享租时尚租房网站”服务的行为后，但“超享租时尚租房网站”与用户间已经产生的权利义务，仍对双方有约束力。</p>
<p>2、上海超享租设备租赁有限公司将视向用户所提供服务内容之特性，要求用户在注册超享租时尚租房网站提供的有关服务时，遵守特定的条件和条款；如该特定条件和条款与以上服务条款有任何不一致之处，则以特定条件和条款为准。</p>
<p>3、本服务条款中的任何条款无论因何种原因完全或部分无效或不具有执行力，其余条款仍应有效并且有约束力。</p>
<p>4、本服务条款的标题、序号均为方便阅读而设定，不影响条款实际含义及其效力。</p>
<p>5、本服务条款自公布及适用的当天生效，有效期持续至新版本发布之时。</p>
<p>6、以上条款的解释权归上海超享租设备租赁有限公司最终所有。</p>
	</div>    
        </el-dialog>
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
  background: url(../assets/image/bannner3.jpg);
}
</style>
