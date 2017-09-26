<template>
    <img class="bg" src="src/assets/coffee.jpg"/>
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
<style lang="stylus">

</style>
