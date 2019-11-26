<template>
  <div>
    <child @childmsg="childmsg" :father="fathersay"></child>
    <input type="text" v-model="fathersay" />
    <router-link to="/second">去找找它</router-link>
  </div>
</template>
<script>
import child from "@/components/child";
export default {
  name: "father",
  components: {
    child
  },
  data() {
    return {
      fathersay: ""
    };
  },
  methods: {
    childmsg(e) {
      alert(e);
    }
  }
};
</script>
<style>
</style>
