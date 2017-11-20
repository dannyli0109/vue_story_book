<template>
    <section class="section-features">
        <div class="row">
            <feature v-for="(feature, i) in features" :key="i" :feature="feature"></feature>
        </div>
    </section>
</template>

<script>
import Feature from "./Feature.vue";
export default {
  components: {
    feature: Feature
  },
  data() {
    return {
      features: [
        {
          title: "Explore the world",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsum atque eveniet dolor sint perspiciatis nemo mollitia autem ea dolorem.",
          icon: "icon-basic-world"
        },
        {
          title: "Meet nature",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsum atque eveniet dolor sint perspiciatis nemo mollitia autem ea dolorem.",
          icon: "icon-basic-compass"
        },
        {
          title: "Find your way",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsum atque eveniet dolor sint perspiciatis nemo mollitia autem ea dolorem.",
          icon: "icon-basic-map"
        },
        {
          title: "Live a healthier life",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsum atque eveniet dolor sint perspiciatis nemo mollitia autem ea dolorem.",
          icon: "icon-basic-heart"
        }
      ]
    };
  }
};
</script>

<style lang="scss">

</style>
