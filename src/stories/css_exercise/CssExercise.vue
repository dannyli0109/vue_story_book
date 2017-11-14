<template lang="html">
  <body class="body">
    <title>Natours | Exciting tours for adventurous people</title>
    <header class="header">
        <div class="logo-box">
            <img src="./img/logo-white.png" alt="Logo" class="logo">
        </div>

        <div class="text-box">
            <h1 class="heading-primary">
                <span class="heading-primary-main">Outdoors</span>
                <span class="heading-primary-sub">is where life happens</span>
            </h1>
        </div>
           
    </header>
  </body>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900");
@import url("https://fonts.googleapis.com/css?family=Barlow+Condensed");

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #777;
  padding: 30px;
}

.header {
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 133, 0.8)
    ),
    url("img/hero.jpg");
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
}

.logo-box {
  position: absolute;
  top: 40px;
  left: 40px;
}

.logo {
  height: 35px;
}

.text-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.heading-primary {
  color: #fff;
  text-transform: uppercase;

  &-main {
    display: block;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 35px;
  }

  &-sub {
    display: block;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 17.4px;
  }
}
</style>
