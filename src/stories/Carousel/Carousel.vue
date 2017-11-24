<template>
    <div class="carousel">
        <div class="carousel__mask">
            <div class="image-container" :style="{left: leftOffset}">
                <img src="./img/hero.jpg" alt="" class="carousel__image-1">
                <img src="./img/nat-1-large.jpg" alt="" class="carousel__image-2">
                <img src="./img/nat-2-large.jpg" alt="" class="carousel__image-3">
                <img src="./img/nat-3-large.jpg" alt="" class="carousel__image-4">
            </div>
        </div>
        
        <div class="navigation">
            <div class="navigation__left" @click="previous">
                &lsaquo;
            </div>
            <div class="navigation__right" @click="next">
                &rsaquo;
            </div>
            <div class="navigation__buttons">
                <div v-for="i in 4" class="navigation__buttons__button" :style="{left: `${(i-1) * 20}px`, backgroundColor: `${(i - 1) == currentImageIndex ? 'rgba(255, 255, 255, 0.5)' : 'transparent'}`}" :key="i" @click="onNavClick(i)">
                    &nbsp;
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var timeOut;
export default {
  data() {
    return {
      currentImageIndex: 0,
      endIndex: 3
    };
  },
  methods: {
    previous() {
      clearTimeout(timeOut);
      this.currentImageIndex -= 1;
      if (this.currentImageIndex < 0) {
        this.currentImageIndex = this.endIndex;
      }
    },
    next() {
      clearTimeout(timeOut);
      this.currentImageIndex = (this.currentImageIndex + 1) % 4;
    },
    onNavClick(i) {
      clearTimeout(timeOut);
      this.currentImageIndex = i - 1;
    }
  },
  computed: {
    leftOffset() {
      return `${this.currentImageIndex * -450}px`;
    }
  },
  watch: {
    currentImageIndex() {
      var vm = this;
      timeOut = setTimeout(function() {
        vm.next();
      }, 3000);
    }
  },
  mounted() {
    var vm = this;
    timeOut = setTimeout(function() {
      vm.next();
    }, 3000);
  }
};
</script>

<style lang="sass">
    @import "scss/component/image-container"
</style>
