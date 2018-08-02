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
        <section class="section1">
            <div class="width">
                <div class="easyCurve" style="overflow:hidden">
		            <span>您当前的位置：</span>
		                        <div id="topnanv">
		                        	<div id="anvlfteb">
		                        		<div class="posbox">
		                        				<a title="南京租房" href="javacript:void(0)">南京租房</a> 
		                        		</div>
		                        		<em>&gt;</em>
		                        		<div class="posbox">
		                        				<a title="轻松找房" href="javacript:void(0)">轻松找房</a>

		                        		</div>
		                        		<em>&gt;</em>
		                        		<div class="posbox">
		                        				<a title="江宁区租房" href="javacript:void(0)">江宁区租房</a>

		                        		</div>
		                        		<em>&gt;</em>
		                        		<div class="posbox">
		                        				<a title="百家湖租房" href="javacript:void(0)">百家湖租房</a>

								        </div>
			                    </div>
			            <div id="seledbox" class="posiabox" style="display: none; left: -1px;">
                         </div>
                </div>
		        <div class="clear"></div>
	                </div> 
                </div>
            <div  class="easySoBox clearfix width">
                <div class="easySo"  style="overflow:hidden">
					<span class="easySoTit fL">房间价格：</span> <span class="easySoCon priceCon fL"> <a title="南京租房" href="javascript:price('');"><em class="cur">不限</em></a>
						<a title="南京租房" href="javacript:void(0)" style="color: #666;" onclick="price('500元以下','76');"><em>500元以下</em></a>
						<a title="南京租房" href="javacript:void(0)" style="color: #666;" onclick="price('500-700元','27');"><em>500-700元</em></a>
						<a title="南京租房" href="javacript:void(0)" style="color: #666;" onclick="price('700-1000元','28');"><em>700-1000元</em></a>
						<a title="南京租房" href="javacript:void(0)" style="color: #666;" onclick="price('1000-1500元','29');"><em>1000-1500元</em></a>
						<a title="南京租房" href="javacript:void(0)" style="color: #666;" onclick="price('1500-2000元','30');"><em>1500-2000元</em></a>
						<a title="南京租房" href="javacript:void(0)" style="color: #666;" onclick="price('2000-3000元','73');"><em>2000-3000元</em></a>
						<a title="南京租房" href="javacript:void(0)" style="color: #666;" onclick="price('3000元以上','31');"><em>3000元以上</em></a>
						</span> <span class="priceAuto fR">
                            <em>自定义：</em>
                         <input name="priceL" maxlength="6" class="priceInput" type="text" id="priceL" value="">
						<em>到</em> 
                        <input name="priceH" maxlength="6" class="priceInput" type="text" id="priceH" value="">
						<input type="button" @click="go" value="确  定" id="bt_sub" class="priceSub"></span>
				</div>
                 <div class="easySo" id="easySo"  style="overflow:hidden">
					<span class="easySoTit fL">行政区域：</span> <span class="easySoCon areaCon fL"> <a title="南京租房" href="javascript:condition('prcId','');"> <em style="color:#666;">不限</em>
					</a> <a title="市辖区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','126');"> <em>
									市辖区</em>
							</a>
						<a title="玄武区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','127');"> <em>
									玄武区</em>
							</a>
						<a title="白下区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','128');"> <em>
									白下区</em>
							</a>
						<a title="秦淮区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','129');"> <em>
									秦淮区</em>
							</a>
						<a title="建邺区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','130');"> <em>
									建邺区</em>
							</a>
						<a title="鼓楼区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','131');"> <em>
									鼓楼区</em>
							</a>
						<a title="下关区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','132');"> <em>
									下关区</em>
							</a>
						<a title="浦口区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','133');"> <em>
									浦口区</em>
							</a>
						<a title="栖霞区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','134');"> <em>
									栖霞区</em>
							</a>
						<a title="雨花台区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','135');"> <em>
									雨花台区</em>
							</a>
						<a title="江宁区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" class="find_select" onclick="condition('prcId','136');"> <em class="cur">
									江宁区</em>
							</a>
						<a title="六合区租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','137');"> <em>
									六合区</em>
							</a>
						<a title="溧水县租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','138');"> <em>
									溧水县</em>
							</a>
						<a title="高淳县租房" href="javacript:void(0)" style="color: #666;" id="xzqy" onclick="condition('prcId','139');"> <em>
									高淳县</em>
							</a>
						
					</span>
				</div>   
                <div class="areaSideCon clearfix" id="areaLay"  style="overflow:hidden">
						<div class="areaLay">
							<a title="南京租房" href="javascript:condition('cellArea','');"> <em style="color:#666;">全部</em>
							</a>
							<i>B</i>
								<a title="滨江开发区租房" href="javacript:void(0)" onclick="condition('cellArea','1973');"> <em>
											滨江开发区</em>
									</a>
								<a title="百家湖租房" href="javacript:void(0)" onclick="condition('cellArea','1977');"> <em class="active">
											百家湖</em>
									</a>
								<i>C</i>
								<a title="岔路口租房" href="javacript:void(0)" onclick="condition('cellArea','1980');"> <em>
											岔路口</em>
									</a>
								<a title="淳化租房" href="javacript:void(0)" onclick="condition('cellArea','1987');"> <em>
											淳化</em>
									</a>
								<i>D</i>
								<a title="东山租房" href="javacript:void(0)" onclick="condition('cellArea','1994');"> <em>
											东山</em>
									</a>
								<i>F</i>
								<a title="方山租房" href="javacript:void(0)" onclick="condition('cellArea','1984');"> <em>
											方山</em>
									</a>
								<i>J</i>
								<a title="江宁周边租房" href="javacript:void(0)" onclick="condition('cellArea','1975');"> <em>
											江宁周边</em>
									</a>
								<a title="将军大道租房" href="javacript:void(0)" onclick="condition('cellArea','1988');"> <em>
											将军大道</em>
									</a>
								<a title="金箔路租房" href="javacript:void(0)" onclick="condition('cellArea','1998');"> <em>
											金箔路</em>
									</a>
								<i>K</i>
								<a title="科学园租房" href="javacript:void(0)" onclick="condition('cellArea','1989');"> <em>
											科学园</em>
									</a>
								<i>S</i>
								<a title="上坊租房" href="javacript:void(0)" onclick="condition('cellArea','1990');"> <em>
											上坊</em>
									</a>
								<a title="双龙大道租房" href="javacript:void(0)" onclick="condition('cellArea','1999');"> <em>
											双龙大道</em>
									</a>
								<i>Z</i>
								<a title="竹山路租房" href="javacript:void(0)" onclick="condition('cellArea','2000');"> <em>
											竹山路</em>
									</a>
						</div>
				</div> 
                <div class="easySo"  style="overflow:hidden">
					<span class="easySoTit fL">地铁沿线：
                        </span> <span class="easySoCon metroSoList fL"> <a title="南京租房" href="javascript:condition('subway','');"> <i class="cur">不限</i>
					    </a> <a title="1号线租房" href="http://nj.qk365.com/list/a136-s22-k1977" style="color: #666;" onclick="condition('subway','22');"> <em>
									1号线</em>
							</a>
						<a title="2号线租房" href="javascript:void(0)" style="color: #666;" onclick="condition('subway','23');"> <em>
									2号线</em>
							</a>
						<a title="3号线租房" href="javascript:void(0)" style="color: #666;" onclick="condition('subway','24');"> <em>
									3号线</em>
							</a>
						<a title="4号线租房" href="javascript:void(0)" style="color: #666;" onclick="condition('subway','25');"> <em>
									4号线</em>
							</a>
						<a title="10号线租房" href="javascript:void(0)" style="color: #666;" onclick="condition('subway','26');"> <em>
									10号线</em>
							</a>
						<a title="S1号线租房" href="javascript:void(0)" style="color: #666;" onclick="condition('subway','27');"> <em>
									S1号线</em>
							</a>
						<a title="S8号线租房" href="javascript:void(0)" style="color: #666;" onclick="condition('subway','28');"> <em>
									S8号线</em>
							</a>
					</span>
				</div>     
                <div class="easySo"  style="overflow:hidden">
					<span class="easySoTit fL">房间户型：</span> <span class="easySoCon roomDoor fL"> <a title="南京租房" href="javascript:condition('romType','');"> <em class="cur">不限</em>
					</a> <a title="南京租房" href="javascript:void(0)" style="color: #666;" onclick="condition('romType','1');"> <em>
									独卫</em>
							</a>
						<a title="南京租房" href="javascript:void(0)" style="color: #666;" onclick="condition('romType','2');"> <em>
									单间</em>
							</a>
						<a title="南京租房" href="javascript:void(0)" style="color: #666;" onclick="condition('romType','3');"> <em>
									整租</em>
							</a>
						</span>
				</div>
                <div class="easySo easySoNo"  style="overflow:hidden">
					<span class="easySoTit fL">可租日期：</span> <span class="easySoCon roomDoor fL"> <a title="南京租房" href="javascript:queryRent('');"> <em class="cur">不限</em>
					</a> <a title="南京租房" style="color: #666;" href="javascript:queryRent('anyTimeRent');"> <em>立即可租</em>
					</a> <a title="南京租房" style="color: #666;" href="javascript:queryRent('oneWeekRent');"> <em>一周内可租</em>
					</a> <a title="南京租房" style="color: #666;" href="javascript:queryRent('twoWeekRent');"> <em>两周内可租</em>
					</a> <a title="南京租房" style="color: #666;" href="javascript:queryRent('oneMonthRent');"> <em>一月内可租</em>
					</a><a title="南京租房" style="color: #666;" href="javascript:queryRent('sixtyDayRent');"> <em>两月内可租</em>
					</a>
					</span>
				</div>  
                <div class="easySo"  style="overflow:hidden">
						<span class="easySoTit fL">当前条件：</span>
						<span class="fL foctar">
								<ul>
									<li class="liPad">区域：</li>
									<li>江宁区</li>
									<li class="liImg" onclick="condition('prcId','');"></li>
								</ul>
							</span>
						<span class="fL foctar">
								<ul>
									<li class="liPad">商圈：</li>
									<li>百家湖</li>
									<li class="liImg" onclick="condition('cellArea','');"></li>
								</ul>
							</span>
				</div>   
                                                                                                 
            </div>
            <div class="easySort clearfix width"  style="overflow:hidden">
			    	<div class="easySo">
			    		<a title="南京租房" onclick="javascript:void(0);"> <span class="easySoTit fL"> 默认排序： </span>
			    		</a> <span class="easySoCon roomDoor fL"> <a title="南京租房" style="color: #666;" href="javascript:sort('showPrice');">
			    				<em>价格</em>
			    		</a> <a title="南京租房" style="color: #666;" href="javascript:sort('romArea');"> <em>面积</em>
			    		</a> <a title="南京租房" style="color: #666;" href="javascript:sort('cucSubwayDistance');"> <em>距地铁</em>
			    		</a> <a title="南京租房" style="color: #666;" href="javascript:sort('romView');"> <em>浏览次数</em>
			    		</a>
			    				<a title="南京租房" style="color: #666;" href="javascript:sort('cucVideoUrl');">
			    					<em id="new">视频看房
			    						</em>
			    				</a>
			    		</span>
			    		<div class="SortSel fR">
			    			<em>总共112间房间</em> <span class="sortInpLay">
			    				<input type="text" class="sortinText" id="houseRoad" onkeydown="keyUpSearch('qszf')" onfocus="addLayer(this);" value="输入区域、地铁、小区名" onblur="if (this.value ==''){this.value='输入区域、地铁、小区名';$('.delete').hide();}">
			    			<input type="hidden" id="houseRoad_b" value="">
			    			<input type="hidden" id="stamp" value="spread">
			    			<em class="delete"></em>
			    			<input type="button" onclick="keySearch('qszf');" value="" class="sortSub">
			    			<ul class="jeasySearch blsearch hide" id="resultList">
			    			</ul>
			    			<ul class="easySearch blsearch hide" id="hotSearchList">
			    			</ul>
			    			</span>
			    		</div>
			    	</div>
                <div href="javascript:void(0)" class="width">
					<div class="xqjg_pic">
						<img src="@/assets/image/bannner4.jpg">
					</div>
				</div>   
                <div style="height:400px;position:relative;left:-25px;margin:20px 0">
                     <c-slider  :section="section1" :title="title2" :deTail="deTail2"></c-slider>         
                </div>     
			</div>   
                       
        </section>
        <section class="width">
            <el-row>
                <el-col style="position:relative" :span="6" v-for="(temp,i) in section1" :key="i" :offset="i%3 !=0  ?3:0" class="m20" >
              
                        <el-card :body-style="{ padding: '0px' }"  shadow="always" >
                          <img :src="temp.src" class="image" >
                            <div class="coverBox">
					            <p class="easySub  clearfix">【江宁区】1、3号线南京南站 龙西新寓 精装白领公寓朝南主卧出租 配备齐全 拎包即住</p>
					        </div>
                            <em class="fr0923">
						        <b>原价:1750</b> 元/月
					        </em>
                            <div class="easyEq fl" style="position:relative;margin:20px 0">
							        <p>
							        	<a title="龙西新寓租房" class="placeText fl" href="javascript:(0)">
							        		江宁区-百家湖-龙西新寓租房 19/31层</a>
							        </p>
                              <p >
                                  <template v-for="(ad,iii) in temp.add.slice(0,2)">
                                      <el-tag class="l20" type="danger" :key="iii">{{ad}}</el-tag>
                                  </template>

                                  <!-- <el-tag>美兰湖</el-tag>
                                  <el-tag>佳翔苑</el-tag> -->
                              </p>
                             <div class="easyPrivilege" title="首签指定房源，享受特价优惠">
									<em>特价：</em> <span><i>1071</i>元/月</span>
								</div>                              
							</div>
                            <div class="easyBottomInfo">
						<!-- 地铁 -->
						            <a title="南京租房" class="metroText fl">
						            <span>距离南京南站约929米；</span>
		                         
						            </a>
					            </div>                            
                        </el-card>
                </el-col>
            </el-row>
        </section>
    
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