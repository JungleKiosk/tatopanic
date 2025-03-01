<script>
import img1 from "../assets/img/jumbo/1.jpg";
import img2 from "../assets/img/jumbo/2.jpg";
import img3 from "../assets/img/jumbo/3.jpg";

export default {
    name: "Jumbo",
    data() {
        return {
            currentSlide: 0,
            images: [img1, img2, img3]
        };
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.images.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
        },
        autoSlide() {
            setInterval(this.nextSlide, 3000); // Cambia immagine ogni 3 secondi
        }
    },
    mounted() {
        this.autoSlide(); // Avvia il carosello automatico
    }
};
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-4">
                <h1>{{ $t('jumbo.title') }}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="col-12 col-lg-4">
                <div class="carousel">
                    <!-- Immagini -->
                    <div class="carousel-inner">
                        <img :src="images[currentSlide]" class="carousel-image" alt="Immagine" />
                    </div>

                    <!-- Pulsanti -->
                    <button class="prev" @click="prevSlide">&#10094;</button>
                    <button class="next" @click="nextSlide">&#10095;</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.carousel {
    position: relative;
    width: 100%;
    max-width: 400px; /* Larghezza massima del carosello */
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
}

.carousel-inner {
    display: flex;
    justify-content: center;
}


/* Pulsanti */
/* .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 24px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
} */
</style>
