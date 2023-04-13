<template>
  <p class="title" data-color="blue">本月支出统计概览</p>
  <div ref="chartContainer" style="height: 40vh; width: 100%"></div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import * as echarts from "echarts";
import { utils } from "@/utils/utils.ts";

const chartContainer = ref();
let chartDom: any;
onMounted(() => {
  chartView();
});

const money = utils.formatMoney(86532.12);

function chartView() {
  chartDom = echarts.init(chartContainer.value);
  var option = {
    grid: {
      top: 10,
      bottom: 20,
    },
    tooltip: {
      trigger: "item",
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
        return "支出：￥" + params.data.value;
      },
    },
    series: [
      {
        name: "支出",
        type: "pie",
        radius: ["50%", "70%"],
        label: {
          show: true,
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 3048, name: "住房" },
          { value: 735, name: "餐饮" },
          { value: 580, name: "旅游" },
          { value: 484, name: "宠物" },
          { value: 300, name: "日用品" },
          { value: 200, name: "电器" },
          { value: 250, name: "交通" },
        ],
      },
    ],
    graphic: [
      {
        type: "text",
        left: "center",
        top: "45%",
        style: {
          text: "本月支出",
          textAlign: "center",
          font: "bold 0.9em Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          fill: "rgb(151,153,166)",
        },
      },
      {
        type: "text",
        left: "center",
        top: "50%",
        style: {
          text: money,
          textAlign: "center",
          font: "bolder 1.3em Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        },
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