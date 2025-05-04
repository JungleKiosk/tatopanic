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
        <div class="row filters-bar">
            <div class="col-12 col-md-4 col-lg-3">
                <!-- 🔍 Search bar -->
                <div class="mb-3 align-items-md-center d-flex">
                    <input v-model="searchQuery" @input="onSearchInput" type="text"
                        class="form-control me-md-2 mb-2 mb-md-0" placeholder="Search..." />
                        <button class="btn btn-warning mx-2" @click="resetFilters">Reset</button>
                </div>
            </div>
            <!-- 🌍 Location filter -->
            <div class="mb-4">
                <strong>Location:</strong>
                <button v-for="loc in allLocations" :key="loc" class="btn btn-outline-secondary btn-sm me-2"
                    :class="{ active: selectedLocation === loc }" @click="filterByLocation(loc)">
                    {{ loc }}
                </button>
            </div>

            <!-- 🏷️ Tag slider -->
            <div class="tag-slider d-flex overflow-auto mb-3">
                <span v-for="tag in allTags" :key="tag" class="badge bg-info text-dark me-2"
                    :class="{ 'bg-dark text-white': selectedTag === tag }" style="cursor: pointer"
                    @click="filterByTag(tag)">
                    {{ tag }}
                </span>
            </div>
        </div>




        <!-- 🖼️ Cards -->
        <div v-for="collection in filteredCollections" :key="collection.name" class="mb-5">
            <h3>{{ collection.name }} ({{ collection.location }})</h3>
            <div class="row g-4">
                <div v-for="img in collection.images" :key="img.id" class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm">
                        <img :src="getPublicImageUrl(img.src)" :alt="img.title" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">{{ img.title }}</h5>
                            <div class="tags">
                                <span v-for="tag in img.tags" :key="tag" @click="filterByTag(tag)" class="tag">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tag-slider::-webkit-scrollbar {
    height: 6px;
}

.tag-slider::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
}

.tag {
    display: inline-block;
    background: #e0f7fa;
    color: #006064;
    padding: 0.2rem 0.5rem;
    margin-right: 0.3rem;
    cursor: pointer;
    border-radius: 4px;
}

.card-img-top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.card {
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>
