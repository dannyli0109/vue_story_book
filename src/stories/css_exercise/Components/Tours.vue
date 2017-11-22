<template>
<section class="section-tours" id="section-tours">
    <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
            Most popular tours
        </h2>
    </div>

    <div class="row">
        <tour v-for="(tour, i) in tours" :key="i" :tour="tour"></tour>
    </div>

    <div class="u-center-text u-margin-top-huge">
        <a href="#" class="button button--green">Discover all tours</a>
    </div>
</section>
  
</template>

<script>
import Tour from "./Tour.vue";
export default {
  components: {
    tour: Tour
  },
  data() {
    return {
      tours: [
        {
          title: "The sea explorer",
          details: [
            "3 day tour",
            "Up to 30 people",
            "2 tour guides",
            "Sleep in cozy hotels",
            "Difficult: easy"
          ],
          price: "$297",
          pictureClass: "card__picture--1",
          headingClass: "card__heading-span--1",
          backClass: "card__side--back-1"
        },
        {
          title: "The forest hiker",
          details: [
            "7 day tour",
            "Up to 40 people",
            "6 tour guides",
            "Sleep in provided tents",
            "Difficult: medium"
          ],
          price: "$497",
          pictureClass: "card__picture--2",
          headingClass: "card__heading-span--2",
          backClass: "card__side--back-2"
        },
        {
          title: "The snow adventurer",
          details: [
            "5 day tour",
            "Up to 15 people",
            "3 tour guides",
            "Sleep in provided tents",
            "Difficult: hard"
          ],
          price: "$697",
          pictureClass: "card__picture--3",
          headingClass: "card__heading-span--3",
          backClass: "card__side--back-3"
        }
      ]
    };
  }
};
</script>

<style lang="scss">

</style>
