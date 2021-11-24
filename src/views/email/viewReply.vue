<template>
  <div class="page">
    <div class="box">
      <img class="box_logo" src="../../img/aemail.png" alt="" />
      <van-field class="title" v-model="title" type="text" readonly />
      <van-field
        class="content"
        v-model="info.reply"
        type="textarea"
        placeholder="该条信件暂时还没有领导回复，请等待~~~"
        autosize
        readonly
      />
      <div class="end_time">{{ info.updateTime }}</div>
      <div class="ask_box">
        <div class="ask">
          <div class="title">{{ info.theme }}</div>
          <div class="content">
            {{ info.problemDescription }}
          </div>
          <div class="stat_time">{{ info.createTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      isshow: false,
      title: "回复：",
      info: {
        createBy: "411424199805042739",
        createTime: "2021-11-05 09:38:56",
        phone: "13023767915",
        problemDescription: "问题描述测试问题描述测试问题描述测试",
        remark: null,
        theme: "问题主题",
        reply:
          "回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容",
        replyState: 0,
        searchValue: null,
        updateBy: "admin",
        updateTime: "2021-11-05 09:45:20",
        userName: "史雪宁",
      },
    };
  },

  created() {
    let routerParams = this.$route.query.id;
    console.log(routerParams);
    this.id = routerParams;
    this.getInfo();
  },
  methods: {
    getInfo() {
      // 获取信息列表
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  flex: 1;
  margin: 50px 15px 0;
  background: #ffffff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 5px;
  .box_logo {
    width: 146px;
    position: relative;
    top: -20px;
    left: 99px;
    margin: auto;
  }
  .title {
    font-size: 16px;
  }
  .content {
    font-size: 14px;
  }
}
.end_time {
  margin-top: 10px;
  margin-right: 30px;
  text-align: right;
  font-size: 11px;
}
.ask_box {
  width: 310px;
  margin: 20px auto 0;
  background: #f3f4f6;
  border-radius: 9px;
  .ask {
    padding: 15px 14px;
    .title {
      font-size: 16px;
      font-weight: 500;
      color: #292929;
    }
    .content {
      margin-top: 10px;
      font-size: 12px;
      color: #3e4d70;
      line-height: 24px;
    }
    .stat_time {
      margin-top: 10px;
      text-align: right;
      font-size: 11px;
    }
  }
}
.asw_pop {
}
.sayWhat {
  background: none;
}
::v-deep .van-field__control {
  background: url("../../img/line-bg.png") repeat;
  background-size: 10px 40px;
  line-height: 40px;
  color: #3e4d70;
}
::v-deep .van-cell {
  padding: 0 17.5px;
}
::v-deep .van-cell::after {
  display: none;
}
</style>