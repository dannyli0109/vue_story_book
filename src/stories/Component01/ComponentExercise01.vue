<template>
    <div class="container">
        <app-header :quote-percentage="percentage">{{ progressText }}</app-header>
        <add-Quote class="add-quote" :on-add="onAddQuote"></add-Quote>
        <quotes :quotes="quotes" :on-remove-quote="onRemoveQuote"></quotes>
    </div>
</template>

<script>
    import Header from "./Components/Header.vue"
    import AddQuote from "./Components/AddQuote.vue"
    import Quotes from "./Components/Quotes.vue"

    export default {
        components: {
            appHeader: Header,
            addQuote: AddQuote,
            quotes: Quotes
        },
        data() {
            return {
                quotes: []
            }
        },
        computed: {
            percentage() {
                return this.quotes.length/10 * 100
            },
            progressText() {
                return `${this.quotes.length}/10`
            }
        },
        methods: {
            onAddQuote(quote) {
                if (this.quotes.length < 10) {
                    this.quotes.push(quote)
                }
            },
            onRemoveQuote(index) {
                this.quotes.splice(index, 1)
            }
        }
    }
</script>

<style lang="scss">

    .add-quote {
        margin: 0 auto;
    }

    * {
        box-sizing: border-box;
    }
</style>
