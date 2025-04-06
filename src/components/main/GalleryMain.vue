<script>
import data from '../../data/gallery.json';

export default {
  name: "GalleryMain",
  data() {
    return {
      collections: data
    };
  },
  methods: {
    getImagePath(name) {
      return new URL(`../../assets/img/${name}`, import.meta.url).href;
    }
  }
};
</script>

<template>
  <div class="container py-5">
    <h1 class="text-center">{{ $t('gallery.title') }}</h1>
    <div class="row justify-content-center">
      <div
        v-for="item in collections"
        :key="item.id"
        class="col-12 col-md-4 mb-4"
      >
        <div class="card h-100 shadow-sm">
          <img :src="getImagePath(item.cover)" class="card-img-top" :alt="item.title">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.desc }}</p>
            <router-link :to="`/gallery/${item.id}`" class="btn btn-primary">
              See more
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
