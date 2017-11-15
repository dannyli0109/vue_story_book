<template lang="html">
  <body class="body">
    <title>Natours | Exciting tours for adventurous people</title>
    <header class="header">
        <div class="header__logo-box">
            <img src="./img/logo-white.png" alt="Logo" class="header__logo">
        </div>

        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Outdoors</span>
                <span class="heading-primary--sub">is where life happens</span>
            </h1>

            <a href="#" class="button button--white button--animated">Discover our tour</a>
        </div>
    </header>

	<main>
		<section class="section-about">
			<div class="u-center-text u-margin-bottom-8">
				<h2 class="heading-secondary">
					Exciting tours for adventurous people
				</h2>
			</div>

			<div class="row">
				<div class="col-1-of-2">
					<h3 class="heading-tertiary">You're going to fall in love with nature</h3>
					<p class="paragraph">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatum excepturi aut in eligendi mollitia commodi officiis. Aliquam, dolores sit enim nostrum, eius necessitatibus cum nobis vel sequi qui nam.
					</p>

					<h3 class="heading-tertiary">Live adventurous like you never have before</h3>
					<p class="paragraph">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatum excepturi aut in eligendi mollitia commodi officiis. Aliquam, dolores sit enim nostrum, eius necessitatibus cum nobis vel sequi qui nam.
					</p>
				</div>
				<div class="col-1-of-2">
					Image
				</div>
			</div>
		</section>
	</main>

	<!-- <section class="grid-test">
		<div class="row">
			<div class="col-1-of-2">
				Col 1 of 2
			</div>
			<div class="col-1-of-2">
				Col 1 of 2
			</div>
		</div>

		<div class="row">
			<div class="col-1-of-3">
				Col 1 of 3
			</div>
			<div class="col-1-of-3">
				Col 1 of 3
			</div>
			<div class="col-1-of-3">
				Col 1 of 3
			</div>
		</div>

		<div class="row">
			<div class="col-1-of-3">
				Col 1 of 3
			</div>
			<div class="col-2-of-3">
				Col 2 of 3
			</div>
		</div>

		<div class="row">
			<div class="col-1-of-4">
				Col 1 of 4
			</div>
			<div class="col-1-of-4">
				Col 1 of 4
			</div>
			<div class="col-1-of-4">
				Col 1 of 4
			</div>
			<div class="col-1-of-4">
				Col 1 of 4
			</div>
		</div>

		<div class="row">
			<div class="col-1-of-4">
				Col 1 of 4
			</div>
			<div class="col-1-of-4">
				Col 1 of 4
			</div>
			<div class="col-2-of-4">
				Col 2 of 4
			</div>
		</div>

		<div class="row">
			<div class="col-1-of-4">
				Col 1 of 4
			</div>
			<div class="col-3-of-4">
				Col 3 of 4
			</div>
		</div>


	</section> -->
  </body>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "scss/abstracts/variables";
@import "scss/abstracts/functions";
@import "scss/abstracts/mixins";

@import "scss/base/base";
@import "scss/base/animations";
@import "scss/base/typography";
@import "scss/base/utilities";

@import "scss/pages/home";

@import "scss/components/button";

@import "scss/layout/header";
@import "scss/layout/grid";
</style>
