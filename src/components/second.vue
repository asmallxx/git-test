<template>
  <div>
    {{secondmsg}}
    <span v-html="html"></span>
    <router-link to="/">back</router-link>
    <div id="main" style="width: 600px;height:400px;"></div>
    <div id="main2" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
var echarts = require("echarts");
export default {
  name: "second",
  data() {
    return {
      secondmsg: "you find me!",
      html: "<span>1</span>"
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));

    // 指定图表的配置项和数据
    var option = {
      //总题目
      title: {
        text: "ECharts 入门示例"
      },
      //
      tooltip: {},
      //颜色指引
      legend: {
        data: ["销量"]
      },
      //种类
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      //
      yAxis: {},
      //相应的颜色索引指定的数字
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // var echarts = require("echarts");

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main2"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
    myChart.setOption({
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          data: [
            { value: 235, name: "视频广告" },
            { value: 274, name: "联盟广告" },
            { value: 310, name: "邮件营销" },
            { value: 335, name: "直接访问" },
            { value: 400, name: "搜索引擎" }
          ]
        }
      ]
    });
  },
  created() {}
};
</script>
<style >
</style>
