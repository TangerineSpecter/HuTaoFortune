import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '@/views/main/index.vue'
import CreditCardView from '@/views/creditCard/index.vue'
import PieChartView from '@/views/pieChart/index.vue'
import SettingView from '@/views/setting/index.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    {
        path: '/', // 路由路径
        name: 'home', // 路由名称
        component: () => import('@/views/Root.vue'), // 异步加载
        children: [
            {
                path: '/main',
                name: 'main',
                component: MainView
            },
            {
                path: '/credit-card',
                name: 'creditCard',
                component: CreditCardView
            },
            {
                path: '/pie-chart',
                name: 'pieChart',
                component: PieChartView
            },
            {
                path: '/setting',
                name: 'setting',
                component: SettingView
            }
        ]
    }
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'active',
    routes  // `routes: routes` 的缩写
})

export default router;