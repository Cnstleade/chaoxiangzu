<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <el-button type="danger">你好</el-button>
    <slider :recommends="recommends">

    </slider>     -->
    <router-view/>
  </div>
</template>

<script>
import Slider from "@/components/common/slider/slider";
export default {
  name: "App",
  data() {
    return {
      recommends: [
        {uid:1,linkUrl:'a',picUrl:require("./assets/image/bannner1.jpg")},
        {uid:2,linkUrl:'a',picUrl:require("./assets/image/bannner2.jpg")},
        {uid:3,linkUrl:'a',picUrl:require("./assets/image/bannner3.jpg")}]
    };
  },
  components: {
    Slider
  }
};
</script>

<style>
#app {

}
</style>
