<template>
  <div>
    <nav>
      <div v-for="(nav, i) in navs" :key="i" @click="select(i)">{{nav}}</div>
    </nav>
    <div style="margin-top: 100px;">{{status}}</div>
    <div style="margin-top: 20px;">{{list}}</div>
  </div>
</template>

<script>
import { CoursewareListManager } from "./template/listManager";
const requestMap = {
  0: "getOne",
  1: "getTwo",
  2: "getThree"
};

export default {
  data() {
    return {
      navs: ["精品资源", "校内资源", "所有资源", "xx小学资源", "xx中学资源"],
      status: 0,
      listManager: null,
      list: 0,
      teacherId: "",
      typeId: ""
    };
  },

  methods: {
    select(status) {
      this.status = status;
      if (this.listManager[requestMap[this.status]]) {
        this.list = this.listManager[requestMap[this.status]]();
      } else {
        throw new Error(`listManager 未实现 ${requestMap[this.status]}() 方法`);
      }
    }
  },

  created() {
    this.listManager = new CoursewareListManager({
      teacherId: this.teacherId,
      typeId: this.typeId
    });
  }
};
// 单一职责原则
// 最少知识原则
// 开放封闭原则
</script>

<style lang="less" scoped>
</style>
