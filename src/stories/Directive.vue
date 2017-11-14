<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button class="btn btn-primary" v-my-on:click="onClick">my Bind</button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'my-on': {
                bind(el, binding, vNode) {
                    el.addEventListener(binding.arg, binding.value)
                }
            }
        },
        methods: {
            onClick(e) {
                console.log("hi");
            }
        },
        data() {
            return {
                clicked: false
            }
        }
    }
</script>

<style>
</style>
