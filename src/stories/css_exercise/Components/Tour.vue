<template>
    <div class="col-1-of-3">
        <div class="card">
            <div class="card__side card__side--front">
                <div class="card__picture" :class="tour.pictureClass">
                    &nbsp;
                </div>
                <h4 class="card__heading">
                    <span class="card__heading-span" :class="tour.headingClass">
                        {{tour.title}}
                    </span>
                </h4>
                <div class="card__details">
                    <ul>
                        <li v-for="(detail, i) in tour.details" :key="i">{{ detail }}</li>
                    </ul>
                </div>
            </div>

            <div class="card__side card__side--back" :class="tour.backClass">
                <div class="card__cta">
                    <div class="card__price-box">
                        <div class="card__price-only">Only</div>
                        <div class="card__price-value">{{tour.price}}</div>
                    </div>
                    <a href="#popup" class="button button--white">Book now!</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  props: {
    tour: Object
  }
};
</script>


<style lang="sass">

</style>
