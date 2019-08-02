import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EditPage from './views/Edit.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/edit',
            name: 'edit',
            component: EditPage
        },
        {
            path: '/activity',
            //component: resolve => require(['@/view/Activity'], resolve)
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Activity.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})