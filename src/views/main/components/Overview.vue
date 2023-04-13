<template>
  <p class="title" data-color="purple">概览</p>
  <el-row :gutter="10">
    <el-col :span="8">
      <el-row>
        <el-col
          :span="24"
          class="card"
          style="background-color: rgb(236, 248, 242)"
        >
          <el-space direction="vertical" alignment="flex-start" :fill="true">
            <p class="title" data-color="green">本月支出</p>
            <p class="panel-money">{{ money }}</p>
            <p class="panel-statis">
              <el-icon class="static-icon-green"><CaretBottom /></el-icon>
              <span class="statis-number-green"> 13.8% </span>较上月
            </p>
          </el-space>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8">
      <el-row>
        <el-col
          :span="24"
          class="card"
          style="background-color: rgb(234, 248, 254)"
        >
          <el-space direction="vertical" alignment="flex-start" :fill="true">
            <p class="title" data-color="blue">净值产</p>
            <p class="panel-money">{{ money }}</p>
            <p class="panel-statis">
              <el-icon class="static-icon-red"><CaretTop /></el-icon>
              <span class="statis-number-red"> 25.9% </span>较上月
            </p>
          </el-space>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8">
      <el-row>
        <el-col
          :span="24"
          class="card"
          style="background-color: rgb(242, 238, 255)"
        >
          <el-space direction="vertical" alignment="flex-start" :fill="true">
            <p class="title" data-color="purple">剩余可只配预算</p>
            <p class="panel-money">
              {{ money }}
            </p>
            <el-progress
              class="budget-progress"
              :text-inside="true"
              :stroke-width="26"
              :percentage="70"
              :color="customColor"
            />
          </el-space>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { utils } from "@/utils/utils.ts";
import { CaretBottom, CaretTop } from "@element-plus/icons-vue";

const money = utils.formatMoney(14950.88);
const customColor = "rgb(177,168,255)";
const redColor = "rgb(252, 81, 68)";
const greenColor = "rgb(114, 180, 90)";
</script>
<style scoped lang="scss">
.panel-statis {
  background-color: white;
  font-weight: 700;
  display: flex;
  transform: translateY(70%);
}
.panel-money {
  position: absolute;
  left: 15px;
  top: 20px;
  font-weight: 800;
  font-size: 2em;
}

//进度条样式
.static-icon {
  margin-right: 3px;
  &-red {
    @extend .static-icon;
    margin-top: 4px;
    color: v-bind(redColor);
  }
  &-green {
    @extend .static-icon;
    margin-top: 4px;
    color: v-bind(greenColor);
  }
}

.statis-number {
  margin-right: 10px;
  &-red {
    @extend .static-icon;
    color: v-bind(redColor);
  }
  &-green {
    @extend .static-icon;
    color: v-bind(greenColor);
  }
}
.budget-progress {
  padding-top: 30px;
  ::v-deep .el-progress-bar__outer {
    background-color: white;
  }
}

.el-space {
  width: 100%;
  height: 100%;
}
</style>