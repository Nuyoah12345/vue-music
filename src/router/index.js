import Vue from "vue";
import VueRouter from "vue-router";

import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import Mine from '@/pages/Mine'
import Search from '@/pages/Search'
import Top from '@/pages/Top'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        // 利用二级路由，设置4个组件共用导航头
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '/',
                    component: Home
                },
                {
                    path: '/mine',
                    component: Mine
                },
                {
                    path: '/search',
                    component: Search
                },
                {
                    path: '/top',
                    component: Top
                },
            ]
        },
        // 通过路由传参将type类型传给更多
        {
            path: '/more/:type',
            name: 'more',
            component: () => import('@/pages/Home/MusicMore')
        },
        {
            path: '/player/:id',
            name: 'player',
            component: () => import('@/pages/Player')
        }

    ],
    // 设置精准匹配（路由激活）时显示的类名
    // linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})