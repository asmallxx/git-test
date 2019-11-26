<template>
  <section class="common-header">
    <div class="topic">
      <span class="current-topic">{{topic}}</span>
    </div>
    <span class="back-btn" @click="close">返回</span>
  </section>
</template>

<script>
export default {
  props: {
    topic: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showTopics: false,
      routers: [
        {
          path: "/object-classify/",
          label: "分类题"
        },
        {
          path: "/blank-fill/",
          label: "选词填空"
        },
        {
          path: "/free-combine/",
          label: "元素组合"
        }
      ],
      query: ""
    };
  },
  methods: {
    close() {
      window.close();
    },
    blurSelect() {
      document.addEventListener("click", () => {
        this.showTopics = false;
      });
    },

    setQueryString() {
      const { fullPath, path } = this.$route;
      this.query = fullPath.replace(path, "");
    }
  },
  created() {
    this.blurSelect();
    this.setQueryString();
  }
};
</script>

<style lang="less" >
.common-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  background: #009cff;
  color: #fff;

  .topic {
    width: 250px;
    height: 30px;
    margin-left: 39px;

    .current-topic {
      display: inline-block;
      font: 28px/30px "Microsoft YaHei";
    }

    .topic-select {
      position: relative;
      display: inline-block;
      width: 95px;
      height: 20px;
      margin: 9px 0 0 11px;
      font: 18px/20px "Microsoft YaHei";
      user-select: none;
      cursor: pointer;
    }

    .topic-list {
      position: absolute;
      z-index: 1;
      top: 30px;
      left: -14px;
      box-sizing: border-box;
      width: 114px;
      min-height: 34px;
      background: #fff;
      border: solid 2px #e8e8e8;
      color: #262626;
      overflow: hidden;
      list-style: none;
    }

    .topic-list li {
      height: 34px;
      text-align: center;
      line-height: 34px;
    }

    .topic-list li:hover {
      background: #13b5b1;
    }

    .topic-list a {
      color: #262626;
      text-decoration: none;
    }
  }

  .back-btn {
    display: block;
    width: 80px;
    height: 30px;
    margin-right: 33px;
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 3px;
    text-align: center;
    font: 16px/30px "Microsoft Yahei";
    color: #009cff;
    user-select: none;
  }

  .back-btn:active {
    background: #e0e0e0;
  }
}
</style>
