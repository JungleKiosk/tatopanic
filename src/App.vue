<script>
import Navbar from "./components/partials/Navbar.vue";
import Wave from "./components/Wave.vue";
import WaveMirrow from "./components/WaveMirrow.vue";
import Footer from "./components/partials/Footer.vue";
import Slider from "./components/Slider.vue";

// ✅ Importa le immagini correttamente
import lightImage from "./assets/img/header/1.png";
import darkImage from "./assets/img/header/3.png";

export default {
  components: {
    Navbar, Footer, Wave, WaveMirrow, Slider
  },
  data() {
    return {
      isDarkMode: false // Stato iniziale del tema
    };
  },
  computed: {
    // ✅ Cambia immagine dinamicamente
    headerImage() {
      return this.isDarkMode ? darkImage : lightImage;
    }
  },
  mounted() {
    this.checkTheme();
    window.addEventListener("storage", this.syncTheme); // Sincronizza tra schede
  },
  watch: {
    // ✅ Ricalcola l'immagine quando `isDarkMode` cambia
    isDarkMode() {
      this.$forceUpdate();
    }
  },
  methods: {
    checkTheme() {
      const currentTheme = localStorage.getItem("theme");
      this.isDarkMode = currentTheme === "dark-mode";
    },
    syncTheme() {
      this.checkTheme();
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      const newTheme = this.isDarkMode ? "dark-mode" : "light-mode";
      localStorage.setItem("theme", newTheme);
      document.body.classList.toggle("dark-mode", this.isDarkMode);
      document.body.classList.toggle("light-mode", !this.isDarkMode);
    }
  }
};
</script>

<template>
  <div id="app">
    <Navbar @toggle-theme="toggleTheme" /> <!-- ✅ Passa la funzione alla Navbar -->
    <header id="header" class="pt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-4">
          <div class="title-container">
            <h1 class="display-1">{{ $t('home.title') }}</h1>
            <!-- ✅ Usa il valore corretto della computed property -->
            <img class="title-image-dx" :src="headerImage" alt="Header Image">
          </div>
        </div>
      </div>
      <Wave />
    </header>
    <WaveMirrow />
    <router-view />
    <Slider />
    <Footer />
  </div>
</template>
