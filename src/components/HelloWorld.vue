<template>
  <div>
        <header>
            <div class="header width">
              <router-link to="/">
                <img class="imgs" src="@/assets/image/logo.png" alt="" width="100" >
              </router-link>
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


       <div class="block" style="">
         <el-carousel trigger="click" height="450px" style="zIndex:100" >
           <el-carousel-item v-for="(item,i) in imgSrc" :key="i">
             <img :src="item.src" alt="" class="img" >
           </el-carousel-item>
         </el-carousel>
          <div class="baBotShadow">
          			<div class="babot1170">
          				<dl class="babotForm">
          					<div class="clearfix">
          						<dt>
          							<span class="babotInp fL"> <input class="babotText fl" type="text" placeholder="输入区域、地铁、小区名" onfocus="addLayer(this);" name="" id="houseRoad" onkeydown="keyUpSearch('index')">
          							</span>
          							<form action="javacript:void(0)" method="post" id="searchIndexForm" name="searchIndexForm">
          								<input type="hidden" name="queryDto.romAds" id="romAds" value=""> <input type="hidden" name="queryDto.roomCode" id="roomCode" value="">
          							</form>
          						</dt>
          						<dd>
          							<input type="hidden" id="houseRoad_b" value=""> <input type="hidden" id="stamp" value="spread"> <input type="button" @click="go" value="搜索" onclick="searchByKeyWord('house');" class="HomeSo fL"> <a href="javacript:void(0)" class="homeMap fL" title="上海租房"><span  @click="go">地图找房</span></a>
          									<a href="javacript:void(0)" class="homeBus fL" title="上海租房"  @click="go"><span>公交站点找房</span></a>

          									<form action="javacript:void(0)" method="post" id="searchMayForm2" name="searchMayForm2">
          										<input type="hidden" name="address" id="address" value=""> <input type="hidden" name="linkaddress" id="linkaddress" value="">
          									</form>
          						</dd>
          					</div>
          					<div class="babotArea" id="index_hot_xq">
          						<em> <i>热门板块：</i> <a href="javacript:void(0)"  title="嘉定城区租房">嘉定城区</a>
          							<a href="javacript:void(0)"  title="宝山顾村租房">宝山顾村</a>
          							<a href="javacript:void(0)"  title="松江老城租房">松江老城</a>
          							<a href="javacript:void(0)"  title="浦东唐镇租房">浦东唐镇</a>
          							<a href="javacript:void(0)"  title="闵行浦江镇租房">闵行浦江镇</a>
          							<a class="more-icon" href="javacript:void(0)"  title="上海租房"></a>
          						</em> <em> <i>热门小区：</i> <a href="javacript:void(0)"  title="好日子大家园租房">好日子大家园</a>
          							<a href="javacript:void(0)" target="_blank" title="浦恒馨苑租房">浦恒馨苑</a>
          							<a href="javacript:void(0)" target="_blank" title="培元新苑租房">培元新苑</a>
          							<a href="javacript:void(0)" target="_blank" title="海曲雅苑租房">海曲雅苑</a>
          							<a href="javacript:void(0)" target="_blank" title="谷水佳苑租房">谷水佳苑</a>
          							<a class="more-icon" href="javacript:void(0)" title="上海租房" target="_blank"></a>
          						</em>
          					</div>
          				</dl>
          			</div>
          		</div>         
       </div>  
       <div style="position:relative" class="width">
         <div class=" move-title">
            欢迎来到超享租,您是第 <span class="moveSpan">228,886</span> 位超享租服务的客户!
         </div>
         <div class="move">
        <c-section  :section="section1" :title="title1" :deTail="deTail1"></c-section>
         </div>
         <div class="move">
        <c-section  :section="section1" :title="title2" :deTail="deTail2"></c-section>         
         </div>
         <div class="move">
        <c-section  :section="section1" :title="title2" :deTail="deTail2"></c-section>         
         </div>
         <div class="move">
        <c-section  :section="section1" :title="title2" :deTail="deTail2"></c-section>         
         </div>
         <div class="move width">
            <div class="person ">
            			<div class="personCont">
            				<div class="introduce">
            					<h5>LAURA</h5>

            					<h3>青年客│甘肃到上海，摩羯座少女的青春理想！</h3>
            					<p>我很慢热，可我内心有光。我想通过自己的努力，走出属于我的一条路来。</p>

            					<div class="button">
            						<div class="btnLf">
            							<a href="javacript:void(0)" target="_blank" class="see" title="上海租房" style="background-color: rgb(33, 207, 187); color: white; border: 1px solid rgb(33, 207, 187);">查看详情</a>
            						</div>
            						<div class="btnRig btnLf">
            							<a href="javacript:void(0)" target="_blank" class="check" title="上海租房">更多明星租客</a>
            						</div>
            					</div>
            				</div>
            			</div>
            		</div>        
         </div> 
         <div class="move">
          <c-news  :section="section1" :title="title3" :deTail="deTail3"></c-news>         
         </div>                                   
      </div>   
    <div class="flowLay">
    		<div class="flowList">
    			<span class="flowIcon01"><em>挑选房屋</em></span>
    			<div class="flowIcon02">
    				<span><em>支付定金或者预定看房</em></span>
    			</div>
    			<div class="flowIcon03">
    				<span><em>了解入住须知</em></span>
    			</div>
    			<div class="flowIcon04">
    				<span><em>签约付款</em></span>
    			</div>
    			<span class="flowIcon05"><em>开始入住</em></span>
    		</div>
    </div>  
    <div class="footer ">
  
        <div class="w1170TabMenu">
					<ul>
						<li :class="{selected:currentIndex==0}" @click="currentIndex=0">友情链接</li>
						<li :class="{selected:currentIndex==1}" @click="currentIndex=1">小区找房</li>
						<li :class="{selected:currentIndex==2}" @click="currentIndex=2">轻松找房</li>
						<li :class="{selected:currentIndex==3}" @click="currentIndex=3">公交找房</li>
					</ul>
				</div>
      <div class=" width"  v-show="currentIndex==0">
						<div class="fotLink">
							<a title="上海租房" href="http://hz.qk365.com/list/a52-k435" target="_blank">凯旋</a>
								
								 | 
								 <a title="上海租房" href="http://esf.ks.fang.com" target="_blank">昆山二手房</a>
								
								 | 
								 <a title="上海租房" href="http://shanghai.qfang.com" target="_blank">上海Q房网</a>
								
								 | 
								 <a title="上海租房" href="http://www.bstzcs.com" target="_blank">农村自建房</a>
								
								 | 
								 <a title="上海租房" href="http://sh.58.com/pinpaigongyu/" target="_blank">上海公寓出租</a>
								
								 | 
								 <a title="上海租房" href="http://www.sizuo.com/" target="_blank">装修效果图</a>
								
								 | 
								 <a title="上海租房" href="javacript:void(0)/" target="_blank">上海租房</a>
								
								 | 
								 <a title="上海租房" href="http://sz.qk365.com/" target="_blank">苏州租房</a>
								
								 | 
								 <a title="上海租房" href="http://hz.qk365.com/" target="_blank">杭州租房</a>
								
								 | 
								 <a title="上海租房" href="http://bj.qk365.com/" target="_blank">北京租房</a>
								
								 | 
								 <a title="上海租房" href="http://jx.qk365.com/" target="_blank">嘉兴租房</a>
								
								 | 
								 <a title="上海租房" href="http://www.yuyanpingce.com/" target="_blank">床垫品牌排行榜</a>
								
								 | 
								 <a title="上海租房" href="http://nanjing.qfang.com/" target="_blank">南京Q房网</a>
								
								 | 
								 <a title="上海租房" href="http://hangzhou.fangtoo.com/cz/" target="_blank">房途网</a>
								
								 | 
								 <a title="上海租房" href="http://www.haogongzhang.com/index.html" target="_blank">装修网</a>
								
								 | 
								 <a title="上海租房" href="http://esf.sjz.fang.com/" target="_blank">石家庄二手房</a>
								
								 | 
								 <a title="上海租房" href="http://sh.58.com/ershoufang/" target="_blank">上海二手房</a>
								
								 | 
								 <a title="上海租房" href="http://www.juwai.com/" target="_blank">居外海外房产</a>
								
								 | 
								 <a title="上海租房" href="http://www.jia.com/shanghai/" target="_blank">上海装修</a>
								
								 | 
								 <a title="上海租房" href="http://www.tobosu.com/" target="_blank">土拨鼠装修网</a>
								
								 | 
								 <a title="上海租房" href="https://www.muniao.com/" target="_blank">短租公寓</a>
								
								 | 
								 <a title="上海租房" href="http://www.xishiqu.com/" target="_blank">西十区</a>
								
								 | 
								 <a title="上海租房" href="https://www.cool-de.com/" target="_blank">室内设计联盟</a>
								
								 | 
								 <a title="上海租房" href="http://www.glxcb.cn/" target="_blank">高陵网</a>
								
								 | 
								 <a title="上海租房" href="http://monitor.wenjuntech.com/" target="_blank">舆情监控</a>
								</div>
					</div>
    </div>
    <div class=" width" v-show="currentIndex==1">
     <div class="fotLink">
							<a title="松江登云苑租房" href="javacript:void(0)" target="_blank">松江登云苑租房</a>
								
								 | 
								 <a title="旭辉城租房" href="javacript:void(0)" target="_blank">旭辉城租房</a>
								
								 | 
								 <a title="崧泽绿地租房" href="javacript:void(0)" target="_blank">崧泽绿地租房</a>
								
								 | 
								 <a title="沁富佳苑租房" href="javacript:void(0)" target="_blank">沁富佳苑租房</a>
								
								 | 
								 <a title="招商雍华府租房" href="http://sz.qk365.com/xiaoqu/v2935" target="_blank">招商雍华府租房</a>
								
								 | 
								 <a title="绿地世纪雅苑租房" href="javacript:void(0)" target="_blank">绿地世纪雅苑租房</a>
								
								 | 
								 <a title="宝山佳境苑租房" href="javacript:void(0)" target="_blank">宝山佳境苑租房</a>
							
								 <a title="樟盛苑租房" href="javacript:void(0)" target="_blank">樟盛苑租房</a>
								
								 | 
								 <a title="德宁苑租房" href="javacript:void(0)" target="_blank">德宁苑租房</a>
								
								 | 
								 <a title="金海华城永华苑租房" href="javacript:void(0)" target="_blank">金海华城永华苑租房</a>
								
								 | 
								 <a title="宝山宝欣苑租房" href="javacript:void(0)" target="_blank">宝山宝欣苑租房</a>
								
								 | 
								 <a title="沁乐佳苑租房" href="javacript:void(0)" target="_blank">沁乐佳苑租房</a>
								
								 | 
								 <a title="同盛园租房" href="javacript:void(0)" target="_blank">同盛园租房</a>

								 | 
								 <a title="张江樟盛苑租房" href="javacript:void(0)" target="_blank">张江樟盛苑租房</a>
								
								 | 
								 <a title="登云苑租房" href="javacript:void(0)" target="_blank">登云苑租房</a>
								
								 | 
								 <a title="昆山裕花园一期租房" href="javacript:void(0)" target="_blank">昆山裕花园一期租房</a>
								
								 | 
								 <a title="塘泾南苑租房" href="javacript:void(0)" target="_blank">塘泾南苑租房</a>
								
								 | 
								 <a title="馨香三期灯辉公寓租房" href="javacript:void(0)" target="_blank">馨香三期灯辉公寓租房</a>
	  	</div> 
    </div>
 
    <div class=" width"  v-show="currentIndex==2">
        <div class="tabBox3" style="display: block;">
						<div class="fotLink">
						  	上海：
                                        <a title="长宁租房" href="javacript:void(0)" target="_blank"> 长宁</a>
											
												|
											<a title="杨浦租房" href="javacript:void(0)" target="_blank"> 杨浦</a>
											
												|
											<a title="崇明租房" href="javacript:void(0)" target="_blank"> 崇明</a>
											
												|
											<a title="浦东租房" href="javacript:void(0)" target="_blank"> 浦东</a>
											
												|
											<a title="徐汇租房" href="javacript:void(0)" target="_blank"> 徐汇</a>
											
												|
											<a title="松江租房" href="javacript:void(0)" target="_blank"> 松江</a>
											
												|
											<a title="青浦租房" href="javacript:void(0)" target="_blank"> 青浦</a>
											
												|
											<a title="上海周边租房" href="javacript:void(0)" target="_blank"> 上海周边</a>
											
												|
											<a title="虹口租房" href="javacript:void(0)" target="_blank"> 虹口</a>
											
												|
											<a title="黄埔租房" href="javacript:void(0)" target="_blank"> 黄埔</a>
											
												|
											<a title="闵行租房" href="javacript:void(0)" target="_blank"> 闵行</a>
											
												|
											<a title="金山租房" href="javacript:void(0)" target="_blank"> 金山</a>
											
												|
											<a title="普陀租房" href="javacript:void(0)" target="_blank"> 普陀</a>
											
												|
											<a title="卢湾租房" href="javacript:void(0)" target="_blank"> 卢湾</a>
											
												|
											<a title="嘉定租房" href="javacript:void(0)" target="_blank"> 嘉定</a>
											
												|
											<a title="闸北租房" href="javacript:void(0)" target="_blank"> 闸北</a>
											
												|
											<a title="静安租房" href="javacript:void(0)" target="_blank"> 静安</a>
											
												|
											<a title="奉贤租房" href="javacript:void(0)" target="_blank"> 奉贤</a>
											<br>苏州：
                                        <a title="金阊区租房" href="http://sz.qk365.com/list/a60" target="_blank"> 金阊区</a>
											
												|
											<a title="相城租房" href="http://sz.qk365.com/list/a34" target="_blank"> 相城</a>
											
												|
											<a title="虎丘租房" href="http://sz.qk365.com/list/a32" target="_blank"> 虎丘</a>
											
												|
											<a title="常熟市租房" href="http://sz.qk365.com/list/a35" target="_blank"> 常熟市</a>
											
												|
											<a title="昆山市租房" href="http://sz.qk365.com/list/a37" target="_blank"> 昆山市</a>
											
												|
											<a title="吴中租房" href="http://sz.qk365.com/list/a33" target="_blank"> 吴中</a>
											
												|
											<a title="平江租房" href="http://sz.qk365.com/list/a42" target="_blank"> 平江</a>
											
												|
											<a title="张家港市租房" href="http://sz.qk365.com/list/a36" target="_blank"> 张家港市</a>
											
												|
											<a title="吴江区租房" href="http://sz.qk365.com/list/a38" target="_blank"> 吴江区</a>
											
												|
											<a title="太仓市租房" href="http://sz.qk365.com/list/a39" target="_blank"> 太仓市</a>
											
												|
											<a title="工业园租房" href="http://sz.qk365.com/list/a40" target="_blank"> 工业园</a>
											
												|
											<a title="沧浪区租房" href="http://sz.qk365.com/list/a29" target="_blank"> 沧浪区</a>
											<br>杭州：
                                        <a title="江干区租房" href="http://hz.qk365.com/list/a49" target="_blank"> 江干区</a>
											
												|
											<a title="余杭区租房" href="http://hz.qk365.com/list/a54" target="_blank"> 余杭区</a>
											
												|
											<a title="滨江区租房" href="http://hz.qk365.com/list/a52" target="_blank"> 滨江区</a>
											
												|
											<a title="萧山区租房" href="http://hz.qk365.com/list/a53" target="_blank"> 萧山区</a>
											</div>
					</div>
    </div> 
    <div class=" width" v-show="currentIndex==3">
       <div class="tabBox4" style="display: block;">
						<div class="fotLink">
							<a title="莘庄租房" href="javacript:void(0)" target="_blank">莘庄</a>
								
								 | 
								 <a title="莲花路地铁站租房" href="javacript:void(0)" target="_blank">莲花路地铁站</a>
								
								 | 
								 <a title="南桥汽车站租房" href="javacript:void(0)" target="_blank">南桥汽车站</a>
								
								 | 
								 <a title="年吉路罗和路租房" href="javacript:void(0)" target="_blank">年吉路罗和路</a>
								
								 | 
								 <a title="莘庄地铁站北广场租房" href="javacript:void(0)" target="_blank">莘庄地铁站北广场</a>
								
								 | 
								 <a title="颛桥租房" href="javacript:void(0)" target="_blank">颛桥</a>
								
								 | 
								 <a title="杨南路沪太公路租房" href="javacript:void(0)" target="_blank">杨南路沪太公路</a>
								
								 | 
								 <a title="沪闵路报春路租房" href="javacript:void(0)" target="_blank">沪闵路报春路</a>
								
								 | 
								 <a title="莘庄地铁站租房" href="javacript:void(0)" target="_blank">莘庄地铁站</a>
								
								 | 
								 <a title="沪闵路虹梅南路租房" href="javacript:void(0)" target="_blank">沪闵路虹梅南路</a>
								
								 | 
								 <a title="莘松路莘西路租房" href="javacript:void(0)" target="_blank">莘松路莘西路</a>
								
								 | 
								 <a title="罗贤路美文路租房" href="javacript:void(0)" target="_blank">罗贤路美文路</a>
								
								 | 
								 <a title="漕河泾租房" href="javacript:void(0)" target="_blank">漕河泾</a>
								
								 | 
								 <a title="沪闵路灯辉路租房" href="javacript:void(0)" target="_blank">沪闵路灯辉路</a>
								
								 | 
								 <a title="月罗公路罗太路租房" href="javacript:void(0)" target="_blank">月罗公路罗太路</a>
								</div>
					</div>
          
					</div>
    <p class="Copyright">Copyright (C) 皖ICP备18015729号-1</p>              
   <p class="Copyright">
     <span style="display:inline-block;position:relative;width:auto;"><a href="javacript:void(0)" id="kx_verify" tabindex="-1"  kx_type="图标式" style="display:inline-block;"><img src="@/assets/image/cnnic.png" style="border:none;" oncontextmenu="return false;" alt="可信网站"></a></span> 
			<a title="上海租房" key="5833ff56efbfb014cd5698b0" logo_size="124x47" logo_type="business" href="javacript:void(0)" ><b id="aqLogoQRUKK" style="display: none;"></b><img src="@/assets/image/hy_124x47.png" alt="安全联盟认证" width="124" height="47" style="border: none;"></a>
		</p>
    <div style="width:300px;margin:0 auto; padding:10px 0; text-align: center;font-size:16px">
				<a  href="javacript:void(0)" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
				<img src="http://www.qk365.com/images/beian.png" style="float:left;"><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;;font-size:15px">皖ICP备18015729号-1</p>
				</a>
			</div>    
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
      currentIndex: 0,
      sliderBoolean: true,
      scroll: 0,
      msg: "Welcome to Your Vue.js App",
      imgSrc: [
        { src: require("@/assets/image/bannner1.jpg") },
        { src: require("@/assets/image/bannner2.jpg") },
        { src: require("@/assets/image/bannner3.jpg") },
        { src: require("@/assets/image/bannner4.jpg") }
      ],
      section1: [
        {
          src: require("@/assets/image/bannner1.jpg"),
          add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
          yuanjia: "1391",
          detail: ["次卧", "飘窗"],
          adds: ["宝山区", "罗店"],
          price: "1478"
        },
        {
          src: require("@/assets/image/bannner2.jpg"),
          add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
          yuanjia: "1391",
          detail: ["次卧", "飘窗"],
          adds: ["宝山区", "罗店"],
          price: "1478"
        },
        {
          src: require("@/assets/image/bannner3.jpg"),
          add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
          yuanjia: "1391",
          detail: ["次卧", "飘窗"],
          adds: ["宝山区", "罗店"],
          price: "1478"
        },
        {
          src: require("@/assets/image/bannner1.jpg"),
          add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
          yuanjia: "1391",
          detail: ["次卧", "飘窗"],
          adds: ["宝山区", "罗店"],
          price: "1478"
        },
        {
          src: require("@/assets/image/bannner2.jpg"),
          add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
          yuanjia: "1391",
          detail: ["次卧", "飘窗"],
          adds: ["宝山区", "罗店"],
          price: "1478"
        },
        {
          src: require("@/assets/image/bannner3.jpg"),
          add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
          yuanjia: "1391",
          detail: ["次卧", "飘窗"],
          adds: ["宝山区", "罗店"],
          price: "1478"
        },
        {
          src: require("@/assets/image/bannner1.jpg"),
          add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
          yuanjia: "1391",
          detail: ["次卧", "飘窗"],
          adds: ["宝山区", "罗店"],
          price: "1478"
        },
        {
          src: require("@/assets/image/bannner2.jpg"),
          add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
          yuanjia: "1391",
          detail: ["次卧", "飘窗"],
          adds: ["宝山区", "罗店"],
          price: "1478"
        },
        {
          src: require("@/assets/image/bannner3.jpg"),
          add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
          yuanjia: "1391",
          detail: ["次卧", "飘窗"],
          adds: ["宝山区", "罗店"],
          price: "1478"
        }
      ],
      title1: ["今日特惠", "最新房源", "热门小区", "人气房源"],
      deTail1: { zh: "精品房源推荐", un: "RECOMMENDATION" },
      title2: ["江宁区", "浦口区", "建邺区", "雨花台区"],
      deTail2: { zh: "热门区域推荐", un: "POPULAR Location" },
      title3: [
        "找房攻略",
        "行业动态",
        "时事热点",
        "省钱攻略",
        "便民信息",
        "组织活动"
      ],
      deTail3: { zh: "享租快讯", un: "NEWS" }
    };
  },

  methods: {
    go(){
      this.$router.push('/search')
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const elements = document.querySelectorAll(".move");
      // const trigger = window.innerHeight - 60;
      elements.forEach(v => {
        if (v.offsetTop > scrollTop - 50 && v.offsetTop < scrollTop + 50) {
          this.addHeaderSlider(v);
        }
      });
      // for (let i = 0, len = elements.length; i < len; i++) {
      //   const element = elements[i];
      //   // const clientRect = element.getBoundingClientRect();
      //   // console.log(clientRect.top, trigger);
      //   console.log(element.offsetTop, scrollTop);
      //   if (element.offsetTop == scrollTop) {
      //   }
      // const flag = clientRect.top < trigger ? true : false;
      // if (!flag)

      // console.log(this.$refs.box.children[0].scrollToElement(100, 0));
    },
    addHeaderSlider(element) {
      if (this.sliderBoolean) {
        this.sliderBoolean = false;
        addClass(element, "slider-item");
        setTimeout(() => {
          element.classList.remove("slider-item");
          this.sliderBoolean = true;
        }, 1000);
      }
    }
  },
  components: {
    cSection,
    cNews
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  z-index: 9999;
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
.baBotShadow {
  position: absolute;
  bottom: 14px;
  left: 0;
  height: 114px;
  width: 100%;
  z-index: 200;
}
.babot1170 {
  width: 1140px;
  margin: 0 auto;
  background: url(../assets/image/babotForm-bg.png) no-repeat center;
}
.babotForm {
  width: 1140px;
  height: 103px;
  padding: 18px 0 0 0;
  position: relative;
}
.clearfix {
  zoom: 1;
}

.clearfix {
}
.babotForm dt,
.babotForm dd {
  float: left;
  display: block;
  height: 54px;
  position: relative;
  /* width: 569px; */
}
.babotInp {
  display: inline;
  width: 500px;
  height: 54px;
  border-right: 1px solid #d2d2d2;

  margin-left: 26px;
  position: relative;
  padding-left\0: 41px;
  padding-left: 67px;
}
.babotInp input {
  border: 0;
  background: none;
  height: 54px;
  line-height: 54px;
  width: 480px;
  font-size: 14px;
  padding: 0 10px;
  padding-left: 42px;
  background: #fff;
  border-radius: 7px 0 0 7px;
  background: url(../assets/image/sss.png) no-repeat 15px 17px #fff;
}
.fL {
  float: left;
}
.jsearch {
  font-size: 14px;
  line-height: 24px;
  padding-top: 4px;
  padding-bottom: 9px;
  padding-left: 19px;
  width: 480px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  position: absolute;
  top: 54px;
  left: 93px;
  background: #fff;
  z-index: 9999;
}
.hotSearch {
  font-size: 14px;
  line-height: 24px;
  padding-top: 4px;
  padding-bottom: 9px;
  padding-left: 19px;
  width: 480px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  position: absolute;
  top: 54px;
  left: 93px;
  background: #fff;
  z-index: 9999;
}
.HomeSo {
  font-size: 18px;
  color: #fff;
  font-family: "Microsoft Yahei";
  width: 129px;
  height: 54px;
  border: 0;
  cursor: pointer;
  text-align: center;
  background: url(../assets/image/selBox_01.png) no-repeat center;
}
.homeMap {
  width: 126px;
  height: 52px;
  border: 0;
  border: 1px solid #fff;
  border-radius: 8px;
  margin: 0 8px 0 28px;
}
.homeMap span {
  font-size: 18px;
  color: #fff;
  font-family: "Microsoft Yahei";
  display: block;
  line-height: 54px;
  padding-left: 18px;
  text-align: center;
  background: url(../assets/image/icon_01.png) 18px no-repeat;
}
.homeBus {
  width: 158px;
  height: 52px;
  border: 0;
  border: 1px solid #fff;
  border-radius: 8px;
}
.homeBus span {
  font-size: 16px;
  color: #fff;
  font-family: "Microsoft Yahei";
  display: block;
  line-height: 54px;
  padding-left: 18px;
  text-align: center;
  background: url(../assets/image/icon_02.png) 15px no-repeat;
}
.babotArea {
  width: 998px;
  overflow: hidden;
  z-index: 100;
  position: absolute;
  left: 93px;
  bottom: 10px;
}
.babotArea em {
  display: block;
  font-size: 12px;
  color: #fff;
  margin: 15px 25px 0 0;
  float: left;
}
.babotArea em i {
  color: #fff;
  margin-right: 5px;
}
.babotArea em a {
  color: #fff;
  font-size: 12px;
  line-height: 13px;
  margin-right: 10px;
}
.babotArea em .more-icon {
  width: 44px;
  height: 13px;
  display: inline-block;
  background: url(../assets/image/more-icon.png) no-repeat center;
  margin-right: 0;
  vertical-align: bottom;
}

</style>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>