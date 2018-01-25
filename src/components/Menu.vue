<template>
    <main>
        <section>
            <v-parallax src="public/menu.png" height="800">
                    <v-layout column
                              align-center
                              justify-center
                              class="white--text parallax-text">

                        <p class="display-4 text-xs-center">What's on the menu?</p>
                        <p class="display-1 text-xs-center" style="max-width: 600px;">
                            We've got something for everyone. An iced latte to cool you down in the summer time, or a hot cappucino to keep you warm in the fall.
                        </p>
                        <v-btn class="white--text text-xs-center" style="width: 150px; letter-spacing: 1px" outline>
                            Check out our menu
                        </v-btn>
                    </v-layout>
            </v-parallax>
        </section>
        <torn-border location="top"></torn-border>
        <section id="menu">
            <v-layout
                    column
                    wrap
                    align-center
            >
            <v-flex xs12 sm4 style="padding: 5px;">
                <div>
                    <h3 class="coffee--text" style="border-bottom: solid 1px brown;">Expresso</h3>
                </div>
            </v-flex>
            <v-flex xs12>
                <v-container grid-list-xl>
                    <v-layout row wrap justify-space-around>
                        <v-flex xs12 sm6 md4  v-for="(coffee, index) in coffeeItems" :key="index">
                            <v-card hover>
                                <v-card-title>
                                    <v-container fluid class="text-xs-center display-1 pb-0">{{coffee.name}}
                                        <v-spacer></v-spacer>

                                    </v-container>

                                </v-card-title>
                                <v-card-text>
                                    <v-layout row class="text-xs-center">
                                        <v-flex md4 class="orange--text darken-2 sizes">
                                            12oz
                                        </v-flex>
                                        <v-flex md4 class="red--text sizes">
                                            16oz
                                        </v-flex>
                                        <v-flex md4 class="pink--text sizes">
                                            22oz
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row align-content-space-around class="text-xs-center">
                                        <v-flex md4>
                                            ${{coffee.price}}
                                        </v-flex>
                                        <v-flex md4>
                                            ${{coffee.price + .37}}
                                        </v-flex>
                                        <v-flex md4>
                                            ${{coffee.price + .85}}
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn flat primary>Order Online</v-btn>
                                    <v-btn flat success>Bookmark</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>

            <v-flex xs12 style="padding: 5px;">
                <div>
                    <h3 class="coffee--text" style="border-bottom: solid 1px brown;">Coffee-Less Drinks</h3>
                </div>
            </v-flex>
            <v-flex xs12>
                <v-container grid-list-xl>
                    <v-layout row wrap justify-space-around>
                        <v-flex xs12 sm6 md4 v-for="(item, index) in noncoffeeItems" :key="index">
                            <v-card hover>
                                <v-card-title>
                                    <v-container fluid class="text-xs-center display-1 pb-0">
                                        {{item.name}}
                                    </v-container>
                                </v-card-title>
                                <v-card-text >
                                    <v-layout row class="text-xs-center">
                                        <v-flex md4 class="orange--text darken-2 sizes">
                                            12oz
                                        </v-flex>
                                        <v-flex md4 class="red--text sizes">
                                            16oz
                                        </v-flex>
                                        <v-flex md4 class="pink--text sizes">
                                            22oz
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row align-content-space-around class="text-xs-center">
                                        <v-flex md4>
                                            ${{item.price}}
                                        </v-flex>
                                        <v-flex md4>
                                            ${{item.price + .37}}
                                        </v-flex>
                                        <v-flex md4>
                                            ${{item.price + .85}}
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn flat primary>Order Online</v-btn>
                                    <v-btn flat success>Bookmark</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            </v-layout>
        </section>
    </main>
</template>

<script>
import TornBorder from './TornBorder.vue';
/* import other components here */
export default {
  components: {
    TornBorder
  },
  data() {
    return {
      toggle_exclusive: null,
      coffeeItems: [
        {
          name: 'Americano',
          price: 2.55
        },
        {
          name: 'Latte',
          price: 3.75
        },
        {
          name: 'Macchiato',
          price: 4.2
        },
        {
          name: 'Cafe Miel',
          price: 4.2
        },
        {
          name: 'Cappucino',
          price: 3.75
        }
      ],
      noncoffeeItems: [
        {
          name: 'Hot Chocolate',
          price: 2.55
        },
        {
          name: 'Italian Soda',
          price: 3.75
        },
        {
          name: 'Steamer',
          price: 4.2
        },
        {
          name: 'Chai Latte',
          price: 4.2
        },
        {
          name: 'Iced Tea',
          price: 3.75
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.sizes {
  text-decoration: underline;
}
</style>
