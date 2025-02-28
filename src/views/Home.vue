<script>
import Jumbo from "../components/Jumbo.vue";

export default {
    name: "home",
    components: {
        Jumbo
    }

};
</script>


<template>
    <div>
        <header class="header">
            <Jumbo></Jumbo>

        </header>

        <main class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8 p-3">
                    <h2>{{ $t('home.subtitle') }}</h2>
                    <p>{{ $t('home.description') }}</p>
                </div>
                <div class="col-12 col-lg-4 p-3">
                    <h2>{{ $t('home.subtitle') }}</h2>
                    <p>{{ $t('home.description') }}</p>
                </div>
            </div>
            <!--1st - content -->
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8 p-3">

                </div>
                <div class="col-12 col-lg-4 p-3">

                </div>
            </div>
        </main>


    </div>
</template>

<style scoped></style>
