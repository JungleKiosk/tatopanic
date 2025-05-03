<script>
import MapGallery from "./MapGallery.vue"
import marker_points from "../../data/markers.json";

export default {
    name: "AboutMain",
    components: {
        MapGallery
    },
    data() {
        return {
            marker_points: marker_points
        };
    }
};
</script>


<template>
    <h1>About</h1>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-8 p-3">
            <h2>{{ $t('about.subtitle') }}</h2>
            <p>{{ $t('about.description') }}</p>
        </div>
        <MapGallery :marker_points="marker_points"></MapGallery>

    </div>

</template>

<style scoped></style>
