<template>
  <div>
    <child @childmsg="childmsg" :father="fathersay"></child>
    <input type="text" v-model="fathersay" />
    <router-link to="/second">去找找它</router-link>
  </div>
</template>
<script>
import child from "@/components/child";
import { status, a } from "@/js/common";
import global from "@/components/template/global";
export default {
  name: "father",
  components: {
    child
  },
  data() {
    return {
      fathersay: "",
      userSite: global.userSite
    };
  },
  //测试git
  //修改第二次
  //修改第三次
  methods: {
    childmsg(e) {
      alert(e);
    }
  },
  //测试全局变量；
  created() {
    console.log(status);
    a();
    console.log(global.token);
    console.log(this.userSite);
  }
};
</script>
<style>
</style>
