import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            meta: {
                title: 'HelloWorld'
            },
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/Home',
            meta: {
                title: 'Home'
            },
            name: 'Home',
            component: Home
        },
        {
            path: '/About',
            meta: {
                title: 'About'
            },
            name: 'About',
            component: About
        },
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/qrcode',
            meta: {
                title: 'QrCode'
            },
            name: 'QrCode',
            component: (resolve) => require(['../components/QrCode.vue'], resolve)
        },
        {
            path: '/zajindan',
            meta: {
                title: 'zajindan'
            },
            name: 'zajindan',
            component: (resolve) => require(['../components/zajindan.vue'], resolve)
        }
    ]
})
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

export default router;