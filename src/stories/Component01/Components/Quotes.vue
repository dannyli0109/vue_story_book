<template lang="html">
  <div class="quotes container">
    <div class="row padding">
        <template v-for="(quote, i) in quotes">
            <div class="col-sm-4">
                <quote :on-remove-quote="onRemoveQuote" :index="i"> {{ quote }} </quote>
            </div>
        </template>
    </div>

  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  components: {
    quote: Quote
  },
  props: {
    quotes: Array,
    onRemoveQuote: Function
  }
};
</script>

<style lang="css">
.padding {
  padding: 20px 20px;
}
.margin {
  margin: 2px 2px;
}
</style>
