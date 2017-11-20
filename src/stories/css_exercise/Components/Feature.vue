<template>
    <div class="col-1-of-4">
        <div class="feature-box">
            <i class="feature-box__icon" :class="feature.icon"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">{{feature.title}}</h3>
            <p class="feature-box__text">
                {{feature.details}}
            </p>
        </div>
    </div>
  
</template>

<script>
export default {
  props: {
    feature: Object
  }
};
</script>

<style lang="sass">

</style>
