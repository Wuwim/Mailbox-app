<template>
  <div class="page">
    <div class="box">
      <div class="box_logo_box">
        <img class="box_logo" src="../../img/email.png" alt="" />
      </div>
      <div class="box_body">{{ info.problemDescription }}</div>
      <van-field
        v-model="info.problemDescription"
        type="textarea"
        placeholder="请输入留言"
        autosize
        readonly
      />
      <div class="ask_infor flex_row">
        <div class="ask_head">
          <img class="img" src="../../img/head-portrait.png" alt="" />
        </div>
        <div class="ask_msg">
          <div class="ask_name">赵小泉</div>
          <div class="ask_idcode">{{ info.createBy }}</div>
        </div>
        <div class="ask_time">{{ info.createTime }}</div>
      </div>
      <div class="ask_box">
        <div class="ask">
          <span class="asw_asw">回复</span>：
          {{ info.reply }}
          <div class="stat_time">{{ info.updateTime }}</div>
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
      info: {},
      textContent:
        "这是一段无特殊意义的站位字符，毫无意义的文本。这是一段无特殊意义的站位字符，毫无意义的文本。这是一段无特殊意义的站位字符，毫无意义的文本。这是一段无特殊意义的站位字符，毫无意义的文本。",
    };
  },
  created() {
    let routerParams = this.$route.query.id;
    console.log(routerParams);
    this.id = routerParams;
    this.getList();
  },
  methods: {
    getList() {
      this.$api.admin
        .mailboxDetails({
          id: this.id,
        })
        .then((res) => {
          if (res.data.code == 0) {
            console.log(res);
            this.info = res.data.data;
          } else {
            console.log(res);
            this.$toast(res.data.msg);
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.flex_col {
  display: flex;
  flex-direction: column;
}
.flex_row {
  display: flex;
  flex-direction: row;
}
.page {
  width: 100%;
  height: 100%;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  .box {
    margin-top: 50px;
    width: 335px;
    height: 900px;
    background: #ffffff;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.16);
    opacity: 1;
    border-radius: 5px;
    .box_logo_box {
      position: relative;
      top: -2%;
      left: 29%;
      width: 145px;
      height: 35px;
      .box_logo {
        width: 145px;
      }
    }
    .box_body {
      margin: 0 15px;
      font-size: 14px;
      background: url("../../img/line-bg.png") repeat;
      background-size: 10px 40px;
      line-height: 40px;
      font-weight: 500;
      color: #0c0c0c;
    }
  }
  .ask_infor {
    margin: 10px 15px;
    align-items: center;
    .ask_head {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      background: linear-gradient(180deg, #4b98f7 0%, #3779cc 100%);
      box-shadow: 0px 3px 5px rgba(0, 100, 251, 0.16);
      border-radius: 50%;
      .img {
        width: 8px;
        height: 12px;
      }
    }
    .ask_msg {
      margin-left: 10px;
      font-size: 11px;
      .ask_name {
        color: #3a3a3a;
      }
      .ask_idcode {
        color: #9c9c9c;
      }
    }
    .ask_time {
      flex: 1;
      font-size: 11px;
      color: #3a3a3a;
      text-align: right;
      margin-top: 12px;
    }
  }
  .ask_box {
    width: 310px;
    margin: 20px auto 0;
    background: #f3f4f6;
    border-radius: 9px;
    font-size: 12px;
    color: #3e4d70;
    line-height: 24px;
    .ask {
      padding: 15px 14px;
      .asw_asw {
        padding: 1px 3px;
        background: #80b3f2;
        font-size: 11px;
        color: #fff;
      }
      .stat_time {
        text-align: right;
        font-size: 11px;
      }
    }
  }
}
input::-webkit-input-placeholder {
  font-size: 14px;
  font-weight: 500;
  color: #0c0c0c;
}
textarea[class="content"]::-webkit-input-placeholder {
  color: #b2b2b2;
}
::v-deep .van-field__control {
  font-size: 12px;
  background: url("../../img/line-bg.png") repeat;
  background-size: 10px 40px;
  line-height: 40px;
  color: #3e4d70;
}
::v-deep .van-cell {
  padding: 0 15px;
}
</style>