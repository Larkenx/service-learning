/**
 * Created by Steven Myers on 9/19/17.
 */

import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from './components/WelcomePage.vue'
import Menu from './components/Menu.vue'
import Mission from './components/Mission.vue'

Vue.use(Router);

export default new Router({
    routes: [

        {
            path: '/',
            name: "welcome-page",
            component: WelcomePage
        },
        {
            path: '/menu',
            name: "menu",
            component: Menu
        },
        {
            path: '/mission',
            name: "mission",
            component: Mission
        },
        // {
        //     path: '*',
        //     redirect : '/'
        // },
    ],
    linkActiveClass : "selected-toolbar-item",
    // linkExactActiveClass : "selected-toolbar-item",
})

