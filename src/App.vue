<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      noReplyList: [
        //未回复列表
        {
          searchValue: null,
          createBy: "331021199505055054",
          createTime: "2021-11-18 14:35:59",
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          id: 34,
          problemDescription: "(  ˃᷄˶˶̫˶˂᷅  )",
          theme: "关于乱停车现象",
          reply: null,
          userName: "若依",
          phone: "13095767702",
          replyState: 0,
        },
        {
          searchValue: null,
          createBy: "331821199502022025",
          createTime: "2021-11-16 16:52:24",
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          id: 33,
          problemDescription:
            "我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下关于放假的问题我想请教一下",
          theme: "我想请教一下关于放假的问题",
          reply: null,
          userName: "梁大大",
          phone: "13095767702",
          replyState: 0,
        },
        {
          searchValue: null,
          createBy: "331021199502014014",
          createTime: "2021-11-16 16:47:09",
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          id: 32,
          problemDescription:
            "这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的这是个测试问题就是想问问放假怎么放可以的",
          theme: "这是个测试问题就是想问问放假怎么放可以的",
          reply: null,
          userName: "梁大大",
          phone: "13095767702",
          replyState: 0,
        },
        {
          searchValue: null,
          createBy: "330226198612084952",
          createTime: "2021-11-16 11:24:54",
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          id: 31,
          problemDescription: "121212",
          theme: "这是一个很长的标题",
          reply: null,
          userName: "季敏",
          phone: "18668881353",
          replyState: 0,
        },
        {
          searchValue: null,
          createBy: "330424199008162236",
          createTime: "2021-11-16 09:04:19",
          updateBy: "1",
          updateTime: "2021-11-16 09:07:04",
          remark: null,
          params: {},
          id: 30,
          problemDescription: "双十一过去五天了 ，你的快递都收到了吗",
          theme: "测试测试20211116-2",
          reply: "就差俩了 哈哈哈",
          userName: "双双",
          phone: "15957478173",
          replyState: 1,
        },
        {
          searchValue: null,
          createBy: "330424199008162236",
          createTime: "2021-11-16 09:02:28",
          updateBy: "1",
          updateTime: "2021-11-16 09:06:44",
          remark: null,
          params: {},
          id: 29,
          problemDescription: "双十一过去五天了，你的快递都收到了吗",
          theme: "测试测试",
          reply: "没剁手，谢谢关心",
          userName: "双双",
          phone: "15957478173",
          replyState: 1,
        },
        {
          searchValue: null,
          createBy: "130701199310302288",
          createTime: "2021-11-09 16:34:50",
          updateBy: "13",
          updateTime: "2021-11-10 16:20:03",
          remark: null,
          params: {},
          id: 4,
          problemDescription:
            "垃圾分类是实现减量、提质、增效的必然选择，是改善人居环境、促进城市精细化管理、保障可持续发展的重要举措。能不能做到垃圾分类，直接反映一个人，乃至一座城市的生态素养和文明程度。",
          theme: "关于学校到垃圾的问题2.0版本",
          reply: "全校推行",
          userName: "易烊千玺",
          phone: "15857406191",
          replyState: 1,
        },
        {
          searchValue: null,
          createBy: "130701199310302288",
          createTime: "2021-11-09 16:29:32",
          updateBy: "1",
          updateTime: "2021-11-11 10:38:52",
          remark: null,
          params: {},
          id: 3,
          problemDescription:
            "垃圾分类是实现减量、提质、增效的必然选择，是改善人居环境、促进城市精细化管理、保障可持续发展的重要举措。能不能做到垃圾分类，直接反映一个人，乃至一座城市的生态素养和文明程度。",
          theme: "关于学校到垃圾的问题",
          reply: "非常棒",
          userName: "易烊千玺",
          phone: "15857406191",
          replyState: 1,
        },
        {
          searchValue: null,
          createBy: "12333",
          createTime: "2021-11-09 15:44:38",
          updateBy: "1",
          updateTime: "2021-11-11 10:42:23",
          remark: null,
          params: {},
          id: 2,
          problemDescription: "问题描述",
          theme: "主题",
          reply: "这个问题好",
          userName: null,
          phone: null,
          replyState: 1,
        },
        {
          searchValue: null,
          createBy: "411424199805042739",
          createTime: "2021-11-05 09:38:56",
          updateBy: "1",
          updateTime: "2021-11-17 14:16:15",
          remark: null,
          params: {},
          id: 1,
          problemDescription: "问题描述测试",
          theme: null,
          reply: "这样挺好的",
          userName: "史雪宁",
          phone: "13023767915",
          replyState: 1,
        },
      ],
    };
  },
  mounted() {
    for (var i in this.noReplyList) {
      this.noReplyList[i].id = i;
      this.id = i;
    }
    if (JSON.parse(sessionStorage.getItem("noReplyList")) == null) {
      sessionStorage.setItem("noReplyList", JSON.stringify(this.noReplyList));
    }
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
