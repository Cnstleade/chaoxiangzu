<template>
    <div class="width section" >
        <p style="    font-size: 24px;font-weight: bold;color: #21cfbb;text-align:center;margin-top:100px">{{deTail.un}}</p>
        <p style="    font-size: 48px;font-weight: bold;color: #1a323e;padding: 22px 0 0 0;text-align:center">{{deTail.zh}}</p>        
        <div class="title flex" >
            <template v-for="(ad,i) in title">
                <span :key="i" @click="changeS(i)" :class="{spanB:true,spanC:spanCurrent == i,}" >{{ad}}</span>
            </template>
        </div>
        <div class="sectionBox" >
            <div class="sectionA">
                <ul ref="sections">
                  
                    <li v-for="(temp,i) in detail" :key="i" :class="{imgbox:true,marginLeft:i!=0}" >
                
                        <!-- <el-card :body-style="{ padding: '0px' }"  shadow="always" > -->
                                    <a class="find findTop" href="javacript:void(0)" target="_blank" title="上海租房">
									<div class="findTit">
										<div class="imgLf">
											<em>31</em> <i>Tue Jul</i>
										</div>
										<div class="titRig">
											<h2>恭喜你！在租房前看到</h2>

											<h2>了这篇最靠谱的小区...</h2>
										</div>
									</div>
									<p>浦东新区2018全新电梯房 打破底价快来了解一下</p>
									</a>                            
                          <!-- <img :src="temp.src" class="image" >
                          <div style="padding: 14px;">
                              <p>
                                  <template v-for="(ad,iii) in temp.add">
                                      <el-tag class="l20" :key="iii">{{ad}}</el-tag>
                                  </template>

                              </p>
                              <p style="color:#E6A23C;font-size:14px;line-height:30px" class="l20">原价:
			    									{{temp.yuanjia}}
			    									元/月
			    								</p>
                              <p >
                            <template v-for="(de,ii) in temp.detail">
                        
                                      <el-tag  class="l20" :key="ii">{{de}}</el-tag>
                                  </template>                              

                              </p>                                            
                            <div class="flex" style="margin-top:10px">
                                <p class="l20">
                                    <template v-for="(a,i) in temp.adds">
                                      <span :key="i">{{a}}</span>
                                      </template> 
                                </p>



                                <p>
                                    <span>特价:</span>
                                    <strong style="color:#F56C6C">{{temp.price}}</strong>
                                    <span>元/月起</span>
                                </p>
                            </div>
                          </div> -->
                        <!-- </el-card> -->
                    </li>
                </ul>
            </div>
        </div>
        <div class="more">
          <a href="javacript:void(0)">查看更多</a>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    section: {
      type: Array
      // default: [
      //   {
      //     src: require("@/assets/image/bannner1.jpg"),
      //     add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
      //     yuanjia: "1391",
      //     detail: ["次卧", "飘窗"],
      //     adds: ["宝山区", "罗店"],
      //     price: "1478"
      //   },
      //   {
      //     src: require("@/assets/image/bannner2.jpg"),
      //     add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
      //     yuanjia: "1391",
      //     detail: ["次卧", "飘窗"],
      //     adds: ["宝山区", "罗店"],
      //     price: "1478"
      //   },
      //   {
      //     src: require("@/assets/image/bannner3.jpg"),
      //     add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
      //     yuanjia: "1391",
      //     detail: ["次卧", "飘窗"],
      //     adds: ["宝山区", "罗店"],
      //     price: "1478"
      //   },
      //   {
      //     src: require("@/assets/image/bannner1.jpg"),
      //     add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
      //     yuanjia: "1391",
      //     detail: ["次卧", "飘窗"],
      //     adds: ["宝山区", "罗店"],
      //     price: "1478"
      //   },
      //   {
      //     src: require("@/assets/image/bannner2.jpg"),
      //     add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
      //     yuanjia: "1391",
      //     detail: ["次卧", "飘窗"],
      //     adds: ["宝山区", "罗店"],
      //     price: "1478"
      //   },
      //   {
      //     src: require("@/assets/image/bannner3.jpg"),
      //     add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
      //     yuanjia: "1391",
      //     detail: ["次卧", "飘窗"],
      //     adds: ["宝山区", "罗店"],
      //     price: "1478"
      //   },
      //   {
      //     src: require("@/assets/image/bannner1.jpg"),
      //     add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
      //     yuanjia: "1391",
      //     detail: ["次卧", "飘窗"],
      //     adds: ["宝山区", "罗店"],
      //     price: "1478"
      //   },
      //   {
      //     src: require("@/assets/image/bannner2.jpg"),
      //     add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
      //     yuanjia: "1391",
      //     detail: ["次卧", "飘窗"],
      //     adds: ["宝山区", "罗店"],
      //     price: "1478"
      //   },
      //   {
      //     src: require("@/assets/image/bannner3.jpg"),
      //     add: ["地铁7号线租房", "美兰湖", "佳翔苑"],
      //     yuanjia: "1391",
      //     detail: ["次卧", "飘窗"],
      //     adds: ["宝山区", "罗店"],
      //     price: "1478"
      //   }
      // ]
    },
    title: {
      type: Array
      // default: ["今日特惠", "最新房源", "热门小区", "人气房源"]
    },
    deTail: {
      type: Object
      // default: { zh: "精品房源推荐", un: "RECOMMENDATION" }
    }
  },
  data() {
    return {
      detail: [],
      dots: [],
      currentPageIndex: 0,
      spanCurrent: 0
    };
  },
  watch: {
    section() {
      setTimeout(() => {}, 20);
    }
  },
  methods: {
    shuffle(aArr) {
      // 打散数组函数
      var iLength = aArr.length,
        i = iLength,
        nTemp,
        iRandom;
      while (i--) {
        if (i !== (iRandom = Math.floor(Math.random() * iLength))) {
          // 不是同一个数组项的前提下进行互换
          nTemp = aArr[i];
          aArr[i] = aArr[iRandom];
          aArr[iRandom] = nTemp;
        }
      }
      return aArr;
    },
    _setSectionWidth(arr) {
      clearTimeout(this.timer);
      let line = arr.length;

      let width = 353 * line + (line - 1) * 20;
      this.dots = new Array(
        parseInt(arr.length / 3) + (arr.length % 3 ? 1 : 0)
      );

      this.$refs.sections.style.width = width + "px";
      this.detail = JSON.parse(JSON.stringify(arr));
      //   this.autoMove(true);
    },
    changeIndex(i, type = false) {
      let px;
      if (type) {
        px = -i * 373 * 3;
        this.currentPageIndex = i;
      } else {
        let d = parseInt(
          String(this.$refs.sections.style.transform).split("(")[1]
        );

        if (isNaN(d)) {
          px = i * 373;
        } else {
          px = d + i * 373;
        }
        let n = px >= 0 ? px : -px;

        let t = parseInt(-px / 373) + (-px % 373 == 0 ? 1 : 0) - 1;
        if (t == this.detail.length) t = this.detail.length - 1;
        if (t == -1) t = 0;
        this.currentPageIndex = parseInt(t / 3);
      }
      if (
        -(353 * this.section.length + (this.section.length - 2) * 20) < px &&
        px <= 0
      ) {
        this.$refs.sections.style.transform = "translateX(" + px + "px)";
      } else if (
        -(353 * this.section.length + this.section.length * 20) == px
      ) {
        this.$refs.sections.style.transform = "translateX(0px)";
        this.currentPageIndex = 0;
      } else {
        return;
      }
    },
    changeS(i) {
      this.spanCurrent = i;
      this._setSectionWidth(this.shuffle(this.section));
    },
    autoMove(type = true) {
      clearTimeout(this.timer);
      if (type) {
        this.timer = setInterval(() => {
          this.changeIndex(-1);
        }, 2000);
      } else {
        clearTimeout(this.timer);
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this._setSectionWidth(this.section);
    }, 20);
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  deactivated() {
    clearTimeout(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.section {
  height: 550px;
  position: relative;
  .title {
    overflow: hidden;
    text-align: center;
    width: 1000px;
    margin: 30px auto;
    // span {
    //   min-width: 95px;
    //   margin: 0 10px;
    //   text-align: center;
    //   font-size: 20px;
    //   display: inline-block;
    //   color: #b8b8b8;
    //   cursor: pointer;
    //   line-height: 60px;
    // }
    .spanC {
      background-color: rgb(33, 207, 187);
      border: 1px solid rgb(33, 207, 187);
      color: white;
      opacity: 1;
    }
    .spanB {
      display: inline-block;
      width: 130px;
      height: 40px;
      text-align: center;
      font-size: 12px;
      line-height: 40px;
      border: 1px solid #bfbfbf;
      border-radius: 20px;
      cursor: pointer;
      margin: 0 13px;
    }
  }
  .sectionBox {
    position: relative;

    .sectionA {
      width: 1099px;
      margin: 50px auto;
      overflow-x: hidden;
      .findTit {
        overflow: hidden;
        padding-bottom: 25px;
      }
      .imgLf {
        width: 70px;
        height: 70px;
        text-align: center;
        background: #fecc05;
        border-radius: 90px;
        color: #fff;
        float: left;
        em {
          font-size: 36px;
          display: block;
          padding: 5px 0 2px 0;
        }
        i {
          font-size: 12px;
          display: block;
        }
      }
      .find p {
        color: #1a323e;
        font-size: 12px;
        line-height: 24px;
      }
      .titRig h2 {
        font-size: 24px;
        color: #1a323e;
        padding-top: 8px;
      }
    }
    .prev {
      display: block;
      width: 30px;
      height: 53px;
      overflow: hidden;
      cursor: pointer;
      background: url(../../assets/image/arrow.png) no-repeat;
      background-position: 0px 0px;
      position: absolute;

      top: 130px;
      z-index: 999;
      &:hover {
        background: url(../../assets/image/arrow01.png) no-repeat;
      }
    }
    .next {
      display: block;
      width: 30px;
      height: 53px;
      overflow: hidden;
      cursor: pointer;
      background: url(../../assets/image/arrow.png) no-repeat;
      background-position: 100% 0px;
      position: absolute;
      right: 0;
      top: 130px;
      z-index: 999;
      &:hover {
        background: url(../../assets/image/arrow01.png) no-repeat;
        background-position: 100% 0px;
      }
    }
  }
  ul {
    height: 400px;
    transition: all 1s;
    transform: translateX(0px);
  }
  .imgbox {
    width: 353px;
    float: left;
    transition: all 2s;
  }
  .marginLeft {
    margin-left: 20px;
  }
  .image {
    width: 100%;
    height: 260px;
    display: block;
  }
  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 230px;
    text-align: center;
    font-size: 0;

    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #b8b8b8;

      &.active {
        width: 50px;
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.8);
      }
    }
  }
  .more {
    position: absolute;

    right: 0;
    left: 0;
    bottom: 30px;
    text-align: center;
    a {
      display: block;
      margin: 0 auto;
      height: 80px;
      width: 245px;
      background: #20cebb;
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      line-height: 80px;
      border-radius: 40px;
    }
  }
}
</style>

