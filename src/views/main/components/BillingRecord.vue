<template>
  <p class="title" data-color="red">近期账单</p>
  <el-scrollbar :height="maxHeight">
    <template v-for="(item, i) in recordDatas" :key="i">
      <div class="detail-title">
        <span>{{ item.date }}</span>
        <div>
          <span v-if="item.income !== ''">收 {{ item.income }} </span>
          <span v-if="item.pay !== ''"> 支 {{ item.pay }}</span>
        </div>
      </div>
      <!-- <el-space
        direction="vertical"
        alignment="flex-start"
        :size="10"
        class="detail"
      > -->
      <template v-for="(detail, i) in item.details" :key="i">
        <el-row>
          <el-space :size="logoSpace" wrap>
            <div
              :class="{
                'logo-box-red': detail.type === 0,
                'logo-box-green': detail.type === 1,
                'logo-box-purple': detail.type === 2,
                'logo-box-blue': detail.type === 3,
              }"
            >
              <svg class="logo" aria-hidden="true">
                <use :xlink:href="detail.path" />
              </svg>
            </div>
            <el-space
              direction="vertical"
              :size="walletSize"
              alignment="flex-start"
            >
              <div class="wallet">{{ detail.name }}</div>
              <div class="remark">{{ detail.remark }}</div>
            </el-space>
            <div
              :class="{
                'money-red': detail.type === 0,
                'money-green': detail.type === 1,
                'money-purple': detail.type === 2,
                'money-blue': detail.type === 3,
              }"
            >
              {{ detail.money }}
            </div>
          </el-space>
        </el-row>
      </template>
      <!-- </el-space> -->
    </template>
  </el-scrollbar>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { recordList } from "./recordData.ts";
import { logoSpace, walletSpace } from "@/config.ts";
const size = ref(logoSpace);
const walletSize = ref(walletSpace);
//我的资产列表最大尺寸 - 最多展示两行
const maxHeight = "480px";
const { recordDatas } = recordList();
</script>

<style scoped lang="scss">
.detail {
  display: flex;
  justify-content: space-between;
  &-title {
    @extend .detail;
    font-weight: bold;
    font-size: 14px;
    color: var(--grey-color);
    margin-bottom: 10px;
  }
}
</style>