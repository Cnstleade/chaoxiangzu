<template>
  <div>
      <router-view></router-view>
       <div class="block">
         <span class="demonstration">Click 指示器触发</span>
         <el-carousel trigger="click" height="450px" >
           <el-carousel-item v-for="item in imgSrc" :key="item">
             <img :src="item.src" alt="" class="img" >
           </el-carousel-item>
         </el-carousel>
       </div>      
      <c-section></c-section>
  </div>
</template>

<script>
import cSection from "@/components/common/section";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      imgSrc: [
        { src: require("@/assets/image/bannner1.jpg") },
        { src: require("@/assets/image/bannner1.jpg") },
        { src: require("@/assets/image/bannner1.jpg") },
        { src: require("@/assets/image/bannner1.jpg") }
      ]
    };
  },
  components: {
    cSection
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
.img {
  width: 100%;
  height: 100%;
  display: block;
  margin: auto;
  cursor: pointer;
}
</style>