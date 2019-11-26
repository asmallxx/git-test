<template>
  <div class="body">
    <div ref="mainPage" class="main-page">
      <!-- 头部公共组件 -->
      <commonHeader topic="选词填空" />
      <!-- 中间部分样例列表展示 -->
      <div class="main">
        <div class="container">
          <div class="card-container" v-for="(item, index) in 7" :key="index">
            <img />
            <div class="discribe">
              <div class="content">
                <!-- <img/> -->
                <p class="title">{{ item.name }}</p>
              </div>
              <div class="bt"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 尾部分页 -->
      <div class="footer"></div>
    </div>
  </div>
</template>
<script>
import commonHeader from "@/components/template/header";
export default {
  name: "homeIndex",
  components: { commonHeader }
};
</script>
<style lang="less" scoped>
.body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  .main-page {
    width: 100%;
    height: 100%;
    background-color: rgb(182, 182, 152);
    .main {
      width: 100%;
      height: 80%;
      background-color: rgb(226, 195, 108);

      .container {
        margin: 0 auto;
        width: 90%;
        height: 100%;
        background-color: bisque;
        .card-container {
          width: 23.75rem;
          height: 20rem;
          // font-family: "Roboto", "Helvetica", "Arial", sans-serif;
          background-color: rgb(231, 152, 128);

          .discribe {
            background-color: rgb(180, 116, 151);

            .content {
              background-color: rgb(86, 110, 79);

              .title {
                background-color: rgb(151, 151, 56);
              }
            }
            .bt {
              background-color: rgb(121, 58, 82);
            }
          }
        }
      }
    }
    .footer {
      height: 20%;
    }
  }
}
</style>
