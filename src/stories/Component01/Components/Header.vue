<template lang="html">
    <div class="header">
        <h1>Quotes Added</h1>
        <div class="progress">
            <div class="progress-bar" :style="{width: quotePercentage + '%'}">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["quote-percentage"]
};
</script>

<style lang="css">

</style>
