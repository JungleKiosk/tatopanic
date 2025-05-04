<script>
import galleryData from "../data/gallery.json";

export default {
    name: "GalleryView",
    data() {
        return {
            searchQuery: "",
            selectedTag: "",
            selectedLocation: "",
            filteredCollections: [],
            allCollections: galleryData.collections,
        };
    },
    created() {
        this.applyFilters();
    },
    computed: {
        allTags() {
            const tagSet = new Set();
            this.allCollections.forEach((col) =>
                col.images.forEach((img) =>
                    img.tags?.forEach((tag) => tagSet.add(tag))
                )
            );
            return Array.from(tagSet);
        },
        allLocations() {
            return Array.from(new Set(this.allCollections.map((c) => c.location)));
        },
    },
    methods: {
        getPublicImageUrl(path) {
            return `${import.meta.env.BASE_URL}${path}`;
        },
        applyFilters() {
            const q = this.searchQuery.toLowerCase();

            this.filteredCollections = this.allCollections
                .filter(
                    (collection) =>
                        !this.selectedLocation || collection.location === this.selectedLocation
                )
                .map((collection) => {
                    const filteredImages = collection.images.filter((img) => {
                        const matchesQuery =
                            img.title?.toLowerCase().includes(q) ||
                            img.tags?.some((t) => t.toLowerCase().includes(q));
                        const matchesTag =
                            !this.selectedTag || img.tags?.includes(this.selectedTag);
                        return matchesQuery && matchesTag;
                    });
                    return { ...collection, images: filteredImages };
                })
                .filter((col) => col.images.length > 0);
        },
        onSearchInput() {
            this.applyFilters();
        },
        filterByTag(tag) {
            this.selectedTag = this.selectedTag === tag ? "" : tag;
            this.applyFilters();
        },
        filterByLocation(location) {
            this.selectedLocation = this.selectedLocation === location ? "" : location;
            this.applyFilters();
        },
        resetFilters() {
            this.searchQuery = "";
            this.selectedTag = "";
            this.selectedLocation = "";
            this.applyFilters();
        },
    },
};
</script>

<template>
    <div class="container py-4">
        <!-- 🔍 Filters sticky bar -->
        <div class="row filters-bar mb-4">
            <!-- 🔍 Search -->
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center mb-3">
                <input v-model="searchQuery" @input="onSearchInput" type="text"
                    class="form-control me-md-2 mb-2 mb-md-0 w-75" placeholder="Search..." />
                <button class="btn btn-warning ms-md-2" @click="resetFilters">Reset</button>
            </div>

            <!-- 🌍 Location -->
            <div class="text-center mb-3">
                <strong>Location:</strong>
                <button v-for="loc in allLocations" :key="loc" class="btn btn-outline-secondary btn-sm mx-1 my-1"
                    :class="{ active: selectedLocation === loc }" @click="filterByLocation(loc)">
                    {{ loc }}
                </button>
            </div>

            <!-- 🏷️ Tags -->
           <!--  <div class="tag-slider d-flex justify-content-center flex-wrap">
                <span v-for="tag in allTags" :key="tag" class="badge bg-info text-dark mx-1 my-1"
                    :class="{ 'bg-dark text-white': selectedTag === tag }" style="cursor: pointer"
                    @click="filterByTag(tag)">
                    {{ tag }}
                </span>
            </div> -->
        </div>

        <!-- 🖼️ Image Cards -->
        <div v-for="collection in filteredCollections" :key="collection.name" class="mb-5">
            <h3>{{ collection.name }} ({{ collection.location }})</h3>
            <div class="row g-4">
                <div v-for="img in collection.images" :key="img.id" class="col-6 col-md-6 col-lg-4">
                    <div class="card shadow-sm">
                        <img :src="getPublicImageUrl(img.src)" :alt="img.title" class="card-img-top" />
                        <!-- <div class="card-body">
                            <h5 class="card-title">{{ img.title }}</h5>
                            <div class="tags">
                                <span v-for="tag in img.tags" :key="tag" @click="filterByTag(tag)" class="tag">
                                    {{ tag }}
                                </span>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>



</style>
