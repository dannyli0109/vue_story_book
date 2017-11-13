<template>
    <div class="container">
        <template v-for="i in colCount">
            <div
            :id="'box-top-' + i"
            class="box-top box"
            :style="{left: (i-1) * 20 + 'px'}"
            ></div>
        </template>

        <template v-for="i in colCount">
            <div
            :id="'box-bottom-' + i"
            class="box-bottom box"
            :style="{left: (i-1) * 20 + 'px', top: (rowCount-1) * 20 + 'px'}"
            ></div>
        </template>


        <template v-for="i in rowCount">
            <div
            :id="'box-left-' + i"
            class="box-left box"
            :style="{top: (i-1) * 20 + 'px'}"
            ></div>
        </template>

        <template v-for="i in rowCount">
            <div
            :id="'box-right-' + i"
            class="box-right box"
            :style="{top: (i-1) * 20 + 'px', left: (colCount-1) * 20 + 'px'}"
            ></div>
        </template>


    </div>
</template>


<script>

import { TweenMax, TimelineMax } from 'gsap'

var snake

var antiSnake

var boxArrayTop = []

export default {
    data: function() {
        return {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    },
    methods: {
      handleResize() {
        this.windowWidth = window.innerWidth
        this.windowHeight = window.innerHeight

      },
      complete() {
        console.log("hi");
        snake.play(0)
        console.log(snake.duration());
      },
      initSnake() {
        snake = new TimelineMax({ repeat: -1 })
        antiSnake = new TimelineMax({ repeat: -1, delay: 0.5 })
        var corner = []



        for (var i = 1; i <= this.colCount; i++) {
            boxArrayTop.push(`#box-top-${i}`)
        }



        for (var i = 1; i <= this.rowCount; i++) {
            boxArrayTop.push(`#box-right-${i}`)
        }

        for (var i = 0; i < this.colCount; i++) {
            boxArrayTop.push(`#box-bottom-${this.colCount - i}`)
        }

        for (var i = 0; i < this.rowCount; i++) {
            boxArrayTop.push(`#box-left-${this.rowCount - i}`)
        }

        for (var i = 1; i < 4; i++) {
            corner.push(`#box-top-${i}`)
        }

        snake
        .staggerFrom(boxArrayTop, 0.7, {
            autoAlpha: 0
        }, 0.1)


        antiSnake
        .staggerTo(boxArrayTop, 0.7, {
            backgroundColor: "white"
        }, 0.1)

        snake.timeScale(3)
        antiSnake.timeScale(3)
        snake.play()
        antiSnake.play()
      }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
        this.initSnake()


    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },
    computed: {
        colCount() {
            return Math.floor(this.windowWidth/20)
        },
        rowCount() {
            return Math.floor(this.windowHeight/20)
        }
    }
}

</script>

<style lang="scss" scoped>

$box-width: 20px;
$box-height: 20px;
@mixin center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
}

* {
    box-sizing: border-box;
}
.container {
    position: absolute;
    height: 100%;
    width: 100;
    top: 0;
    left: 0;
}
.box {
    border: 1px solid white;
    background-color: blue;
    width: $box-width;
    height: $box-height;
    position: absolute;
}

</style>
