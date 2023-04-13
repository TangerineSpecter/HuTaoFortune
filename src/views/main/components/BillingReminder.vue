<template>
  <p class="title" data-color="red">账单提醒</p>
  <el-scrollbar :height="maxHeight">
    <template v-for="index of 1" :key="index">
      <el-row>
        <el-space :size="size" wrap>
          <div class="logo-box-default">
            <svg class="logo" aria-hidden="true">
              <use xlink:href="#icon-gongshangyinhang" />
            </svg>
          </div>
          <el-space direction="vertical" alignment="flex-start">
            <div class="wallet">中信银行</div>
            <div class="remark">出账日4月1日</div>
          </el-space>
          <el-space direction="vertical" alignment="flex-end" class="right">
            <div class="bill-tips">明天需还款</div>
            <div class="remark">到期还款日4月30日</div>
          </el-space>
        </el-space>
      </el-row>
    </template>
  </el-scrollbar>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { utils } from "@/utils/utils.ts";
import { logoSpace } from "@/config.ts";

const size = ref(logoSpace);
//我的资产列表最大尺寸 - 最多展示两行
const maxHeight = "100px";
</script>

<style scoped lang="scss">
.bill-tips {
  color: rgb(228, 104, 98);
  font-weight: 800;
}

</style>