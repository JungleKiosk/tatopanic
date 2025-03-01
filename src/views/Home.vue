<script>
import Jumbo from "../components/Jumbo.vue";
import Wave from "../components/Wave.vue";
import WaveMirrow from "../components/WaveMirrow.vue";
import HomeMain from "../components/main/HomeMain.vue";

export default {
    name: "home",
    components: {
        Jumbo, Wave, HomeMain, WaveMirrow
    }

};
</script>


<template>
    <div>
        <header class="header pt-5">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-4">
                    <h1 class="display-1 text-center">{{ $t('home.title') }}</h1>
                </div>
            </div>
            <Wave></Wave>
        </header>
        <WaveMirrow></WaveMirrow>
        <Jumbo></Jumbo>
        <main class="container mt-5">
            <HomeMain></HomeMain>
        </main>

    </div>
</template>

<style scoped></style>
