<template>
    <div class="home">
        <header>
            <div class="header">
                <img src="@/assets/logo.png" alt="" width="60">
                <span >
                    <i class="el-icon-location"></i>上海
                </span>
            </div>

        </header>
    </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
header {
  height: 60px;
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 99;
  box-shadow: 0 1px 3px #959595;
}


</style>

