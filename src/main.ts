import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
//字体
import './styles/font.css';
//引入全局样式和主题
import "./styles/default.css"
import "./styles/default.scss"
//引入组件
import ElementPlus from 'element-plus'
//引入样式
import 'element-plus/dist/index.css'
//国际化声明
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入mock
import './mock/index.ts'
//引入vuex
import store from './store/index.js'
//日历组件
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
//引入阿里账户-图标
import './assets/icon/walletIcon/iconfont.js'
//引入阿里项目-图标
import './assets/icon/itemIcon/iconfont.js'

//全局注册
const app = createApp(App);
//注册ElementPlus和国际化
app.use(ElementPlus, {
  locale: zhCn
});
//注册路由
app.use(router);
//遍历图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//注册vuex
app.use(store);
//日历注册
app.use(VCalendar, {})
//挂载
app.mount('#app')
