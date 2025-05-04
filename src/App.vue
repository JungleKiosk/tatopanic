<script>
import Navbar from "./components/partials/Navbar.vue";
import Header from "./components/main/Header.vue";
import WaveMirrow from "./components/WaveMirrow.vue";
import Footer from "./components/partials/Footer.vue";
import { marker_points } from "./data/markers.js";
import AppMap from "./components/AppMap.vue";


export default {
  components: {
    Navbar, Footer,
    WaveMirrow, Header, AppMap
  },
  data() {
    return {
      isDarkMode: false,
      marker_points: marker_points
    };
  },
};
</script>

<template>
  <div id="app">
    <Navbar />
    <Header></Header>
    <WaveMirrow />
    <router-view />
    <AppMap :marker_points="marker_points"></AppMap>
    <Footer />
  </div>
</template>
