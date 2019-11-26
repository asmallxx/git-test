<template>
  <div>
    <button @click="msg()">点我</button>
    <span>{{father}}</span>
  </div>
</template>
<script>
import father from "@/components/father";
import { resolve } from "q";
export default {
  props: ["father"],
  data() {
    return {
      message: "hi,I am from child component!",
      goodsList: {}
    };
  },
  methods: {
    msg() {
      this.$emit("childmsg", this.message);
      console.log(this.message);
    }
    //测试promise的使用；
    // test() {
    //   const promise = new Promise(function(resolve, reject) {
    //     if (xxx) {
    //       // resolve(value)
    //       // success
    //     } else {
    //       // reject(error)
    //     }
    //   });
    // }
  },
  created() {
    //应用yapi.com添加axios访问接口实践；
    this.$axios
      .get("http://yapi.demo.qunar.com/mock/39498/home/index/user", {
        //这里将axios.get 改为this.$axios.get

        params: { id: "12345" }
      })
      .then(resp => {
        this.goodsList = resp.data;
        console.log(this.goodsList);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
