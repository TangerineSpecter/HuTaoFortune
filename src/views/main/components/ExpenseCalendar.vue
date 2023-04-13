<template>
  <p class="title" data-color="cyan">收支日历</p>
  <VCalendar expanded transparent borderless :color="selectedColor" :attributes="attributes">
    <template #header-prev-button="{ onClick }">
      <button @click="onClick">
        <el-icon><ArrowLeftBold data-color="grey" /></el-icon>
      </button>
    </template>
    <template #header-title>
      <button style="margin: -10px">
        <span class="calendar-title">3月<span class="year">2023</span></span>
      </button>
    </template>
    <template #header-next-button="{ onClick }">
      <button @click="onClick">
        <el-icon><ArrowRightBold data-color="grey" /></el-icon>
      </button>
    </template>
  </VCalendar>
  <BillingRecordView />
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import BillingRecordView from "@/views/main/components/BillingRecord.vue"

const selectedColor = ref("indigo");

const attributes = ref([
  {
    // String
    dot: 'red',
    dates: [
      new Date(2018, 0, 4),
      new Date(2018, 0, 10),
      new Date(2018, 0, 15),
    ],
  },
  {
    // Object
    dot: 'green',
    dates: [
      new Date(2018, 0, 12),
      new Date(2018, 0, 26),
      new Date(2018, 0, 15),
    ],
  },
]);
</script>
<style scoped lang="scss">
.vc-header .vc-title {
  padding: 0 0px;
}
button,
span {
  background-color: white;
}

button:hover {
  border-color: white;
}

.calendar-title {
  font-weight: 800;
  .year {
    margin-left: 5px;
    font-size: 0.8em;
    color: var(--grey-color);
  }
}
</style>