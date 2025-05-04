<script>
import galleryData from "../data/gallery.json";

export default {
    data() {
        return {
            searchQuery: "",
            selectedTag: "",
            filteredCollections: [],
            allCollections: galleryData.collections,
        };
    },
    created() {
        this.applyFilters();
    },
    methods: {
        getPublicImageUrl(path) {
            return `${import.meta.env.BASE_URL}${path}`;
        },
        applyFilters() {
            const q = this.searchQuery.toLowerCase();
            this.filteredCollections = this.allCollections
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
        resetFilters() {
            this.searchQuery = "";
            this.selectedTag = "";
            this.applyFilters();
        }
    }
};
</script>

<template>
    <div class="container">
        <div class="filters-bar">
            <input v-model="searchQuery" @input="onSearchInput" placeholder="Search images..."
                class="form-control me-2" />
            <button class="btn btn-warning mt-2 mt-md-0 ms-md-2" @click="resetFilters">
                Reset
            </button>
        </div>


        <div v-for="collection in filteredCollections" :key="collection.name" class="mb-5">
            <h2>{{ collection.name }} ({{ collection.location }})</h2>
            <div class="row">
                <div v-for="img in collection.images" :key="img.id" class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card h-100">
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

<style scoped></style>
