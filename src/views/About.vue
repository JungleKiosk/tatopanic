<script>

export default {
    name: "about",

};
</script>

<template>
    <div>
        <header class="header">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8 p-3">
                        <div class="jumbotron p-5 rounded-3">
                            <h1 class="display-1">{{ $t('about.title') }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main class="container mt-5">
            <!-- 1st - content -->
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
            <!-- 1st - content -->
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8 p-3">

                </div>
                <div class="col-12 col-lg-4 p-3">

                </div>
            </div>
        </main>

        <Footer></Footer>
    </div>
</template>

<style></style>
