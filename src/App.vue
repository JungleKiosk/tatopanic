<script>
import Navbar from "./components/partials/Navbar.vue";
import Header from "./components/main/Header.vue";
import WaveMirrow from "./components/WaveMirrow.vue";
import Footer from "./components/partials/Footer.vue";
import Slider from "./components/Slider.vue";

export default {
  components: {
    Navbar, Footer,
    WaveMirrow,
    Slider, Header
  },
  data() {
    return {
      isDarkMode: false // Stato iniziale del tema
    };
  },
};
</script>

<template>
  <div id="app">
    <Navbar/>
    <Header></Header>
    <WaveMirrow />
    <router-view />
    <Slider />
    <Footer />
  </div>
</template>
