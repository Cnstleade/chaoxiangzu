<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <transition name="slider-show" >
                <div v-for="(item,index) in recommends" :key = "item.uid"  v-if="currentPageIndex === index">
                    <a :href="item.linkUrl">
                        <img  class="needsclick" :src="item.picUrl" width="sliderWidth">
                    </a>
                </div>
            </transition>
        </div>
        <div class="dots">
            <span @click="currentPageIndex = index" class="dot" v-for="(item,index) in dots" :key="index" :class="{active:currentPageIndex === index}"></span>
        </div>
    </div>
</template>

<script>
import { addClass } from "@/assets/js/dom";
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    recommends: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      dots: [],
      currentPageIndex: 0,
      sliderWidth: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this._setSliderWidth();
      this._initDots();
      //   if (this.autoPlay) {
      //     this._play();
      //   }
    }, 20);
    window.addEventListener("resize", () => {
      this._setSliderWidth(true);
    });
  },
  methods: {
    _setSliderWidth(isResize) {
      //根据1200px*500来设置
      this.children = this.$refs.sliderGroup.children;

      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth + 17;
      this.sliderWidth = sliderWidth;
      console.log(sliderWidth);
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        addClass(child, "slider-item");

        child.style.width = sliderWidth + "px";
        width += sliderWidth;
      }
      if (this.loop && !isResize) {
        width += 2 * sliderWidth;
      }
      this.$refs.sliderGroup.style.width = width + "px";
    },
    _initDots() {
      this.dots = new Array(this.recommends.length);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.slider {
  min-height: 1px;
  position: relative;

  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;

    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;

      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }
}
.dots {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 20px;
  text-align: center;
  font-size: 0;

  .dot {
    display: inline-block;
    margin: 0 10px;
    width: 40px;
    height: 20px;
    border-radius: 50%;
    background: $color-text-l;

    &.active {
      width: 60px;
      border-radius: 20px;
      background: $color-text-ll;
    }
  }
}

.slider-show-enter-active,
.slider-show-leave-active {
  transition: opacity 0.5s;
}
.slider-show-enter, .slider-show-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

