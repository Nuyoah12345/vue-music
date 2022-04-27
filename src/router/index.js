import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        // 利用二级路由，设置4个组件共用导航头
        {
            path: '/',
            component: () => import(/* webpackChunkName: "nav" */ `@/pages/Layout`),
            children: [
                {
                    path: '/',
                    component: () => import(/* webpackChunkName: "Home" */ `@/pages/Home`)
                },
                {
                    path: '/mine',
                    component: () => import(/* webpackChunkName: "group-other" */ `@/pages/Mine`)
                },
                {
                    path: '/search',
                    component: () => import(/* webpackChunkName: "group-other" */ `@/pages/Search`)
                },
                {
                    path: '/top',
                    component: () => import(/* webpackChunkName: "group-other" */ `@/pages/Top`)
                },
            ]
        },
        // 通过路由传参将type类型传给更多
        {
            path: '/more/:type',
            name: 'more',
            component: () => import(/* webpackChunkName: "More" */ `@/pages/More`)
        },
        {
            path: '/player/:id',
            name: 'player',
            component: () => import(/* webpackChunkName: "Player" */ `@/pages/Player`)
        }

    ],
    // 设置精准匹配（路由激活）时显示的类名
    // linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})