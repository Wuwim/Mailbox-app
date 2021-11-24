<template>
  <div class="page">
    <div class="title">
      <div class="title_w1">欢迎来到</div>
      <div class="title_w2 flex_row">
        <img class="title_img" src="../../img/msg.png" alt="" />
        <span>校长信箱</span>
      </div>
    </div>
    <div class="form_box">
      <van-form error-message-align="right" validate-first @submit="onSubmit">
        <van-field
          size="large"
          left-icon="http://qn.zheskill.xyz/user.png"
          v-model="info.username"
          name="userName"
          placeholder="请输入姓名"
          :rules="[{ required: true }]"
        />
        <van-field
          v-if="this.type === '1'"
          left-icon="http://qn.zheskill.xyz/idcard.png"
          v-model="info.idCard"
          name="idCard"
          placeholder="请输入身份证"
          :rules="[
            { required: true },
            {
              pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
              message: '请填写正确的身份证号',
            },
          ]"
        />
        <van-field
          v-if="!(this.type === '1')"
          left-icon="http://qn.zheskill.xyz/password.png"
          v-model="info.idCard"
          type="password"
          name="idCard"
          placeholder="请输入密码"
          :rules="[{ required: true }]"
        />
        <van-field
          left-icon="http://qn.zheskill.xyz/phone.png"
          v-model="info.phone"
          name="phone"
          placeholder="请输入手机号"
          :rules="[
            { required: true },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: '请填写正确的手机号',
            },
          ]"
        />
        <van-field
          left-icon="http://qn.zheskill.xyz/msgerr.png"
          v-model="info.verificationCode"
          name="verificationCode"
          placeholder="请输入验证码"
          :rules="[{ required: true }]"
        >
          <template #button>
            <van-button
              class="code"
              native-type="button"
              size="small"
              type="primary"
              @click="getCode()"
              >{{ text }}</van-button
            >
          </template>
        </van-field>

        <div class="btn">
          <van-button round block type="info" native-type="submit">
            {{ this.type === "1" ? "给校长写信" : "管理员登录" }}
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
// import { this.$toast } from "vant";
export default {
  data() {
    return {
      type: this.$route.query.type ? this.$route.query.type : "1", //'1':普通员工;'2':管理员
      info: {
        username: "",
        idCard: "",
        phone: "",
        verificationCode: "",
      },
      num: 60, //倒计时时间
      text: "获取验证码", //获取短信文本信息
      status: false, //获取短信状态码
      timer: null, //用于清除定时器
      btnColor: false, //按钮变色
    };
  },
  created() {},
  mounted() {
    console.log("type=", this.type);
  },
  methods: {
    onSubmit() {
      // 判断进入状态  '1':普通员工;'2':管理员
      this.$toast(this.info.username + "欢迎登录");
      console.log("info=", this.info);
      sessionStorage.setItem("info", JSON.stringify(this.info));

      if (this.type === "1") {
        this.$router.push({
          path: "/email/writeEmail",
        });
      } else {
        this.$router.push({
          path: "/email/adminEmail",
        });
      }
    },

    getCode() {
      // 判断是否进行中
      if (this.status) {
        this.$toast("验证码发送中请等待~~");
        return false;
      }
      //获取短信验证
      // 验证是否输入手机号及其正确性
      if (this.info.phone === "") {
        this.$toast("请输入手机号");
        return false;
      } else if (!/^1(3|4|5|7|8)\d{9}$/.test(this.info.phone)) {
        this.$toast("请输入正确的手机号");
        return false;
      }
      this.btnColor = true;
      console.log("获取验证码");
      this.status = true;
      this.loading();
      this.timer = setInterval(() => {
        if (this.num === 0) {
          this.timer && this.clearTimer();
          this.reset();
        } else {
          this.loading();
        }
      }, 1000);
    },
    reset() {
      // 状态重置
      this.num = 60;
      this.status = false;
      this.text = "获取验证码";
    },
    loading() {
      // 状态进行中
      this.num -= 1;
      this.text = this.num + "S";
    },
    clearTimer() {
      // 清除定时器
      clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  height: 100vh;
  background: #fff;
  background-image: url(../../img/bg1.png);
  background-size: 600px 600px;
  background-repeat: no-repeat;
  background-position: -9% 120%;
}
.title {
  padding-top: 80px;
  padding-left: 22px;
  .title_w1 {
    font-size: 18px;
    color: #8b94a9;
  }
  .title_w2 {
    margin-top: 5px;
    font-size: 25px;
    font-weight: bold;
    color: #3e4d70;
    align-items: center;
  }
  .title_img {
    margin-right: 8px;
    width: 29px;
    height: 24px;
  }
}
.form_box {
  padding: 70px 8px 0;
  .btn {
    padding: 120px 20px 0;
  }
}
.van-cell {
  background-color: transparent;
  padding: 14px 20px;
}
.van-cell::after {
  border-bottom: 1px solid #e2e6ef;
}
.van-button__text {
  font-size: 16px;
}
.code {
  background-color: transparent;
  border: none;
  color: #4b98f7;
}
::v-deep .van-field__left-icon {
  display: flex;
  // align-items: center;
  justify-content: center;
  margin-right: 14px;
}
::v-deep .van-field__control {
  font-size: 14px;
  color: #3e4d70;
}
::v-deep .van-icon {
  font-size: 18px;
}
</style>