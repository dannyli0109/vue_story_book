<template>
    <section class="section-book">
        <div class="row">
            <div class="book">
                <div class="book__form">
                    <form action="#" class="form">
                        <div class="u-margin-bottom-medium">
                        <h2 class="heading-secondary">
                            Most popular tours
                        </h2>
                        </div>
                        <div class="form__group">
                            <input type="text" class="form__input" placeholder="Full Name" id="name" required>
                            <label for="name" class="form__label">Full name</label>
                        </div>

                        <div class="form__group">
                            <input type="email" class="form__input" placeholder="Email address" id="email" required>
                            <label for="email" class="form__label">Email</label>
                        </div>

                        <div class="form__group u-margin-bottom-medium">
                            <div class="form__radio-group">
                                <input type="radio" id="small" class="form__radio-input" name="size">
                                <label for="small" class="form__radio-label">
                                    <span class="form__radio-button"></span>
                                    Small tour group
                                </label>
                            </div>

                            <div class="form__radio-group">
                                <input type="radio" id="large" class="form__radio-input" name="size">
                                <label for="large" class="form__radio-label">
                                    <span class="form__radio-button"></span>
                                    Large tour group
                                </label>
                            </div>
                        </div>

                        <div class="form__group">
                            <button class="button button--green">Next step &rarr;</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="sass">

</style>
