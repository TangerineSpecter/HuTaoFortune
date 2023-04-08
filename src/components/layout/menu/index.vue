<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    :collapse="true"
    style="height: 100%"
  >
    <template v-for="(item, i) in menus" :key="i">
      <router-link :to="{ name: item.key }">
        <el-menu-item
          :index="item.index"
          :class="{ buttom: i === menus.length - 1 }"
        >
          <el-icon :size="50">
            <component :is="item.icon" />
          </el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </router-link>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { menuList } from "./menuData";
import getActiveIndex from "./routerActive";

const { menus } = menuList();
const { activeIndex } = getActiveIndex();
</script>
<style scoped lang="scss">
.buttom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.el-menu-item.is-active:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: rgb(110, 97, 254);
  border-radius: 0 4px 4px 0;
}
</style>