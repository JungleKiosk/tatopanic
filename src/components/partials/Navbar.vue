<script>
import lang from "../partials/LangSwitcher.vue"
export default {
  name: "Navbar",
  components: {
    lang
  },
  data() {
    return {
      isDarkMode: false
    };
  },
  mounted() {
    this.checkTheme();
    window.addEventListener("storage", this.syncTheme);
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
      localStorage.setItem("theme", this.isDarkMode ? "dark-mode" : "light-mode");
      document.body.classList.toggle("dark-mode", this.isDarkMode);
      document.body.classList.toggle("light-mode", !this.isDarkMode);

    }
  }
};
</script>

<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">{{ $t('navbar.home') }}</router-link></li>
      <li><router-link to="/about">{{ $t('navbar.about') }}</router-link></li>
      <li><router-link to="/skill">{{ $t('navbar.skill') }}</router-link></li>
      <li>
        <!-- ✅ Bottone per cambiare tema -->
        <button @click="toggleTheme" class="theme-button">
          {{ isDarkMode ? '🌞' : '🌙' }}
        </button>
      </li>
      <li>
        <lang></lang>
      </li>
    </ul>
  </nav>
</template>
