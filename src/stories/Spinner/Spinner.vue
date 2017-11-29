<template>
  <div class="spinner">
      <div class="dot-container" v-for="i in array" :key="i" :style="{transform: `translateX(-50%) rotate(${(i)*20}deg)`}">
            <div class="spinner__dot" :class="{
                'current-dot': i==current, 
                'current-dot-light': i==(current-1)%18, 
                'current-dot-lighter': i==(current-2)%18,
                'current-dot-lightest': i==(current-3)%18
                }"></div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: -1,
      arrayLength: 18
    };
  },
  watch: {
    current(val) {
      let vm = this;

      setTimeout(() => {
        vm.current = (vm.current + 1) % 18;
      }, 50);
    }
  },
  mounted() {
    this.current = 0;
  },
  computed: {
    array() {
      return [...Array(this.arrayLength).keys()];
    }
  }
};
</script>

<style lang="scss">
@import "./scss/spinner";
</style>
