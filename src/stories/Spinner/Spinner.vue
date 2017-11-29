<template>
  <div class="spinner">
      <div class="dot-container" v-for="i in 18" :key="i" :style="{transform: `translateX(-50%) rotate(${(i-1)*20}deg)`}">
            <div class="spinner__dot" :class="{'current-dot': i==current}"></div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  watch: {
    current(val) {
      let vm = this;
      if (this.current == 0) {
        this.current == 1;
      }
      setTimeout(() => {
        vm.current = (vm.current + 1) % 19;
      }, 80);
    }
  },
  mounted() {
    this.current = 1;
  }
};
</script>

<style lang="scss">
@import "./scss/spinner";
</style>
