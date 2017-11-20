<template>
    <section class="section-stories">
        <!-- <div class="bg-video">
            <video class="bg-video__content" autoplay muted loop>
                <source src="../img/video.mp4" type="video/mp4">
                <source src="../img/video.webm" type="video/webm">
                Your browser is not supported!
            </video>
        </div> -->
        <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
                We make people genuinely happy
            </h2>
        </div>
        <div class="row">
            <!-- <div v-for="story in stories" :key="story.caption">
                {{ story }}
                <img :src="'../img/' + story.image" alt="" class="story__img">
            </div> -->
            <story :story="stories[0]">
                <img slot="image" src="../img/nat-8.jpg" alt="" class="story__img">
            </story>
        </div>
        <div class="row">
            <story :story="stories[1]">
                <img slot="image" src="../img/nat-9.jpg" alt="" class="story__img">
            </story>
        </div>
        <div class="u-center-text u-margin-top-huge">
            <a href="#" class="button-text">Read all stories &rarr;</a>
        </div>
    </section>
</template>

<script>
import Story from "./Story.vue";
export default {
  components: {
    story: Story
  },
  data() {
    return {
      stories: [
        {
          caption: "Mary Smith",
          heading: "I had the best week ever with my family",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aliquam impedit totam. Esse enim quae repellendus, voluptatem dolor dolorem quis ipsam beatae, culpa nam autem quaerat quasi dicta quam atque quos alias! Saepe eaque veritatis quo",
          image: "nat-8.jpg"
        },
        {
          caption: "Jack Wilson",
          heading: "WOW! My life is completely different now",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aliquam impedit totam. Esse enim quae repellendus, voluptatem dolor dolorem quis ipsam beatae, culpa nam autem quaerat quasi dicta quam atque quos alias! Saepe eaque veritatis quo",
          image: "nat-9.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss">

</style>
