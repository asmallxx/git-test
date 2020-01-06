<template>
  <div>
    <ul class="step-wrapper">
      <li :class="statusClass(i)" v-for="(nav, i) in navs" :key="i">
        <i :class="statusIcon(i)"></i>
        <span class="step-info">{{nav}}</span>
        <div class="split-line" v-show="i !== navs.length - 1"></div>
      </li>
    </ul>
    <button @click="step++">下一步</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: ["识别核查", "准考证核查", "分数核查", "step1核查", "step2核查"],
      step: 0
    };
  },

  methods: {
    statusClass(step) {
      if (this.step === step) {
        return "current";
      }
      if (step < this.step) {
        return "finish";
      }
      if (step > this.step) {
        return "unfinish";
      }
    },

    statusIcon(step) {
      let classList = "status-icon ";
      if (this.step === step) {
        return (classList += "current-icon");
      }
      if (step < this.step) {
        return (classList += "finish-icon");
      }
      if (step > this.step) {
        return (classList += "unfinish-icon");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.current {
  color: green;

  .split-line {
    width: 30px;
    height: 1px;
    margin: 0 10px;
    background-color: green;
  }
}

.unfinish {
  color: gray;

  .split-line {
    width: 30px;
    height: 1px;
    margin: 0 10px;
    background-color: gray;
  }
}

.finish {
  color: blue;

  .split-line {
    width: 30px;
    height: 1px;
    margin: 0 10px;
    background-color: blue;
  }
}

.step-wrapper {
  display: flex;
  justify-content: flex-start;
  counter-reset: num 0;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    counter-increment: num 1;
  }

  .step-info {
    margin-left: 10px;
  }
}

.status-icon {
  position: relative;
  display: inline-block;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  font-style: normal;
}

.finish-icon {
  background: url(../img/complete.png) no-repeat;
}

.current-icon {
  background-color: green;

  &::before {
    content: counter(num);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    line-height: 1;
  }
}

.unfinish-icon {
  background-color: gray;

  &::before {
    content: counter(num);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    line-height: 1;
  }
}
</style>
