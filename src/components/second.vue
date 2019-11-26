<template>
  <div>
    {{secondmsg}}
    <span v-html="html"></span>
    <router-link to="/">back</router-link>
  </div>
</template>
<script>
export default {
  name: "second",
  data() {
    return {
      secondmsg: "you find me!",
      html: "<span>1</span>"
    };
  }
};
</script>
<style >
</style>
