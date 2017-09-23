<template>
        <!--  Opening Parallax Section -->
        <!--<v-card flat style="top: -50px;">-->
            <!--<v-card-media src="src/assets/DSC_0040.jpeg" height="1000px"></v-card-media>-->
        <!--</v-card>-->
        <v-carousel hide-controls>
            <v-carousel-item v-for="(pic, i) in carouselPictures" key="i" :src="pic">
            </v-carousel-item>
        </v-carousel>
</template>

<script>
    import VParallax from "../../node_modules/vuetify/src/components/VParallax/VParallax";
    import VCarousel from "../../node_modules/vuetify/src/components/VCarousel/VCarousel";
    import VCarouselItem from "vuetify/src/components/VCarousel/VCarouselItem";
    /* import other components here */
    export default {
        components: {
            VCarouselItem,
            VCarousel,
            VParallax},
        data() {
            return {
                carouselPictures : ["src/assets/DSC_0040.jpeg", "src/assets/DSC_0024.jpg", "src/assets/DSC_0041.jpg"]
            };
        },
        methods: {},
    }

</script>
<style>
</style>