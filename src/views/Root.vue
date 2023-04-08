<template>
  <el-container>
    <el-aside width="80px">
      <MenuView style="border-radius: 2px"></MenuView>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import MenuView from "@/components/layout/menu/index.vue";
</script>

<style scoped lang="scss">
</style>
