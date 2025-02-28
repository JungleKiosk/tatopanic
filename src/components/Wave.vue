<script>
export default {
    name: "wave",

};
</script>

<template>
    <!-- Onda superiore -->
    <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#6EC6FF; stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1E90FF; stop-opacity:1" />
                </linearGradient>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="url(#waveGradient)" opacity="0.7" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="url(#waveGradient)" opacity="0.5" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="url(#waveGradient)" opacity="0.3" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="url(#waveGradient)" opacity="1" />
            </g>
        </svg>
    </div>
</template>

<style scoped></style>
