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
      <div class="form_block flex_row">
        <div class="form_icon">
          <img class="img1" src="../../img/user.png" alt="" />
        </div>
        <div class="field_box">
          <input
            class="field"
            v-model="info.uname"
            placeholder="请输入姓名"
            type="text"
          />
        </div>
      </div>
      <div class="form_block flex_row">
        <div class="form_icon">
          <img class="img2" src="../../img/idcard.png" alt="" />
        </div>
        <div class="field_box">
          <input
            class="field"
            v-model="info.idcard"
            placeholder="请输入身份证"
            type="text"
          />
        </div>
      </div>
      <div class="form_block flex_row">
        <div class="form_icon">
          <img class="img3" src="../../img/phone.png" alt="" />
        </div>
        <div class="field_box">
          <input
            class="field"
            v-model="info.phonenum"
            placeholder="请输入手机号"
            type="text"
          />
        </div>
      </div>
      <div class="form_block flex_row">
        <div class="form_icon">
          <img class="img4" src="../../img/msgerr.png" alt="" />
        </div>
        <div class="field_box">
          <input
            v-model="info.code"
            class="field field_code"
            placeholder="请输入验证码"
            type="text"
          />
        </div>
        <!-- <div class="code" @click="getCode()">{{ text }}</div> -->
        <span class="code" @click="getCode()">{{ text }}</span>
      </div>
    </div>

    <div class="submit">
      <span class="w" :class="btnColor ? 'w2' : 'w1'" @click="onSubmit"
        >给校长写信</span
      >
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      info: {
        uname: "呜呜呜",
        idcard: "332525200010101010",
        phonenum: "15990446791",
        code: "",
      },
      num: 10,
      text: "获取验证码",
      status: false,
      timer: null,
      btnColor: false,
    };
  },
  methods: {
    onSubmit() {
      //姓名验证
      if (this.info.uname == "") {
        Toast("请输入姓名");
        return;
      }
      //身份证验证
      if (this.info.idcard == "") {
        Toast("请输入身份证号码");
        return;
      } else if (
        !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.info.idcard)
      ) {
        Toast("请输入正确的身份证号码");
        return;
      }

      //手机号验证
      if (this.info.phonenum == "") {
        Toast("请输入手机号");
        return;
      } else if (!/^1(3|4|5|7|8)\d{9}$/.test(this.info.phonenum)) {
        Toast("请输入正确的手机号");
        return;
      }
      //验证码验证
      if (this.info.code == "") {
        Toast("请输入验证码");
        return;
      }
      this.$api.user
        .userLogin({
          idCard: this.info.idcard,
          phone: this.info.phonenum,
          userName: this.info.uname,
          verificationCode: this.info.code,
        })
        .then((res) => {
          if (res.data.code == 0) {
            console.log(res);
            Toast(res.data.data.userName + res.data.msg);
            this.$router.push({
              path: "/writeEmail",
              query: {
                idCard: this.info.idcard,
              },
            });
          } else {
            console.log(res);
            Toast(res.data.msg);
          }
        });
    },
    getCode() {
      if (this.info.phonenum == "") {
        Toast("请输入手机号");
        return;
      } else if (!/^1(3|4|5|7|8)\d{9}$/.test(this.info.phonenum)) {
        Toast("请输入正确的手机号");
        return;
      }
      this.$api.user
        .sendCode({
          phone: this.info.phonenum,
        })
        .then((res) => {
          console.log(res);

          Toast(res.data.msg);
        });

      this.btnColor = true;
      if (this.status) {
        Toast("请等待");
        return;
      }
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
      this.num = 10;
      // this.loadingStatus = false;
      this.status = false;
      this.text = "获取验证码";
    },
    loading() {
      this.num -= 1;
      this.text = this.num + "S";
    },
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
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
  height: 100vh;
  background: #fff;
  background-image: url(../../img/bg1.png);
  background-size: 600px 600px;
  background-repeat: no-repeat;
  background-position: -9% 120%;
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
    margin-top: 70px;
    margin-left: 22px;
    .form_block {
      width: 331px;
      border-bottom: 1px solid #e2e6ef;
      .form_icon {
        display: flex;
        align-items: center;
        width: 30px;
        justify-content: center;
      }
      .field_box {
        display: flex;
        align-items: center;
        padding: 15px 0;
      }
      .field {
        width: 290px;
        border: none;
        outline: medium;
        font-size: 14px;
        background: none;
        color: #3e4d70;
      }
      .field_code {
        width: 210px;
      }
      .code {
        width: 75px;
        display: flex;
        font-size: 15px;
        color: #4b98f7;
        align-items: center;
        justify-content: flex-end;
      }
      input::-webkit-input-placeholder {
        color: #dadde3;
      }
      .img1 {
        width: 17px;
      }
      .img2 {
        width: 20px;
      }
      .img3 {
        width: 14px;
      }
      .img4 {
        width: 20px;
      }
    }
  }
  .submit {
    margin-top: 116px;
    font-size: 18px;
    text-align: center;
    .w {
      padding: 8px 120px;
      border-radius: 20px;
    }
    .w1 {
      background: #d8dbe2;
      color: #b1b7c5;
    }
    .w2 {
      background: #4b98f7;
      color: #fff;
    }
  }
}
</style>