<script>
import galleryData from '../data/gallery.json';

export default {
  name: "GalleryDetail",
  computed: {
    gallery() {
      const id = parseInt(this.$route.params.id);
      return galleryData.find(g => g.id === id);
    }
  },
  methods: {
    getImagePath(name) {
      return new URL(`../../assets/img/${name}`, import.meta.url).href;
    }
  }
};
</script>

<template>
  <div class="container py-4">
    <h1>{{ gallery.title }}</h1>
    <p>{{ gallery.desc }}</p>

    <div class="row">
      <div
        v-for="(img, i) in gallery.images"
        :key="i"
        class="col-6 col-md-4 mb-3"
      >
        <img :src="getImagePath(img)" class="img-fluid rounded shadow" />
      </div>
    </div>
  </div>
</template>
