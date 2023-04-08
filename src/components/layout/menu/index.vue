<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="true">
    <template v-for="(item, i) in menus" :key="i">
      <router-link :to="{ name: item.key }">
        <el-menu-item :index="item.index">
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </router-link>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { menuList } from "./menuData";

const { menus } = menuList();
</script>