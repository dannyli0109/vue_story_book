<template>
    <div class="button01">
      <div class="button" id="button01" @mouseenter="onButton01Hover" @mouseleave="onButton01Mouseout" @click="onButton01Click">
        <div class="button__content" id="button01--content">{{ buttonName }}</div>
        <div class="container--loading">
          <div class="button__loading" id="button01--loading">
            <template v-for="i in 7">
              <div class="button__loading__content" :id="'button-loading-' + i"></div>
            </template>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

  import { TweenMax, TimelineMax } from 'gsap'

  var hover = new TimelineMax()

  var clickTl



  export default {
    components: { TweenMax },
    data: function() {
      return {
        buttonName: "Test Button",
        loading: false
      }
    },
    methods: {
      onButton01Hover: function(event) {
        if(this.loading) {
          return
        }
        console.log("enter");
        hover.play()
        hover
          .to("#button01--content", 0, { color: 'white' })
          .to("#button01", 0, { backgroundColor: '#3396f1'}, "-=0.01")
      },
      onButton01Mouseout: function() {
        console.log("exit");
        if(this.loading) {
          return
        }
        hover.reverse()
        // tl.to("#button01--content", 0.5, {autoAlpha: 1})
      },
      onButton01Click: function(event) {
        if (this.loading) {
          clickTl.reverse(clickTl.getChildren(false, true, true, 0)[0].duration())
          // this.loading = false
        } else {
          clickTl.play()
          this.loading = true;
        }
      },
      frame1() {
        var tl = new TimelineMax()
          .to("#button01", 0.25, {
              rotation: "720deg",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              backgroundColor: '#3396f1'
            })
          .to("#button01--content", 0.001, {
              autoAlpha: 0
            }, "-=0.25")
          .to("#button01--loading", 0.001, {
              autoAlpha: 1,
            })
        tl.add("transformed")

        return tl;
      },
      frame2() {
        var tl = new TimelineMax({repeat: -1})
          .staggerTo([
            "#button-loading-3",
            "#button-loading-5",
            "#button-loading-4",
            "#button-loading-2",
            "#button-loading-6",
            "#button-loading-1",
            "#button-loading-7"], 0.3,
          {
            height: `+=50px`
          }, 0.07)
          .staggerTo([
            "#button-loading-3",
            "#button-loading-5",
            "#button-loading-4",
            "#button-loading-2",
            "#button-loading-6",
            "#button-loading-1",
            "#button-loading-7"], 0.3, {
            height: "1px"
          }, 0.07, "-=0.25")
          tl.timeScale(1.2)
          // .reverse()
        // tl.reverse()
        return tl
      },
      reversed() {
        this.loading = false;
        hover.reverse(hover.duration())
      }
    },
    mounted() {
      clickTl = new TimelineMax({onReverseComplete:this.reversed})
      clickTl
        .add(this.frame1(), "+=0.0")
        .add(this.frame2(), "+=0.0")
      clickTl.pause()
    }
  }
</script>

<style lang="scss" scoped>
  @mixin center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
  $text-color: #3396f1;
  $font: 'Open Sans', verdana, arial, sans-serif;
  $font-size: 14px;
  $loading-bars: 7;

  * {
    box-sizing: border-box;
  }


  .button01 {
    @include center-content;
  }
  .button {
    width: 200px;
    height: 70px;
    border: 4px solid $text-color;
    position: relative;
    cursor: pointer;

    &__content {
      @include center-content;
      color: $text-color;
      font: {
        family: $font;
        size: $font-size;
      }
    }

    &__loading {
      @include center-content;
      width: 100%;
      height: 100%;
      opacity: 0;
      padding-left: 30px;
      padding-right: 30px;
      position: relative;
      transform: translate(-50%, -80%);


      &__content {
        // border: 1px solid black;
        display: inline-block;
        height: 1px;
        width: 12px;
        margin: 0 1px;
        background-color: white;
        position: absolute;
        bottom: 0;
      }
    }
  }

  .container--loading {
    width: 100%;
    height: 100%;
    padding: 0 47px;
  }

  @for $i from 1 through $loading-bars {
    #button-loading-#{$i} {
      left: #{round(($i - 1) * 100/$loading-bars) * 1%};
    }
  }
</style>
