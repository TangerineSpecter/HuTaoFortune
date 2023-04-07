import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/', // 路由路径
        name: 'home', // 路由名称
        component: () => import('../views/Root.vue') // 异步加载
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;