<script>
import { LMap, LTileLayer, LMarker, LTooltip, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
    props: {
        marker_points: {
            type: Array,
            required: true
        }
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LTooltip,
        LPopup
    },
    data() {
        return {
            url_osm: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 5,
            center: [49.411761, 8.716934],
            selectedMarker: null
        };
    },
    methods: {
        selectMarker: function (marker) {
            this.selectedMarker = marker;
        },
        selectImage(image) {
            this.selectedMarker.img_popup = image.img_card;
        },
        closeMarkerCard() {
            this.selectedMarker = null;
        },
    }
}


</script>


<template>
    <div class="container">
        <h1 class="text-center p-5">Hello Vue Leaflet</h1>
        <h4 class="text-center">A tour in Germany</h4>
        <div class="row">

            <l-map style="height: 800px;" :zoom="zoom" :center="center">
                <l-tile-layer :url="url_osm" :attribution="attribution"></l-tile-layer>

                <template v-for="(coordinate, index) in marker_points" :key="index">
                    <l-marker :lat-lng="[coordinate.lat, coordinate.long]" @click="selectMarker(coordinate)">
                        <l-tooltip>
                            <div>
                                <!-- <p>id: {{ coordinate.id }}</p> -->
                                <p>{{ coordinate.city }}</p>
<!--                                 <p>{{ coordinate.lat }} , {{ coordinate.long }}</p>
 -->                            </div>
                        </l-tooltip>
                        <l-popup class="popup">
                            <div>
                                <p class="p-1">City: {{ coordinate.city }}</p>
                                <p class="py-1">Coordinates: {{ coordinate.lat }} , {{ coordinate.long }}</p>

                                <!-- 🔗 Pulsante per aprire la Gallery filtrata per location -->
                                <router-link :to="{ name: 'gallery', query: { location: coordinate.location } }"
                                    class="btn btn-primary btn-sm">
                                    See images from {{ coordinate.location }}
                                </router-link>
                            </div>
                        </l-popup>

                    </l-marker>
                </template>
            </l-map>

        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</template>