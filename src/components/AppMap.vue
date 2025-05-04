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
            url_satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            attribution_satellite: 'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community',
            zoom: 3,
            center: [47.914299, -6.220091],
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
        <div class="row">
            <span>Click on Pointers to visit foto gallery</span>
            <l-map style="height: 800px;" :zoom="zoom" :center="center">
                <l-tile-layer :url="url_satellite" :attribution="attribution_satellite" />

                <template v-for="(coordinate, index) in marker_points" :key="index">
                    <l-marker :lat-lng="[coordinate.lat, coordinate.long]" @click="selectMarker(coordinate)">
                        <l-tooltip>
                            <div>
                                <!-- <p>id: {{ coordinate.id }}</p> -->
                                <p>{{ coordinate.city }}</p>
                                <p>{{ coordinate.lat }}</p>
                                <p>{{ coordinate.long }}</p>
                                <!--                                 <p>{{ coordinate.lat }} , {{ coordinate.long }}</p>
 -->
                            </div>
                        </l-tooltip>
                        <l-popup class="popup">
                            <div>
                                <p class="p-1">City: {{ coordinate.city }}</p>
                                <p class="py-1">Coordinates: {{ coordinate.lat }} , {{ coordinate.long }}</p>

                                <!-- 🔗 Pulsante per aprire la Gallery filtrata per location -->
                                <router-link :to="{ name: 'gallery', query: { location: coordinate.location } }"
                                    class="btn btn-info text-light btn-sm">
                                    Go to {{ coordinate.location }} photos 📷
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