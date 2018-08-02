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
    <div class="detail-slider">
        <template>
          <el-carousel  type="card" height="500px" :autoplay="fa">
            <el-carousel-item v-for="(item,i) in imgSrc" :key="i">
           <img :src="item.src" alt="" class="img" >
            </el-carousel-item>
          </el-carousel>
        </template>
    </div>
    <div class="">
<div class="house_cur" >
	<div class="width clearfix" style="overflow:hidden">
		<div class="easyCurve">
			<span>您当前的位置：</span>
			<div id="topnanv">
				<div id="anvlfteb">

					<div class="posbox">
							<a title="南京租房" href="javascript:void(0)">南京租房</a> <i></i>
								</div>
					<em>&gt;</em>
						<div class="posbox">
							<a title="轻松找房" href="javascript:void(0)">轻松找房</a>
							
									</div>
					<em>&gt;</em>
						<div class="posbox">
							<a title="江宁区租房" href="javascript:void(0)">江宁区租房</a>
							
									</div>
					<em>&gt;</em>
						<div class="posbox">
							<a title="百家湖租房" href="javascript:void(0)">百家湖租房</a>
							
									</div>
					<em>&gt;</em>
						<div class="posbox">
							<a title="龙西新寓租房" href="javascript:void(0)">龙西新寓租房</a>
							
									</div>
					<em>&gt;</em>
						<div class="posbox">
							房间详情</div>
					</div>
			</div>
			<span class="curveLast"></span>
			<div class="clear"></div>
		</div>
		<div class="houShare">
			<div class="Rshare"><em class="fL">分享到：</em>
				<a title="南京租房" href="http://v.t.sina.com.cn/share/share.php?url=http%3A%2F%2FWWW.baidu.com&amp;title=好享租公寓就是家" target="_blank" class="houSina">&nbsp;</a>
				<a title="南京租房" href="http://share.v.t.qq.com/index.php?c=share&amp;a=index&amp;url=http%3A%2F%2Fshare.baidu.com%2F%230-tqq-1-88853-89b7933b38b0586d98eb9d131fa70b46&amp;title=好享租公寓就是家&amp;appkey=801cf76d3cfc44ada52ec13114e84a96" target="_blank" class="houWeibo">&nbsp;</a>
				<a title="南京租房" href="http://connect.qq.com/widget/shareqq/index.html?url=http%3A%2F%2Fshare.baidu.com%2Fcode%230-sqq-1-14275-9737f6f9e09dfaf5d3fd14d775bfee85&amp;title=好享租公寓就是家&amp;desc=好享租公寓就是家&amp;summary=&amp;site=baidu" target="_blank" class="houQQ">&nbsp;</a>
				<a title="南京租房" href="javascript:void(0)" class="houWeixin">
					<!-- <div class="hweiBox hide">
						<span class="HweixinCon"><img alt="南京租房" src="http://nj.qk365.com/images/weixin02.jpg"></span>
						<em class="tips_03"></em>
					</div> -->
				</a>
				<a title="南京租房" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fshare.baidu.com%2F%230-qzone-1-68471-d020d2d2a4e8d1a374a433f596ad1440&amp;title=好享租公寓就是家&amp;desc=&amp;summary=&amp;site=" target="_blank" class="houQzone">&nbsp;</a>
			</div>
		</div>
	</div>
        </div>
    </div>
    <div class="detail-detail">
        <div class="width" style="overflow:hidden">
            <div class="HouInfoL">
                <h1 class="houInfoTit">
                    {{section1[0].title}}
			    </h1>
                <div class="houExpenses">
			        <em>立即可租</em>
			        <p class="houBtn">
			        	<a title="南京租房" id="collectLink" class="collectLink"><label id="collect">收藏</label></a>
			        </p>
			        <div class="rob-snap" style="display:none" id="rob-snap"></div>
	    	    </div>   
                <el-row class="houSurvey">
                    <el-col :span="12" v-for="(temp,i) in section1[0].details" :key="i">
                        <span>{{temp.label}}:</span><i>{{temp.value}}</i>
                    </el-col>
                </el-row>   
                    <ul class="houSet clearfix">
                    			<p>房屋配置：具体配置以现场实际情况为准</p>
                    				<li>
                    						<i><img alt="南京租房" src="http://www.qk365.com/images/deploy01.jpg"></i>
                    						<em>床</em>
                    					</li>
                    				<li>
                    						<i><img alt="南京租房" src="http://www.qk365.com/images/deploy07.jpg"></i>
                    						<em>宽带</em>
                    					</li>
                    				<li>
                    						<i><img alt="南京租房" src="http://www.qk365.com/images/deploy03.jpg"></i>
                    						<em>冰箱</em>
                    					</li>
                    				<li>
                    						<i><img alt="南京租房" src="http://www.qk365.com/images/deploy04.jpg"></i>
                    						<em>洗衣机</em>
                    					</li>
                    				<li>
                    						<i><img alt="南京租房" src="http://www.qk365.com/images/deploy05.jpg"></i>
                    						<em>空调</em>
                    					</li>
                    				<li>
                    						<i><img alt="南京租房" src="http://www.qk365.com/images/deploy06.jpg"></i>
                    						<em>热水器</em>
                    					</li>
                    				<li>
                    						<i><img alt="南京租房" src="http://www.qk365.com/images/deploy09.jpg"></i>
                    						<em>微波炉</em>
                    					</li>
                    				<li>
                    						<i><img alt="南京租房" src="http://www.qk365.com/images/deploy12.jpg"></i>
                    						<em>智能锁</em>
                    					</li>
                    				<li>
                    						<i><img alt="南京租房" src="http://www.qk365.com/images/deploy08.jpg"></i>
                    						<em>床头柜</em>
                    					</li>
                    				<li>
                    						<i><img alt="南京租房" src="http://www.qk365.com/images/deploy02.jpg"></i>
                    						<em>衣柜</em>
                    					</li>
                    				</ul>                          
            </div>
                <div class="HouInfoR">
                		<!--   特价显示-->
                		<div class="houPrice">
                			<div class="price_txt  price_txt02">
                				<em>￥</em>
                				<h4>{{section1[0].price}}</h4>
                				<i>元/月</i>
                			</div>
                		</div>
                		<!-- 双十一、跨年感恩节 广告位 start -->
                		<a style="display:none" title="南京租房" onclick="activityViewCount(1,'房间详情页广告入口','PC电商');" class="rob-advert" href="http://nj.qk365.com/special/rentingSeason?roomDetail" target="_blank">
                			<img alt="南京租房" src="http://nj.qk365.com/img/rentingSeason.jpg?version=20180329">
                		</a>
                		<!-- 双十一、跨年感恩节 广告位 end -->
                		<a title="南京租房" class="rob-advert" href="javascript:;" target="_blank">
                				<img alt="南京租房" src="http://oss-wuxi.qk365.com/qingkepic/M00/66/43/CgoKZ1thiNuAMZKWAABIe_7KyTQ557.jpg">
                			</a>
                		<dl class="houTopInfo clearfix" style="overflow:hidden">
                			<dt><a title="南京租房" href="/security/reservation.do?romId=63198&amp;forward=/security/reservation.do?romId=63198"><div class="houTopIcon01"><span>预约看房<em>Reservation</em></span></div></a></dt>
                			<dd><a title="南京租房" href="javascript:void (0);"><div class="houTopIcon02"><span class="look_wdsy">我的室友<em>My roommate</em></span></div></a></dd>
                		</dl>
                		<div class="sharePhone">
                			<div class="houPhone">400-1737-365</div>
                			<p class="houShareText"><em>40人浏览</em> | <em>7人已预约看房</em> | <a title="南京租房" href="http://nj.qk365.com/discuss/disList.do">用户评价</a></p>
                		</div>
                		<div class="ljdf">
                		    <div class="ljdf-btn" id="ljdf-btn"></div>
                		    <div class="flip-wx" style="display: none;">
                				<div class="flip-box">
                					<div class="wx-pic" id="qrcode"></div><br>
                					<p>使用手机好享租app或微信扫码订房</p>
                				</div>
                			</div>
                		</div>
                	</div>
        </div>
    </div>
    <div class="houseMain" >
        <div class="width" style="overflow:hidden">

        
        <div class="HouInfoL " >
			<ul class="houseMainList " >
				<li class="cur"><span>基本信息</span></li>
				<li><span>周边配套</span></li>
				<li><span>扫码关注</span></li>
			</ul>
			<div class="houmCon">
				<div class="houmSide" deep="4">
					<!-- 增加over -->
					<p>好享租，中国公共租赁住房提供商，成熟运作模式，服务范围覆盖上海、苏州、杭州、南京、北京、武汉、嘉兴七大城市，管辖近10万余间客房，覆盖各城市地铁沿线。新客首次入住可享受三天免费退房。三大认证，锁定靠谱室友；网上缴费，轻松生活；智能门锁，保证安全；Wifi覆盖，时尚方便；标配齐全，拎包即住；非中介，0手续费，租房咨询热线 ：400-1737-365。</p>
					<div class="houmTab">
						<table cellpadding="0" cellspacing="0" border="0" width="100%">
							<thead>
							<tr>
								<th class="houLine">房间</th>
								<th>租金</th>
								<th>状态</th>
								<th>可租日期</th>
								<th>室友</th>
								<th>窗户</th>
								<th>阳台</th>
								<th>独立卫生间</th>
							</tr>
							</thead>
							<tbody>
							<tr>
									<td class="houLetter houLine">
								     <a title="南京租房" href="http://nj.qk365.com/room/63198">C房间</a>
								</td>

									<td>1750.0元/月</td>
										<td class="houRent">
											<i><img alt="南京租房" src="http://nj.qk365.com/images/chum-icon1.png"></i>
											<em><a title="南京租房" href="http://nj.qk365.com/room/63198">待租</a></em>
											</td>
									<td>
									
									随时可租
									</td>
									<td class="houPerson">
									</td>
									<td><img alt="南京租房" src="http://nj.qk365.com/images/chum-icon4.png" width="13" height="16">
										</td>

									<td></td>
									<td></td>
								</tr>
							<tr>
									<td class="houLetter houLine">
								     <a title="南京租房" href="http://nj.qk365.com/room/63199">A房间</a>
								</td>

									<td>2016.61元/月</td>
										<td class="houRent">
											<i><img alt="南京租房" src="http://nj.qk365.com/images/chum-icon2.png"></i>
												<em><a title="南京租房" href="http://nj.qk365.com/room/63199">已租</a></em>
											</td>
									<td>
									2019-07-01</td>
									<td class="houPerson">
									<img alt="南京租房" src="http://nj.qk365.com/images/icon_11.png">
									</td>
									<td><img alt="南京租房" src="http://nj.qk365.com/images/chum-icon4.png" width="13" height="16">
										</td>

									<td></td>
									<td></td>
								</tr>
							<tr>
									<td class="houLetter houLine">
								     <a title="南京租房" href="http://nj.qk365.com/room/63200">B房间</a>
								</td>

									<td>2176.58元/月</td>
										<td class="houRent">
											<i><img alt="南京租房" src="http://nj.qk365.com/images/chum-icon2.png"></i>
												<em><a title="南京租房" href="http://nj.qk365.com/room/63200">已租</a></em>
											</td>
									<td>
									2019-07-01</td>
									<td class="houPerson">
									<img alt="南京租房" src="http://nj.qk365.com/images/icon_11.png">
									</td>
									<td></td>

									<td><img alt="南京租房" src="http://nj.qk365.com/images/chum-icon4.png" width="13" height="16">
									</td>
									<td></td>
								</tr>
							</tbody>
						</table>
						</div>
				</div>
			</div>
			<div class="houTreaty">
				<h3 class="treatyTit">租房公约</h3>
				<div class="houtreaCon" style="height: auto;">
					<p>各位青年才俊：</p>
					<br>
					<p>欢迎入住人才公寓，为了让家更美好，让我们共同营造一个安全、舒适、愉快的居住环境。请庄严的承诺：“我，我们是好人！我们到过的地方，见过的人，在我们离开以后会比我们来之前更美好！”</p>
					<br>
					<h3>一、好人的承诺</h3>
					<br>
					<p>1、好人是可爱的，任何时候先给周围的人一个微笑。因为我们是好人，所以一定要多做好事，哪怕很小的好事，同时绝不给周围的人添麻烦。</p>
					<p>2、好人是守法的，盗窃公用区域电力是违法犯罪行为，好人绝不违法。</p>
					<p>3、好人是高素质的，绝对不在公寓门厅、过道等公共部位放置私人物品。</p>
					<p>4、好人是讲卫生的，公寓保洁员每周打扫一次公共区域，平时请大家自行保持整洁的环境，顺手带走公共区域的垃圾，个人的生活垃圾只放在房间内的垃圾桶里，并及时扔进小区的垃圾箱。</p>
					<p>5、好人是受邻居爱戴的，为保持安静的环境，请大家在走廊、电梯厅内不要大声喧哗，音响、电视、电脑等发声设备请调到适当的音量，以免影响其他邻居的休息。</p>
					<br>
					<h3>二、好人勇于承担责任</h3>
					<br>
					<p>1、好人不给别人找麻烦，请大家保管好自己的门卡，离开房间哪怕是上洗手间、洗澡、串门请带好自己的门卡。万一没带门卡进不了门，你可以通过好享租公寓APP自助开门，也可拨打4008218365热线，我们每月将为您提供3次免费的临时密码紧急开门服务，之后每次享受开门服务需支付50元服务费。各位千万记住，避免类似情况发生，因为大家都很麻烦。</p>
					<p>2、好人不会让下水道堵塞，淋浴时一定拉好浴帘，以防水溢出。如有毛发堵塞下水地漏口，随手清理。</p>
					<p>3、好人保持马桶清洁通畅，绝不把报纸、卫生巾、避孕套、塑料袋丢入马桶以免堵塞，使用洗衣机洗衣服前一定把口袋内的纸张、硬币等取出，以免堵塞洗衣机下水口或者损坏洗衣机。如因前述原因损坏洗衣机、堵塞马桶或者下水道的，请悄悄地自费修理。如向管理方报修，对于人为原因造成的损害由入住人员均摊修理费用。</p>
					<p>4、好人自力更生，请经常留意个人账户上电和水的余量，当少于50度时立即自助购电。购电到供电有若干小时时间差，尽请谅解。你也可到服务中心自助购电，服务中心购电及时到账。公寓的修理工作是自助式的，如果遇到家具和设备损坏需要报修的，管理方提供3种报修方式：好享租公寓（最快）、QQ报修（中等）、电话报修（奇慢无比）。QQ报修时间是上午9点至下午9点。4008218365电话报修时电信运营方收取相应市话费，并且电话排队等待较长。强烈推荐使用好享租公寓APP免费报修。人为损坏的维修费用见价格表。</p>
					<p>5、好人及时支付自己的账单，入住前请先登陆好享租公寓APP。房租、电费、水费、宽带费、修理费、我们会在系统里开列账单收取，你垫付的修理费我们会在系统上向你退还。好享租公寓APP可以使用支付宝、微信、好享租宝支付账单。</p>
					<p>6、好人一生平安，务必随时更新你的个人信息，尤其是你的手机和电子邮箱如有变化请第一时间在好享租公寓APP上进行修改。否则管家送你的礼物和惊喜就不能及时送达了。祝好人生活愉快！</p>
				
				</div>
			</div>
		</div>
            <div class="HouInfoR">
            			<div class="hinfoRborder">
            				<h3 class="stewardTit">房管员</h3>
            				<p class="stewardPhoto">
            					<a title="南京租房" href="http://nj.qk365.com/roomAdmin/10883">
            						<img alt="南京租房" src="http://nj.qk365.com/images/find/houseHead.jpg">
            						</a>
            				</p>
            				<p class="stewPhotName">
            					<a title="南京租房" style="color: #00AB84;" href="http://nj.qk365.com/roomAdmin/10883">
            						孙德维</a>
            				</p>
            				<p class="stewPhotinfo">房源数量：<em>56间</em> 服务青客：<em>36人</em> 近30天出房：<em>8间</em></p>
            				<p class="stewTel">400 1737 365</p>
            			</div>
            			<p class="serviceAim"><em>服务宗旨</em>由衷欢迎您与您的家人朋友入住我们的公寓，
            				我们将竭诚为您服务！</p>
            			<div class="hinfoRborder clearfix">
            				<h3 class="AimTit">青客向您保证</h3>
            				<div class="AimTopCon clearfix">
            					<span class="aCon01">3天免费退房</span>
            					<span class="aCon02">保洁承诺</span>
            					<span class="aCon03">维修承诺</span>
            				</div>
            				<p class="aimSubText">青客服务全程保障您的权益，租客认证、一客一锁解决您在租房过程中各种担忧，专人保洁、专业维修免除您在居住期间的后顾之忧。通过投诉全公示、400热线等确保您的权益得到落实。</p>
            				<ul class="aimList" style="overflow:hidden">
            					<li>
            						<p><em class="num_01 fL">ONE</em><span class="fR aimLine"></span></p>
            						<div class="aimText">租客认证&nbsp;凡有意向入住青客的租客，需要提供相关证明，通过我们的租客认证。新客首次入住可享受三天免费退房。</div>
            					</li>
            					<li>
            						<p><em class="num_02 fL">TWO</em><span class="fR aimLine"></span></p>
            						<div class="aimText">一客一锁&nbsp;每间房间都设置不同的密码锁，电子控制。</div>
            					</li>
            					<li>
            						<p><em class="num_03 fL">THREE</em><span class="fR aimLine"></span></p>
            						<div class="aimText">专人保洁&nbsp;为了给青客客户创造品质的租住生活，每周2次公共区域保洁。</div>
            					</li>
            					<li>
            						<p><em class="num_04 fL">FOUR</em><span class="fR aimLine"></span></p>
            						<div class="aimText">专业维修&nbsp;青客针对房屋主体，电路，灯具等提供24小时内响应，48小时上门，三个工作日完成的维修服务</div>
            					</li>
            				</ul>
            			</div>
            		</div>        
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
import cSlider from "@/components/common/slider1";
import cNews from "@/components/common/news";
export default {
  name: "HelloWorld",
  data() {
    return {
      fa: false,
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
          price: "1478",
          title:
            "【江宁区】1、3号线南京南站 龙西新寓 精装白领公寓朝南主卧出租 配备齐全 拎包即住",
          details: [
            { label: "原价", value: "1750元/月" },
            { label: "房间编号", value: "D0062954C" },
            { label: "面积", value: "以现场勘察为准" },
            { label: "原价", value: "1750元/月" }
          ]
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
    go() {
      this.$router.push("/search");
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
    cNews,
    cSlider
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
.section1 {
  width: 100%;
  background: url(../assets/image/bannner1.jpg);
  background-size: 100% 100%;
}
.easyCurve {
  line-height: 52px;
  font-size: 12px;
  color: #1a323e;
  border-bottom: 2px solid #20cebb;
}
.easyCurve span {
  display: block;
  float: left;
  color: #1a323e;
}
.easyCurve em {
  display: block;
  float: left;
  padding: 0 12px 0 6px;
  line-height: 50px;
}
#topnanv {
  font-size: 12px;
  float: left;
  /* width: 80%; */
  position: relative;
}
#anvlfteb {
  position: relative;
  padding: 0 1px;
}
.posbox {
  position: relative;
  float: left;
}
.posbox a {
  display: block;
  padding-right: 10px;
  color: #1a323e;
}
.posbox i {
  width: 7px;
  height: 4px;
  background: url(../assets/image/up.png) 0 -70px no-repeat;
  position: absolute;
  top: 25px;
  right: 0;
  overflow: hidden;
}
.easySoBox {
  padding: 24px;
  border: 1px solid #e9e9e8;
  background: rgba(255, 255, 255, 0.75);
  box-sizing: border-box;
  overflow: hidden;
}
.easySo {
  font-size: 12px;
  color: #1a323e;
  line-height: 30px;
  width: 100%;
  float: left;
  position: relative;
}
.easySoTit {
  font-weight: bold;
  color: #20cebb;
  font-size: 12px;
}
.fL {
  float: left;
}
.easySoCon {
  line-height: 30px;
  padding-left: 14px;
}
.fL {
  float: left;
}
.easySoCon em.cur,
.areaCon i.cur,
.metroSoList i.cur,
.lf-area-tit i span.cur {
  color: #20cebb;
}
.easySoCon em,
.areaCon i,
.metroSoList em,
.metroSoList i {
  display: inline-block;
  margin-right: 24px;
  cursor: pointer;
  font-size: 12px;
}
.fR {
  float: right;
}
.priceAuto em {
  padding: 0 8px;
  line-height: 30px;
}
/* .priceAuto input {
    float: left;
} */
.priceInput {
  font-family: "Microsoft Yahei";
  line-height: 28px;
  height: 28px;
  border: 1px solid #bfbfbf;
  width: 65px;
  margin: 0;
  padding: 0;
  color: #666;
  background: none;
  text-align: center;
  border-radius: 5px;
}
.priceSub {
  font-family: "Microsoft Yahei";
  width: 65px;
  height: 30px;
  margin: 0 0 0 12px;
  padding: 0;
  background: #20cebb;
  border: 0;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
}
.priceAuto em {
  padding: 0 8px;
  line-height: 30px;
}
.areaSideCon,
.metroSideCon {
  border: 1px solid #e8e8e8;
  padding: 10px 17px;
  float: left;
  width: 1086px;
  line-height: 24px;
  margin-bottom: 10px;
}
.areaSideCon em {
  font-size: 12px;
  color: #000;
  padding-right: 8px;
  white-space: nowrap;
  cursor: pointer;
}
.areaSideCon i,
.metroSideCon i {
  font-size: 12px;
  color: #f18d00;
  padding: 0 4px 0 20px;
  font-style: normal;
}
.easySo .fL.foctar ul .liPad {
  padding: 0 0 0 10px;
  color: #666666;
}
.easySo .fL.foctar ul li {
  float: left;
  line-height: 25px;
  color: #f18d00;
  padding: 0 4px;
}
.easySo .fL.foctar {
  border: 1px solid #dddddd;
  overflow: hidden;
  height: 25px;
  margin-left: 15px;
  cursor: pointer;
}
.easySo .fL.foctar:hover ul .liImg {
  background: url(../assets/image/close-hover.png) #f18d00 no-repeat center;
  height: 25px;
  width: 20px;
}
.easySort {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid #e8e9e8;
  border-bottom: none;
  border-top: 2px solid #20cebb;
  padding: 24px;
  box-sizing: border-box;
}
.SortSel em {
  color: #9d9d9d;
  padding-right: 10px;
}

.SortSel em,
.SortSel input {
  float: left;
}
i,
em {
  font-style: normal;
}
.sortInpLay {
  float: left;
  width: 180px;
  height: 20px;
  padding: 5px 0 5px 9px;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.24);
}
.SortSel em,
.SortSel input {
  float: left;
}
.sortinText {
  width: 151px;
  height: 20px;
  border: 0;
  font-family: "Microsoft Yahei";
  padding: 0;
  margin: 0;
  color: #1a323e !important;
  background: none;
  padding-right: 5px;
}
.sortSub {
  width: 24px;
  height: 20px;
  border: 0;
  padding: 0;
  margin: 0;
  background: url(../assets/image/icon_03.png) no-repeat 0 center;
  cursor: pointer;
}
.xqjg_pic img {
  width: 100%;
}
.image {
  width: 100%;
  height: 260px;
  display: block;
}
.coverBox {
  position: absolute;
  top: 216px;
  left: 0;
  width: 100%;
  height: 45px;
  background: url(../assets/image//transparentBlack.png) repeat 0 0;
  line-height: 44px;
  color: #fff;
}
.easySub {
  font-size: 12px;
  padding: 7px 12px 0;
  color: #fff;
  line-height: 18px;
  height: 36px;
  overflow: hidden;
  margin-bottom: 15px;
}
.fr0923 {
  position: absolute;
  top: 241px;
  right: 12px;
  width: 120px;
  height: 18px;
  line-height: 18px;
  color: #fff;
  text-align: right;
  font-size: 12px;
}
.placeText {
  font-size: 12px;
  padding-left: 30px;
  background: url(../assets/image/icon_04.png) no-repeat 12px 0px;
  color: #797979;
  width: 180px;
  display: inline-block;
  line-height: 16px;
  margin-bottom: 3px;
  height: 32px;
}
.easyPrivilege {
  position: absolute;
  top: 2px;
  right: 10px;
  border: 1px solid #fe7058;
  border-radius: 5px;
  width: 98px;
  height: 52px;
}
.easyPrivilege em {
  font-size: 12px;
  color: #fff;
  height: 25px;
  line-height: 25px;
  background: #fe7058;
}
.easyPrivilege em,
.easyPrivilege span {
  display: block;
  text-align: center;
}
.easyPrivilege span {
  display: block;
  text-align: center;
}
.easyPrivilege span {
  line-height: 26px;
  color: #ff6000;
  font-size: 12px;
}
.easyPrivilege span i {
  font-size: 20px;
  font-weight: bold;
}
.easyBottomInfo {
  height: 36px;
  line-height: 35px;
  background: #f7f7f7;
  font-size: 12px;
  left: 0;
  bottom: 0px;
  width: 100%;
}
.easyBottomInfo a {
  color: #797979;
}
.metroText {
  padding: 0 0 0 20px;
  background: url(../assets/image/icon_05.png) no-repeat 0 center;
  color: #797979;
  margin-left: 10px;
}
.house_cur .easyCurve {
  border: none;
  width: 60%;
  float: left;
  line-height: 49px;
}
.house_cur .houShare {
  padding-top: 14px;
  position: relative;
  z-index: 9;
}

.houShare {
  float: right;
}
.Rshare {
  height: 22px;
  line-height: 22px;
  height: 22px;
  font-size: 14px;
  color: #999;
  text-align: center;
}
.Rshare a {
  float: left;
  width: 22px;
  line-height: 22px;
  height: 22px;
  margin: 0 5px;
  color: #999;
}
.houSina {
  background: url(../assets/image/houseIcon05.png) no-repeat 0 0;
}
.houWeibo {
  background: url(../assets/image/houseIcon06.png) no-repeat 0 0;
}
.houQQ {
  background: url(../assets/image/houseIcon07.png) no-repeat 0 0;
}
.houWeixin {
  position: relative;
  background: url(../assets/image/houseIcon08.png) no-repeat 0 0;
}
.houQzone {
  background: url(../assets/image/houseIcon09.png) no-repeat 0 0;
}
.detail-detail {
  width: 100%;
  background: #fff;
}
.HouInfoL {
  float: left;
  width: 787px;
  position: relative;
}
.houInfoTit {
  font-size: 30px;
  color: #333;
  font-weight: normal;
  line-height: 56px;
  text-indent: -0.5em;
}
.houExpenses {
  width: 100%;
  height: 35px;
  line-height: 35px;
  margin: 16px 0 5px;
  position: relative;
}
.houExpenses em {
  display: inline-block;
  border: 1px solid #ff6000;
  height: 26px;
  line-height: 26px;
  float: left;
  padding: 0 6px;
  margin-right: 6px;
  border-radius: 5px;
  color: #ff6000;
  font-size: 16px;
}
.houBtn {
  width: 90px;
  height: 35px;
  background: #eee;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 5px;
}
.collectLink {
  border-radius: 5px;
  font-size: 14px;
  color: rgba(102, 102, 102, 0.5);
  width: 70px;
  height: 35px;
  line-height: 35px;
  display: inline-block;
  background: #eee url(../assets/image/icon_15.png) no-repeat 55px 9px;
  /* background: url(../images/icon_15h.png) #eee no-repeat 55px 9px; */
  position: absolute;
  top: 0;
  right: 0;
  padding-left: 20px;
}
.houSurvey span {
  display: inline-block;
  width: 80px;
  font-size: 14px;
  /* height: 30px; */
  line-height: 30px;
  color: #666;
  text-align: left;
  font-weight: bold;
}
.houSurvey i {
  width: 50%;
  font-size: 14px;
  /* height: 30px; */
  line-height: 30px;
  color: #666;
}
.houSet {
  margin-left: -20px;
}
.houSet p {
  font-size: 14px;
  margin-left: 20px;
  color: #666;
}
.houSet li {
  float: left;
  display: inline-block;
  width: 40px;
  margin: 14px 20px;
}
.houSet li i,
.houSet li em {
  display: block;
  width: 40px;
  text-align: center;
}
.houSet li em {
  padding-top: 8px;
  color: #a7a6a6;
  font-size: 12px;
}
.HouInfoR {
  float: right;
  width: 380px;
  /* padding-top: 16px; */
  position: relative;
}
.houPrice {
  height: 94px;
  width: 350px;
  clear: both;
  margin-bottom: 10px;
  margin-top: 16px;
}
.houPrice .price_txt02 {
  background: url(../assets/image/price02.png) no-repeat center;
  text-align: center;
  color: #ffffff;
  line-height: 94px;
  height: 94px;
}
.houPrice .price_txt em {
  font-size: 30px;
  font-weight: bold;
}
.houPrice .price_txt h4 {
  font-size: 50px;
  padding-right: 4px;
}
.houPrice .price_txt em,
.houPrice .price_txt h4,
.houPrice .price_txt i {
  display: inline-block;
}
.houPrice .price_txt i {
  font-size: 18px;
}
.houPrice .price_txt em,
.houPrice .price_txt h4,
.houPrice .price_txt i {
  display: inline-block;
}
.houTopInfo {
  width: 100%;
  padding-bottom: 10px;
}
.houTopInfo dt {
  float: left;
}
.houTopInfo dt,
.houTopInfo dt div,
.houTopInfo dd,
.houTopInfo dd div {
  width: 170px;
  height: 84px;
  font-size: 18px;
  color: #fe7058;
  font-weight: bold;
}
.houTopInfo dt,
.houTopInfo dd {
  margin-bottom: 3px;
}
.houTopInfo dt div,
.houTopInfo dd,
.houTopInfo dd div {
  width: 170px;
  height: 84px;
  font-size: 18px;
  color: #fe7058;
  font-weight: bold;
}
.houTopIcon01 {
  background: url(../assets/image/houseIcon01.png) no-repeat 20px center;
  border-radius: 5px;
  border: 1px solid #fea99b;
}
.houTopInfo dt div,
.houTopInfo dd,
.houTopInfo dd div {
  width: 170px;
  height: 84px;
  font-size: 18px;
  color: #fe7058;
  font-weight: bold;
}
.houTopInfo dt span,
.houTopInfo dd span {
  display: block;
  padding: 24px 0 0 70px;
  height: 60px;
}
.houTopInfo dt em,
.houTopInfo dd em {
  display: block;
  font-size: 12px;
  padding-top: 8px;
  color: #fe7058;
  font-family: Arial;
  filter: alpha(opacity = 30);
  -moz-opacity: 0.3;
  -khtml-opacity: 0.3;
  opacity: 0.3;
}
.houTopInfo dt,
.houTopInfo dt div,
.houTopInfo dd,
.houTopInfo dd div {
  width: 170px;
  height: 84px;
  font-size: 18px;
  color: #fe7058;
  font-weight: bold;
}
.houTopIcon02 {
  background: url(../assets/image/houseIcon02.png) no-repeat 20px center;
  border-radius: 5px;
  border: 1px solid #fea99b;
}
.houTopInfo dd {
  float: left;
  margin-left: 10px;
}

.houTopInfo dt,
.houTopInfo dt div,
.houTopInfo dd,
.houTopInfo dd div {
  width: 170px;
  height: 84px;
  font-size: 18px;
  color: #fe7058;
  font-weight: bold;
}
.sharePhone {
  border: 1px solid #feab9d;
  border-radius: 5px;
  width: 355px;
}
.sharePhone .houPhone {
  height: 60px;
  line-height: 70px;
  font-size: 32px;
  font-weight: bold;
  color: #fe7058;
  padding-left: 90px;
  background: url(../assets/image/icon_16.png) no-repeat 30px 20px;
}
.houShareText {
  font-size: 12px;
  color: #bdbdbd;
  line-height: 18px;
  text-align: center;
  padding: 0 0 10px;
}
.houShareText em {
  color: #a7a6a6;
  margin: 0 15px;
}
.houseMain {
  margin-top: 20px;
  background: #f3f3f3;
  padding: 36px 0 20px;
}
.HouInfoL {
  border-top: 2px solid #21cfbb;
  background: #fff;
  position: relative;
}

.HouInfoL {
  float: left;
  width: 787px;
  position: relative;
}
.houseMainList {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e7e7e7;
  padding: 20px 0 18px;
  width: 730px;
  margin: 0 auto;
}
.houseMainList li:hover,
.houseMainList li.cur {
  background: #21cfbb;
  color: #fff;
  font-size: 16px;
  border: 1px solid #21cfbb;
}
.houseMainList li:hover,
.houseMainList li.cur {
  background: #21cfbb;
  color: #fff;
  font-size: 16px;
  border: 1px solid #21cfbb;
}
.houseMainList li span {
  padding: 0 33px;
}
.houseMainList li {
  float: left;
  height: 40px;
  width: 130px;
  font-size: 14px;
  color: #4f4f4f;
  line-height: 40px;
  cursor: pointer;
  border: 1px solid #4f4f4f;
  border-radius: 30px;
  margin-right: 26px;
}
.houmCon {
  padding: 30px;
  background: #fff;
}
.houmSide {
  overflow: hidden;
}
.houmSide p {
  text-indent: 2em;
  font-size: 12px;
  color: #666;
  line-height: 26px;
}
.houmSide p {
  padding-bottom: 10px;
  text-indent: 2em;
  font-size: 12px;
  color: #666;
  /* line-height: 26px; */
}
.houmTab {
  border-collapse: collapse;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.houmTab .houLine {
  border-left: 2px solid #21cfbb;
}
.houmTab th {
  line-height: 40px;
  border: 1px solid #e3e3e3;
  border-left: none;
  border-top: none;
  background: #f7f7f7;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}
.houmTab td.houLetter {
  font-weight: bold;
  font-size: 18px;
}
.houmTab .houLine {
  border-left: 2px solid #21cfbb;
}
.houmTab td a {
  color: #1a323e;
}
.houTreaty {
  background: #fff;
  padding: 20px 0 60px;
  border-top: 2px solid #21cfbb;
}
.treatyTit {
  font-size: 18px;
  height: 40px;
  line-height: 40px;
  color: #1a323e;
  padding-left: 22px;
}
.houtreaCon {
  font-size: 12px;
  color: #737373;
  line-height: 24px;
  padding: 20px 40px 0 20px;
  height: 360px;
  overflow: hidden;
}
.houmTab td {
  line-height: 40px;
  text-align: center;
  border: 1px solid #e3e3e3;
  border-left: none;
  border-top: none;
}
.HouInfoR {
  float: right;
  width: 347px;
  /* padding-top: 16px; */
  position: relative;
}
.hinfoRborder {
  background: #fff;
  border-top: 2px solid #21cfbb;
  padding: 0 20px;
}
.stewardTit {
  font-size: 18px;
  font-weight: bold;
  color: #21cfbb;
  padding: 9px 0 0 38px;
  height: 49px;
  line-height: 48px;
  background: url(../assets/image/manage-icon.jpg) no-repeat 8px center;
}
.stewardPhoto {
  text-align: center;
  padding: 8px 0 0 0;
}
.stewPhotName {
  font-size: 30px;
  font-weight: bold;
  color: #1a323e;
  line-height: 30px;
  text-align: center;
  padding: 10px 0 15px;
}
.stewPhotinfo {
  font-size: 12px;
  color: #1a323e;
  line-height: 28px;
  padding-bottom: 4px;
}
.stewPhotinfo em {
  color: #f18d00;
  margin-right: 2px;
}
.stewTel {
  font-size: 18px;
  font-weight: bold;
  color: #f18d00;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  line-height: 18px;
  height: 18px;
  text-align: center;
  padding: 16px 0;
  background: url(../assets/image/icon_07.png) no-repeat 60px center;
}
.serviceAim {
  font-size: 12px;
  text-align: center;
  color: #4f4f4f;
  line-height: 24px;
  background: #fff;
  padding: 12px 32px 20px;
}
.serviceAim em {
  color: #1a323e;
  display: block;
  font-weight: bold;
}
.hinfoRborder {
  background: #fff;
  border-top: 2px solid #21cfbb;
  padding: 0 20px;
}
.AimTit {
  font-size: 18px;
  font-weight: bold;
  color: #21cfbb;
  line-height: 48px;
  height: 49px;
  padding-left: 38px;
  background: url(../assets/image/icon_08.png) no-repeat 8px center;
  border-bottom: 1px solid #e7e7e7;
}
.AimTopCon {
  padding: 12px 2px 8px;
}
.AimTopCon span {
  font-size: 14px;
  color: #1a323e;
  font-weight: bold;
  float: left;
  width: 82px;
  text-align: center;
  padding-top: 86px;
  line-height: 24px;
  margin: 0 9px;
}
.aimSubText {
  font-size: 12px;
  color: #4f4f4f;
  line-height: 24px;
  padding: 10px 0;
}
.aimList {
  width: 100%;
}
.aimList li {
  width: 100%;
  float: left;
  padding-bottom: 10px;
}
.aimList li p {
  height: 38px;
  width: 100%;
}
.aimText {
  font-size: 12px;
  line-height: 24px;
  color: #666;
  padding-left: 4px;
}
.aimList li p em {
  font-size: 12px;
  color: #21cfbb;
  line-height: 38px;
  font-style: italic;
  padding-left: 22px;
}
.num_01 {
    background: url(../assets/image/num_01.png) no-repeat 2px 1px;
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