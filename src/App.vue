<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      repliedList: [
        //已读列表
        {
          createBy: "411424199805042739",
          createTime: "2021-11-05 09:38:56",
          phone: "13023767915",
          problemDescription: "问题描述测试",
          remark: null,
          theme: "问题主题",
          reply:
            "问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试",
          replyState: 1,
          searchValue: null,
          updateBy: "admin",
          updateTime: "2021-11-05 09:45:20",
          userName: "史雪宁",
        },
        {
          createBy: "411424199805042739",
          createTime: "2021-11-05 09:38:56",
          phone: "13023767915",
          problemDescription: "问题描述测试",
          remark: null,
          theme: "问题主题",
          reply:
            "问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试",
          replyState: 1,
          searchValue: null,
          updateBy: "admin",
          updateTime: "2021-11-05 09:45:20",
          userName: "史雪宁",
        },
        {
          createBy: "411424199805042739",
          createTime: "2021-11-05 09:38:56",
          phone: "13023767915",
          problemDescription: "问题描述测试",
          remark: null,
          theme: "问题主题",
          reply:
            "问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试",
          replyState: 1,
          searchValue: null,
          updateBy: "admin",
          updateTime: "2021-11-05 09:45:20",
          userName: "史雪宁",
        },
      ],
      noReplyList: [
        //未回复列表
        {
          createBy: "411424199805042739",
          createTime: "2021-11-05 09:38:56",
          phone: "13023767915",
          problemDescription: "问题描述测试",
          remark: null,
          theme: "问题主题",
          reply:
            "问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试",
          replyState: 1,
          searchValue: null,
          updateBy: "admin",
          updateTime: "2021-11-05 09:45:20",
          userName: "史雪宁",
        },
        {
          createBy: "411424199805042739",
          createTime: "2021-11-05 09:38:56",
          phone: "13023767915",
          problemDescription: "问题描述测试",
          remark: null,
          theme: "问题主题",
          reply:
            "问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试",
          replyState: 1,
          searchValue: null,
          updateBy: "admin",
          updateTime: "2021-11-05 09:45:20",
          userName: "史雪宁",
        },
        {
          createBy: "411424199805042739",
          createTime: "2021-11-05 09:38:56",
          phone: "13023767915",
          problemDescription: "问题描述测试",
          remark: null,
          theme: "问题主题",
          reply:
            "问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试问题回答测试",
          replyState: 1,
          searchValue: null,
          updateBy: "admin",
          updateTime: "2021-11-05 09:45:20",
          userName: "史雪宁",
        },
      ],
    };
  },
  mounted() {
    sessionStorage.setItem("repliedList", JSON.stringify(this.repliedList));
    sessionStorage.setItem("noReplyList", JSON.stringify(this.noReplyList));
  },
  methods: {},
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #eeeeee;
  font-size: 14px;
  color: #2c3e50;
}
</style>
