import { createRouter, createWebHashHistory } from 'vue-router'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    {
        path: '/', // 路由路径
        name: 'home', // 路由名称
        component: () => import('../views/Root.vue') // 异步加载
    }
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    history: createWebHashHistory(),
    routes  // `routes: routes` 的缩写
})

export default router;