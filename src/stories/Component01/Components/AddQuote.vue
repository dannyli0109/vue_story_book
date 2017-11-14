<template lang="html">
    <div class="add-quote">
        <h4>Quote</h4>
        <textarea name="quote" rows="3" class="form-control" v-model="quote"></textarea>
        <br>
        <div class="center">
            <button type="button" class="btn btn-primary" @click="clicked">Add Quote</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        "on-add": Function
    },
    data() {
        return {
            quote: ""
        }
    },
    methods: {
        clicked() {
            this.onAdd(this.quote)
            this.quote=""
        }
    }
}
</script>

<style lang="css" scoped>
    .add-quote {
        width: 50%;
    }
    .center {
        text-align: center;
    }
</style>
