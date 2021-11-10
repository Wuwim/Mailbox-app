<template>
  <div class="page">
    <div class="box">
      <img class="box_logo" src="../../img/aemail.png" alt="" />
      <div class="box_body">
        <input class="title" type="text" placeholder="回复：" readonly />
      </div>
      <van-field
        v-model="info.problemDescription"
        type="textarea"
        placeholder="请输入留言"
        autosize
        readonly
      />
      <div class="end_time">{{ info.createTime }}</div>
      <div class="ask_box">
        <div class="ask" v-show="info.reply == null">
          <div class="title">该条信件暂时还没有领导回复，请等待~~~</div>
        </div>
        <div class="ask" v-show="!info.reply == null">
          <div class="title">这个接口获取不到</div>
          <div class="content">
            {{ info.reply }}
          </div>
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
      isshow: false,
      info: {},
    };
  },

  created() {
    let routerParams = this.$route.query.id;
    console.log(routerParams);
    this.id = routerParams;
    this.getInfo();
  },
  methods: {
    goindex() {},
    open() {
      this.isshow = true;
    },
    close() {
      this.isshow = false;
    },
    getInfo() {
      this.$api.user
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
    .box_logo {
      width: 146px;
      position: relative;
      top: -20px;
      left: 99px;
      margin: auto;
    }
    .box_body {
      width: 300px;
      margin: auto;
      font-size: 12px;
      color: #000;
      .title {
        padding: 0;
        background: url("../../img/line-bg.png") repeat;
        background-size: 10px 40px;
        width: 100%;
        font-size: 12px;
        border: none;
        outline: medium;
        line-height: 40px;
        color: #000;
      }
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
        font-size: 14px;
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
  background: url("../../img/line-bg.png") repeat;
  background-size: 10px 40px;
  line-height: 40px;
  color: #3e4d70;
}
::v-deep .van-cell {
  padding: 0 17.5px;
}
</style>