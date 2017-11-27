<template>
    <div class="outer-container" @mousemove="mouseMove">
        <div class="moving-mask" :style="{left: mousePosition.x, top: mousePosition.y}">
            <img src="./img/nat-2-large.jpg" alt="" class="image" :style="{left: mousePosition.x, top: mousePosition.y}">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      mousePosition: {
        x: "50%",
        y: "50%"
      },
      imagePosition: {
        x: "50%",
        y: "50%"
      }
    };
  },
  methods: {
    mouseMove(event) {
      //   if (this.position) {
      this.mousePosition.x = event.pageX + "px";
      this.mousePosition.y = event.pageY + "px";

      this.imagePosition.x = -event.pageX + "px";
      this.imagePosition.y = -event.pageY + "px";
      //   }
    }
  }
};
</script>

<style lang="sass">
    @import "scss/component/moving-mask"
</style>

