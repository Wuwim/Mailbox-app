<template>
  <div class="page">
    <div class="box">
      <img class="box_logo" src="../../img/wemail.png" alt="" />
      <div class="box_body">
        <van-form error-message-align="right" validate-first @submit="onSubmit">
          <van-field
            name="theme"
            v-model="info.theme"
            maxlength="30"
            class="title"
            type="text"
            placeholder="主题："
            :rules="[{ required: true }]"
          />
          <van-field
            name="problemDescription"
            type="textarea"
            v-model="info.problemDescription"
            maxlength="500"
            class="content"
            :autosize="autosize"
            placeholder="请输入详情（限制500字以内）"
            :rules="[{ required: true }]"
          ></van-field>
          <div class="submit">
            <van-button
              class="submit_w"
              round
              block
              type="info"
              native-type="submit"
            >
              确定提交
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
    <!-- 自定义弹框 -->
    <div class="pop" v-show="isshow">
      <div class="qrcode_box flex_col">
        <div class="qrcode_w1 flex_row">
          <div class="line"></div>
          请妥善保存二维码
          <div class="line"></div>
        </div>
        <div class="qrcode_w2">扫码即可查看回复内容</div>
        <img
          class="qrcode_img"
          src="../../img/QRcode.png"
          alt=""
          @click="goViewRply"
        />
        <div class="qrcode_w3" @click="goindex">返回首页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autosize: { maxHeight: 1000, minHeight: 500 },
      isshow: false,
      info: {
        id: 0,
        userName: "",
        createBy: "",
        phone: "",
        theme: "",
        problemDescription: "",
        createTime: "",
        replyState: 0,
        reply: "",
        searchValue: null,
        updateBy: "",
        updateTime: "",
      },
      list: {},
      id: "",
      arr: [],
    };
  },
  created() {
    // this.info.createBy = this.$route.query.idCard;
  },
  mounted() {
    this.list = JSON.parse(sessionStorage.getItem("info")); //本地获取数据
    this.info.userName = this.list.userName;
    this.info.createBy = this.list.idCard;
    this.info.phone = this.list.phone;
  },
  methods: {
    goindex() {
      this.isshow = false;
    },
    onSubmit(values) {
      console.log("submit", values);
      // 提交
      this.isshow = true;
      // 生成当前发送时间
      var myDate = new Date();
      this.info.createTime =
        myDate.getFullYear() +
        "-" +
        (myDate.getMonth() + 1) +
        "-" +
        myDate.getDate() +
        " " +
        myDate.getHours() +
        ":" +
        myDate.getMinutes() +
        ":" +
        myDate.getSeconds();
      console.log("createTiem:" + this.createTime);
      console.log("info", this.info);
      this.arr = JSON.parse(sessionStorage.getItem("noReplyList")); //本地获取数据
      this.arr.push(this.info);
      for (var i in this.arr) {
        this.arr[i].id = i;
        this.id = i;
      }
      sessionStorage.setItem("noReplyList", JSON.stringify(this.arr));
    },
    close() {
      this.isshow = false;
    },
    goViewRply() {
      // 查看回复详情
      this.$router.push({
        path: "/email/viewReply",
        query: {
          id: this.id,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  flex: 1;
  margin: 50px 15px 0;
  // height: 1000px;
  background: #ffffff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
}
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
    font-size: 14px;
    border: none;
    outline: medium;
    line-height: 40px;
    color: #000;
  }
  .content {
    padding: 0;
    background: url("../../img/line-bg.png") repeat;
    background-size: 10px 40px;
    width: 100%;
    font-size: 12px;
    border: none;
    line-height: 40px;
    overflow: hidden;
  }
}

.submit {
  position: fixed;
  margin: 0 30px;
  left: 0%;
  right: 0%;
  bottom: 50px;
  text-align: center;
  .submit_w {
    font-size: 18px;
    color: #ffffff;
    background: #4b98f7;
    border-radius: 20px;
  }
}
.pop {
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
}
.qrcode_box {
  padding: 10px 20px 20px;
  background: #ffffff;
  border-radius: 9px;
  align-items: center;
  justify-content: space-around;
  .qrcode_w1 {
    padding: 10px 0;
    font-size: 16px;
    color: #010101;
    align-items: center;
    .line {
      width: 27px;
      height: 1px;
      background: #707070;
    }
  }
  .qrcode_w2 {
    padding: 0 0 10px;
    font-size: 21px;
    color: #4b98f7;
  }
  .qrcode_img {
    padding: 0 0 10px;
    width: 104px;
    height: 104px;
    border-radius: 0px;
  }
  .qrcode_w3 {
    font-size: 12px;
    color: #d1d1d1;
  }
}
</style>