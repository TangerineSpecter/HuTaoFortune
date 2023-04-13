<template>
  <p class="title" data-color="orange">本月支出趋势</p>
  <div ref="chartContainer" style="height: 20vh; width: 100%"></div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import * as echarts from "echarts";
import { tr } from "date-fns/locale";

const chartContainer = ref();
const color = "rgb(228,104,98)";
let chartDom: any;
onMounted(() => {
  chartView();
});

function chartView() {
  chartDom = echarts.init(chartContainer.value);
  var option = {
    grid: {
      top: 10,
      bottom: 20,
    },
    xAxis: {
      type: "category",
      axisLabel: {
        formatter: function (value: any) {
          return value.slice(8); // 只保留日
        },
      },
      boundaryGap: false,
      //移除x周坐标
      axisLine: {
        show: false,
      },
      //移除刻度
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "0%"],
      splitLine: {
        show: false,
      },
    },
    tooltip: {
      trigger: "axis",
      confine: true,
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "rgba(255,255,255,0)",
      textStyle: {
        color: "#FFF",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        fontSize: 10,
      },
      //自定义展示
      formatter: function (params: any) {
        return "￥" + params[0].value[1];
      },
    },
    series: [
      {
        type: "line",
        smooth: 0.5,
        symbol: "none",
        //标记大小
        symbolSize: 12,
        lineStyle: {
          color: color,
          width: 3,
        },
        data: [
          ["2019-09-1", 560],
          ["2019-09-2", 750],
          ["2019-09-3", 580],
          ["2019-09-4", 250],
          ["2019-09-5", 300],
          ["2019-09-6", 450],
          ["2019-09-7", 300],
          ["2019-09-8", 100],
          ["2019-10-10", 200],
          ["2019-10-11", 1560],
          ["2019-10-12", 750],
          ["2019-10-13", 580],
          ["2019-10-14", 1250],
          ["2019-10-15", 1300],
          ["2019-10-16", 1450],
          ["2019-10-17", 2300],
          ["2019-10-18", 1100],
        ],
      },
    ],
  };
  chartDom.setOption(option);
  // 监听窗口大小变化，重新设置图表宽高
  //   window.addEventListener("resize", handleResize);
}
</script>
<style scoped lang="scss">
</style>