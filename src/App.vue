<script>
import Navbar from "./components/partials/Navbar.vue";
import Wave from "./components/Wave.vue";
import WaveMirrow from "./components/WaveMirrow.vue";
import Footer from "./components/partials/Footer.vue";
import Slider from "./components/Slider.vue";

export default {
  components: {
    Navbar, Footer, Wave, WaveMirrow, Slider
  },
};
</script>

<template>
  <div id="app">
    <Navbar />
    <header class="header pt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-4">
          <h1 class="display-1 text-center">{{ $t('home.title') }}</h1>
        </div>
      </div>
      <Wave></Wave>
    </header>
    <WaveMirrow></WaveMirrow>
    <router-view />
    <Slider></Slider>
    <Footer />
  </div>
</template>

<style></style>