<template lang="html">
    <div
        :class="[{ 'alert-info': !hovered, 'alert-danger': hovered }, 'quote alert']" @mouseenter="hovered = true" @mouseleave="hovered = false" @click="onRemoveQuote(index)">
        <slot></slot>
    </div>
</template>

<script>
export default {
    methods: {

    },
    data() {
        return {
            hovered: false
        }
    },
    props: {
        "onRemoveQuote": Function,
        "index": Number
    }
}
</script>

<style lang="css" scoped>
    .quote {
        font-family: "Arizonia", cursive;
        font-size: 24px;
        color: #6e6e6e
    }
</style>
