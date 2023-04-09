<template>
  <el-row :gutter="20">
    <el-col :span="5" style="display: flex; flex-wrap: nowrap">
      <el-image src="/fire_logo.png" class="logo" />
      <div class="content">HuTao Wallet</div>
    </el-col>
    <el-col :span="10">
      <el-input
        class="common-header"
        size="large"
        placeholder="请输入账单类别、金额、备注、标签进行搜索"
        :prefix-icon="Search"
      />
    </el-col>
    <el-col :span="6">
      <div class="button-group">
        <el-button size="large">默认账本</el-button>
        <el-button size="large">记账模板</el-button>
        <el-button size="large" type="primary">记一笔</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script>
<style scoped lang="scss">
//logo样式
.logo {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 63px;
  border-right: solid 1px var(--el-menu-border-color);
}

//头部组件公共样式
.common-header {
  margin-top: 10px;
  margin-left: 10px;
}

//按钮组
.button-group {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;
  button {
    margin: 0;
  }
}
//闪光字体
.content {
  margin: auto;
  color: #d1d1d1;
  font-size: 38px;
  font-weight: bolder;
  position: fixed;
  left: 80px;
  white-space: nowrap;
  overflow: hidden;
}

.content::before {
  content: "HuTao Wallet";
  color: rgb(216, 81, 64);
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  white-space: nowrap;
  overflow: hidden;
  // border-right: 5px solid #06ee99;
  animation: animate 5s linear infinite;
  filter: drop-shadow(0 0 10px rgb(216, 81, 64));
}

@keyframes animate {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>