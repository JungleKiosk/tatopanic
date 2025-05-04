<script>

export default {
    name: "AboutMain",
    components: {

    },
    data() {
        return {
        };
    }
};
</script>


<template>
    <h1>About</h1>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-8 p-3">
            <h2>{{ $t('about.subtitle') }}</h2>
            <p>{{ $t('about.description') }}</p>
        </div>
    </div>

</template>

<style scoped></style>
