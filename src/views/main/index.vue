<template>
  <el-row :gutter="20">
    <!-- 占用 四分之三 -->
    <el-col :span="16">
      <el-row>
        <el-col :span="24" class="card">
          <Overview />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="card">
          <MyAssetsView />
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-row>
            <el-col :span="24" class="card">
              <MonthlyExpensesView />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="card">
              <BillingReminderView />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col :span="24" class="card">
              <MonthlyStatisticsView />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <!-- 占用 四分之一 -->
    <el-col :span="8" class="card" style="height: 95vh">
      <ExpenseCalendarView />
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import MonthlyExpensesView from "@/views/main/components/MonthlyExpenses.vue";
import MonthlyStatisticsView from "@/views/main/components/MonthlyStatistics.vue";
import ExpenseCalendarView from "@/views/main/components/ExpenseCalendar.vue";
import MyAssetsView from "@/views/main/components/MyAssets.vue";
import Overview from "@/views/main/components/Overview.vue";
import BillingReminderView from "@/views/main/components/BillingReminder.vue";
</script>
<style scoped lang="scss">
.el-row {
  margin-bottom: 10px;
}
.el-row:last-child {
  margin-bottom: 0;
}
</style>

