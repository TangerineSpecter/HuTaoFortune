<template>
  <p class="title" data-color="sky">
    我的资产<el-button class="more-btn" :icon="ArrowRightBold" link />
  </p>
  <el-scrollbar :height="maxHeight">
    <template v-for="(item, i) in assetsData" :key="i">
      <el-row>
        <el-space :size="size" wrap>
          <div class="logo-box-default">
            <svg class="logo" aria-hidden="true">
              <use :xlink:href="item.path" />
            </svg>
          </div>
          <el-space direction="vertical" alignment="start" :size="walletSize">
            <div class="wallet">{{ item.name }}</div>
            <div class="remark">{{ item.remark }}</div>
          </el-space>
          <div class="money">{{ item.money }}</div>
        </el-space>
      </el-row>
    </template>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ArrowRightBold } from "@element-plus/icons-vue";
import { ref } from "vue";
import { assetsList } from "./assetsData.ts";
import { logoSpace, walletSpace } from "@/config.ts";
const size = ref(logoSpace);
const walletSize = ref(walletSpace);
//我的资产列表最大尺寸 - 最多展示两行
const maxHeight = "140px";
const { assetsData } = assetsList();
</script>

<style scoped lang="scss">
//更多按钮
.more-btn {
  position: absolute;
  right: 2vh;
  border-radius: 2px;
}
</style>