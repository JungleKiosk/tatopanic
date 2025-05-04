<script>
import data from '../../../data/markers.json';

export default {
    name: "GomeraDetail",
    computed: {
        marker() {
            const id = parseInt(this.$route.params.id);
            return data.find(m => m.id === id);
        }
    },
    methods: {
        getImagePath(name) {
            return `/${name}`;
        }

    }
};
</script>

<template>
    <div class="container py-4" v-if="marker">
        <h1>{{ marker.title }}</h1>
        <p>{{ marker.desc }}</p>
        <div class="row">
            <div v-for="(img, i) in marker.images" :key="i" class="col-6 col-md-4 mb-3">
                <img :src="getImagePath(img)" class="img-fluid rounded shadow" />
            </div>
        </div>
    </div>
</template>
