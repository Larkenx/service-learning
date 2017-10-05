<template>
    <main>
        <section>
            <v-parallax src="public/mission.jpg" height="600">
                <v-layout column
                          align-center
                          justify-center
                          class="white--text">
                    <p class="display-3">ONE CUP AT A TIME</p>
                    <p class="subheading" style="text-align: center; width: 300px;">
                        <i>
                            We're making a difference all over the world one coffee cup at a time. See our current and previous
                            missions below.
                        </i>
                    </p>
                    <v-btn class="white--text" style="width: 150px; letter-spacing: 1px" outline to="/donate" exact>
                        Learn more
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>
    </main>
</template>

<script>
    /* import other components here */
    export default {
        data() {
            return {};
        },
        methods: {},
    }

</script>
<style>
</style>
