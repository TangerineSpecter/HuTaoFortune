import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { menuList } from "./menuData";

interface MenuItem {
    index: string
    name: string
    path: string
}

//处理路由刷新默认选中按钮
export default function getActiveIndex() {
    const route = useRoute()
    const { menus } = menuList();

    const activeIndex = computed(() => {
        const activePath = route.path
        const activeItem = menus.find(item => item.path === activePath)
        return activeItem ? activeItem.index : '1'
    })

    return { activeIndex }
}