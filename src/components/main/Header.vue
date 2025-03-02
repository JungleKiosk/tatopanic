<script>
import Wave from "../Wave.vue";


export default {
    components: {
        Wave
    },
};
</script>




<template>
    <div id="app">
        <header id="header" class="pt-5">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-4">
                    <div class="title-container">
                        <h1 class="display-1">{{ $t('home.title') }}</h1>
                        <!-- ✅ Usa il valore corretto della computed property -->
                         <!-- <img src="../../assets/img/header/4.png" alt=""> -->
                    </div>
                </div>
            </div>
            <Wave></Wave>
        </header>
    </div>
</template>

<style scoped>



</style>
