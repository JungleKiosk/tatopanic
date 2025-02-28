<script>
import ColorMode from "./ColorMode.vue";
import LangSwitcher from "./LangSwitcher.vue";

export default {
  name: "Navbar",
  components: {
    ColorMode,
    LangSwitcher
  }
};
</script>

<template>
  <nav class="navbar justify-content-center">
    <ul>
      <li><router-link to="/">{{ $t('navbar.home') }}</router-link></li>
      <li><router-link to="/about">{{ $t('navbar.about') }}</router-link></li>
      <li><ColorMode /></li>
      <li><LangSwitcher /></li> <!-- Language Switcher qui -->
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>