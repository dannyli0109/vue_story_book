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
        complete(item) {
            // snake
            //   .to(item, 0.07, {
            //     backgroundColor: "white"
            //   }, "1")
            // snake.play(0)
            // antiSnake.play(0)
            // TweenLite.set()

            console.log("complete");
        },
        start() {
            console.log("started");
            // antiSnake.addDelay(1)

        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
        snake = new TimelineMax({ repeat: -1 })
        antiSnake = new TimelineMax({ repeat: -1, delay: 0.5 })
        var corner = []



        for (var i = 1; i <= this.colCount; i++) {
            boxArrayTop.push(`#box-top-${i}`)
            // var currentItem = `#box-top-${i}`
            // snake
            // .from(currentItem, 0.07, {
            //     autoAlpha: 0
            // }`-=${i * 0.}`)
            // .to(currentItem, 0.7, {
            //     autoAlpha: 0
            // })
            // antiSnake
            // .to(currentItem, 0.7, {
            //     autoAlpha: 0
            // })
        }



        for (var i = 1; i <= this.rowCount; i++) {
            boxArrayTop.push(`#box-right-${i}`)
        //     // boxArray.push(`#box-top-${i}`)
        //     var currentItem = `#box-right-${i}`
        //     snake
        //     .from(currentItem, 0.07, {
        //         autoAlpha: 0
        //     })
        //     antiSnake
        //     .to(currentItem, 0.07, {
        //         autoAlpha: 0
        //     })
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

        // boxArrayTop.push(`#box-top-1`)
        // boxArrayTop.push(`#box-top-2`)


        snake
        .staggerFrom(boxArrayTop, 0.7, {
            autoAlpha: 0
        }, 0.1)


        antiSnake
        .staggerTo(boxArrayTop, 0.7, {
            backgroundColor: "white"
        }, 0.1)


        // snake.yoyo(true)

        //
        // for (var i = 0; i < this.colCount; i++) {
        //     // boxArray.push(`#box-top-${i}`)
        //     var currentItem = `#box-bottom-${this.colCount -i }`
        //     snake
        //     .from(currentItem, 0.07, {
        //         autoAlpha: 0
        //     })
        //     antiSnake
        //     .to(currentItem, 0.07, {
        //         autoAlpha: 0
        //     })
        // }
        //
        // for (var i = 0; i <= this.rowCount; i++) {
        //     // boxArray.push(`#box-top-${i}`)
        //     var currentItem = `#box-left-${this.rowCount - i }`
        //     snake
        //     .from(currentItem, 0.07, {
        //         autoAlpha: 0
        //     })
        //     antiSnake
        //     .to(currentItem, 0.07, {
        //         autoAlpha: 0
        //     })
        // }



        // for (var i = 1; i < this.rowCount; i++) {
        //   boxArray.push(`#box-top-${i}`)
        // }

        // snake
        //   .staggerTo(boxArray, 0.3,
        //   {
        //     backgroundColor: "blue",
        //     onComplete: this.complete,
        //     onCompleteParams: ["hi"]
        //   }, 0.07)



        // for (var i = 1; i < this.colCount; i++) {
        //   antiSnake
        //   .to(`#box-top-${i}`, 0.05, {backgroundColor: "white"})
        // }
        // antiSnake.play()
        // antiSnake.pause()
        snake.timeScale(3)
        antiSnake.timeScale(3)
        snake.play()
        // TweenLite.delayedCall(0.5, function(){
        antiSnake.play()
        // });
        // antiSnake.pause(-1, false)
        // .play()

        // antiSnake.pause("+=1", this.pauseComplete)

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
    // opacity: 0;
    border: 1px solid white;
    background-color: blue;
    width: $box-width;
    height: $box-height;
    position: absolute;
}

</style>
