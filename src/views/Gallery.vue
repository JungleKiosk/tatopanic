<script>
import galleryData from "../data/gallery.json";

export default {
    name: "GalleryView",
    data() {
        return {
            searchQuery: "",
            selectedTag: "",
            selectedLocation: "",
            showSidebar: false,
            filteredCollections: [],
            allCollections: galleryData.collections,
        };
    },
    created() {
        const loc = this.$route.query.location;
        if (loc) {
            this.selectedLocation = loc;
        }
        this.applyFilters();
    }
    ,
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
                        !this.selectedLocation ||
                        collection.location.toLowerCase() === this.selectedLocation.toLowerCase()
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
    watch: {
        '$route.query.location': {
            immediate: true,
            handler(loc) {
                if (loc) {
                    this.selectedLocation = loc;
                    this.applyFilters();
                }
            }
        }
    }
};
</script>

<template>
    <div class="container">
        <!-- 📱 Button visibile solo su mobile -->
        <div class="search-toggle-button d-block d-md-none text-end">
            <div class="d-flex flex-column gap-2 align-items-end">
                <button class="btn btn-outline-info" @click="showSidebar = true">
                    Search
                </button>
                <button class="btn btn-outline-secondary" @click="resetFilters">
                    Reset
                </button>
            </div>
        </div>


        <!-- 🔍 Filters bar visibile solo su desktop -->
        <div class="row justify-content-center filters-bar d-none d-md-flex align-items-center text-center mb-4">
            <!-- 🔍 Search + Reset -->
            <div class="col-md-4 d-flex justify-content-center align-items-center mb-2 mb-md-0">
                <input v-model="searchQuery" @input="onSearchInput" type="text" class="form-control me-2"
                    placeholder="Search..." />
                <button class="btn btn-warning" @click="resetFilters">Reset</button>
            </div>

            <!-- 🌍 Location Buttons -->
            <div class="col-md-6">
                <div class="d-flex flex-wrap justify-content-center gap-2">
                    <button v-for="loc in allLocations" :key="loc" class="btn btn-outline-secondary btn-sm"
                        :class="{ active: selectedLocation === loc }" @click="filterByLocation(loc)">
                        {{ loc }}
                    </button>
                </div>
            </div>
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

    <!-- 📱 Sidebar per mobile con backdrop -->
    <div v-if="showSidebar">
        <!-- Sfondo opaco cliccabile -->
        <div class="sidebar-backdrop" @click="showSidebar = false"></div>

        <!-- Sidebar scorrevole da sinistra -->
        <div class="mobile-sidebar">
            <div class="sidebar-content shadow">
                <!-- Header con titolo e chiusura -->
                <div class="d-flex justify-content-between align-items-center p-3 border-bottom">
                    <h5 class="m-0">🔍 Search</h5>
                    <button class="btn-close" @click="showSidebar = false"></button>
                </div>

                <!-- Campo di ricerca -->
                <div class="p-3">
                    <label class="form-label">Search</label>
                    <input v-model="searchQuery" @input="onSearchInput" type="text" class="form-control mb-3"
                        placeholder="Type to search..." />
                </div>

                <!-- Filtro location -->
                <div class="p-3 border-top">
                    <strong>Location:</strong>
                    <div class="d-flex flex-wrap gap-2 mt-2">
                        <button v-for="loc in allLocations" :key="loc" class="btn btn-info text-light btn-sm"
                            :class="{ active: selectedLocation === loc }" @click="filterByLocation(loc)">
                            {{ loc }}
                        </button>
                    </div>
                </div>

                <!-- 🔖 Tag (opzionale, sbloccabile in futuro) -->
                <!--
      <div class="p-3 border-top">
        <strong>Tags:</strong>
        <div class="d-flex flex-wrap gap-2 mt-2">
          <span
            v-for="tag in allTags"
            :key="tag"
            class="badge bg-secondary"
            :class="{ 'bg-dark text-white': selectedTag === tag }"
            @click="filterByTag(tag)"
            style="cursor: pointer"
          >
            {{ tag }}
          </span>
        </div>
      </div>
      -->
            </div>
        </div>
    </div>



</template>

<style scoped>
.search-toggle-button {
    position: sticky;
    top: 60px;
    /* o l'altezza della tua navbar */
    z-index: 1000;
    padding: 0.5rem 1rem;
    text-align: end;
}

.sidebar-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    /* sfondo semi-trasparente */
    z-index: 1049;
}

.mobile-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 85%;
    max-width: 300px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1050;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
    animation: slideInLeft 0.3s ease-out;
}

.sidebar-content {
    height: 100%;
    overflow-y: auto;
    padding-bottom: 2rem;
}

@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

@media (min-width: 768px) {

    .mobile-sidebar,
    .sidebar-backdrop {
        display: none;
    }
}
</style>
