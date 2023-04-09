<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <el-row>
        <el-col :span="24" class="card">
          <p class="title" data-color="purple">概览</p>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-row>
                <el-col
                  :span="24"
                  class="card"
                  style="background-color: rgb(236, 248, 242)"
                >
                  <p class="title" data-color="orange">本月支出</p>
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
                  <p class="title" data-color="blue">净值产</p>
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
                  <p class="title" data-color="blue">剩余可只配预算</p>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="card">
          <p class="title" data-color="sky">我的资产</p>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-row>
            <el-col :span="24" class="card">
              <p class="title" data-color="orange">本月支出趋势</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="card" style="height: 50vh">
              <p class="title" data-color="red">账单提醒</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col :span="24" class="card" style="height: 63vh">
              <p class="title" data-color="blue">本月支出统计概览</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8" class="card" style="height: 89vh">
      <p class="title" data-color="green">收支日历</p>
    </el-col>
  </el-row>
</template>
<style scoped lang="scss">
.el-row {
  margin-bottom: 10px;
}
.el-row:last-child {
  margin-bottom: 0;
}

.title {
  text-align: left;
  display: flex;
  font-weight: bold;
  margin-left: 5px;
  &::before {
    content: "";
    left: 0;
    top: 0;
    bottom: 0;
    width: 7px;
    background-color: var(--purple-color);
    border-radius: 4px;
    margin-right: 6px;
  }
}

*[data-color="purple"]:before {
  background-color: var(--purple-color);
}

*[data-color="green"]:before {
  background-color: var(--green-color);
}

*[data-color="red"]:before {
  background-color: var(--red-color);
}

*[data-color="orange"]:before {
  background-color: var(--orange-color);
}

*[data-color="blue"]:before {
  background-color: var(--blue-color);
}

*[data-color="sky"]:before {
  background-color: var(--sky-color);
}
</style>

