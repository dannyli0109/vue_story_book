<template>
    <div class="story">
        <figure class="story__shape">
            <slot name="image" ></slot>
            <!-- <img :src="'../img/' + story.image" alt=""> -->
            
            <figcaption class="story__caption">{{story.caption}}
            </figcaption>
        </figure>
        <div class="story__text">
            <h3 class="heading-tertiary u-margin-bottom-small">{{story.heading}}</h3>
            <p>{{ story.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    story: Object
  }
};
</script>

<style lang="scss">

</style>
