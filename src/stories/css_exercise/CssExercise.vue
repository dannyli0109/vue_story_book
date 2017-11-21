<template lang="html">
    <body class="body">
        <title>Natours | Exciting tours for adventurous people</title>  
        <app-header></app-header>

        <main>
            <about-session></about-session>
            <features></features>
            <tours></tours>
            <stories></stories>
            <booking></booking>
            <app-footer></app-footer>
            
        </main>
    </body>
</template>

<script>
import Header from "./Components/Header.vue";
import About from "./Components/About.vue";
import Features from "./Components/Features.vue";
import Tours from "./Components/Tours.vue";
import Stories from "./Components/Stories.vue";
import Booking from "./Components/Booking.vue";
import Footer from "./Components/Footer.vue";
export default {
  components: {
    appHeader: Header,
    aboutSession: About,
    features: Features,
    tours: Tours,
    stories: Stories,
    booking: Booking,
    appFooter: Footer
  }
};
</script>

<style lang="scss">
@import "scss/abstracts/variables";
@import "scss/abstracts/functions";
@import "scss/abstracts/mixins";

@import "scss/base/base";
@import "scss/base/animations";
@import "scss/base/typography";
@import "scss/base/utilities";
@import "scss/base/icon";

@import "scss/pages/home";

@import "scss/components/button";
@import "scss/components/composition";
@import "scss/components/feature-box";
@import "scss/components/card";
@import "scss/components/story";
@import "scss/components/form";

@import "scss/layout/navigation";
@import "scss/layout/header";
@import "scss/layout/grid";
@import "scss/layout/footer";
</style>
