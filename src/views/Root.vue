<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderView />
      </el-header>
      <el-container>
        <el-aside class="aside">
          <MenuView />
        </el-aside>
        <el-main class="main-box">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
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
import HeaderView from "@/components/layout/header/index.vue";
</script>

<style scoped lang="scss">
.common-layout {
  min-height: 100vh;
  min-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: hidden;
  box-shadow: var(--el-box-shadow);
}

.aside {
  left: 0;
  height: 100%;
  width: auto;
  overflow: auto;
  overflow-x: hidden;
  top: 0;
}

.el-container {
  height: 100vh;
  width: 100%;
}

.main-box {
  // height: calc(100% - 60px);
  background: var(--el-bg-color-page);
}
</style>
