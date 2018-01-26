<template>
    <main>
        <section>
            <v-parallax src="public/mission2.jpeg" height="700">
                <v-container fluid class="white--text parallax-text text-xs-center">
                  <v-layout row class="text-xs-center">
                      <v-container>
                        <h1>Tips</h1>
                      </v-container>
                  </v-layout>
                    <v-layout row class="text-xs-center">
                        <v-container fluid class="text-xs-center" >
                            <span style="font-size: 75px; color: lightgreen; padding-right: 50px;">$</span><i-odometer class="iOdemeter" :value="donated"></i-odometer>
                        </v-container>
                    </v-layout>
                    <v-layout row align-center>
                        <v-flex>
                            <h3>As a community, we can make a difference.</h3>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-parallax>
        </section>
        <torn-border location="top"></torn-border>
        <section>
                    <v-container>
                        <v-layout row wrap>

                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center" style="font-style: italic">
                                            The Boys and Girls Club
                                        </div>
                                    </v-card-title>
                                    <v-card-text class="text-xs-center">
                                        <v-container>
                                            GOAL: $500
                                        </v-container>
                                        <v-progress-circular
                                              v-bind:size="125"
                                              v-bind:width="12"
                                              v-bind:rotate="360"
                                              v-bind:value="Math.floor((donated / 500) * 100)"
                                              color="pink"
                                            >{{Math.floor((donated / 500) * 100)}}%
                                        </v-progress-circular>
                                        <v-container class="text-xs-justify">
                                        The Boys and Girls Club changes lives by helping millions of kids and teens by giving them a safe and fun place to hang out after school and during seasons where school is out. Your donations have directly helped us raise money for the Boys and Girls Club!
                                        </v-container>
                                    </v-card-text>
                                </v-card>

                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center"  style="font-style: italic">
                                        <div class="headline text-xs-center">
                                            Habitat for Humanity
                                        </div>
                                    </v-card-title>
                                    <v-card-text class="text-xs-center">
                                        <v-container>
                                            GOAL: $1,000
                                        </v-container>
                                        <v-progress-circular
                                          v-bind:size="125"
                                          v-bind:width="12"
                                          v-bind:rotate="360"
                                          v-bind:value="Math.floor((donated / 1000) * 100)"
                                          color="pink"
                                        >{{Math.floor((donated / 1000) * 100)}}%</v-progress-circular>
                                        <v-container class="text-xs-justify">
                                            For some people, having a roof over your head is a day-to-day blessing. Habitat for Humanity helps those in need by providing affordable housing. They specifically build homes for those who help volunteer with the group and can make very reasonable mortgage payments. One house a time, they have changed family trees. Your tips help people and their families have a roof over their head!
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center"  style="font-style: italic">
                                        <div class="headline text-xs-center">
                                            The Salvation Army
                                        </div>
                                    </v-card-title>
                                    <v-card-text class="text-xs-center">
                                        <v-container>
                                            GOAL: $1,500
                                        </v-container>
                                        <v-progress-circular
                                          v-bind:size="125"
                                          v-bind:width="12"
                                          v-bind:rotate="360"
                                          v-bind:value="Math.floor((donated / 1500) * 100)"
                                          color="pink"
                                        >{{Math.floor((donated / 1500) * 100)}}%</v-progress-circular>
                                        <v-container class="text-xs-justify">
                                            Founded in 1865, the Salvation Army has served hundreds of millions of people in need all over the world. The Salvation Army actively serves veterans, teaches children, offers shelter, provides food, and helps individuals conquery poverty. Your tips go directly to helping a variety of wonderful services provided by the Salvation Army!
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
        </section>
        <torn-border location="bottom"></torn-border>
        <section>
            <v-parallax src="public/cover4.jpeg" height="600">
                <v-layout column
                          align-center
                          justify-center
                          class="white--text parallax-text">
                    <!-- <p class="display-3">MORE THAN A CUP OF A COFFEE</p> -->
                    <!-- <p class="subheading" style="text-align: center; width: 300px;"> -->
                        <!-- <i>
                            We're making a difference all over the world one coffee cup at a time. All tips
                            that we receive are donated to charitable missions all over the world.
                        </i> -->
                    <!-- </p> -->
                </v-layout>
            </v-parallax>
        </section>
    </main>
</template>

<script>
/* import other components here */
import TornBorder from './TornBorder.vue';
import IOdometer from '../../node_modules/vue-odometer/src/iOdometer';
export default {
  components: {
    IOdometer,
    TornBorder
  },
  data() {
    return {
      donated: 0
    };
  },
  methods: {},
  created() {},
  mounted() {
    setInterval(() => {
      this.donated += Math.round(Math.random() * 20 + 2);
    }, 3000);
    setTimeout(() => {
      this.donated += 250;
    });
  }
};
</script>
<style>
.iOdemeter {
  text-align: center;
  font-size: 120px;
}
</style>
