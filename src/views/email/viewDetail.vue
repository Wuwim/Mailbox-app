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
          <div class="ask_name">{{ info.userName }}</div>
          <div class="ask_idcode">{{ info.createBy }}</div>
        </div>
        <div class="ask_time">{{ info.createTime }}</div>
      </div>
      <div class="ask_box" v-show="info.replyState == '1'">
        <div class="ask">
          <span class="asw_asw">回复</span>：
          {{ info.reply }}
          <div class="stat_time">{{ info.updateTime }}</div>
        </div>
      </div>
      <div class="asw_pop" v-show="info.replyState == '0'" @click="open">
        <!-- <img clas s="img" src="../../img/admin-asw.png" alt="" /> -->
        <van-field
          v-model="info.reply"
          class="sayWhat"
          @focus="focus"
          @blur="blur"
          rows="1"
          :autosize="autosize"
          type="textarea"
          placeholder="说点什么…"
          ><template #button>
            <van-button v-show="isChecked" size="small" round type="info"
              >提交</van-button
            >
          </template>
        </van-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autosize: {
        maxHeight: 300,
        minHeight: 42,
      },
      id: "",
      isshow: false,
      isChecked: false,
      info: {
        createBy: "411424199805042739",
        createTime: "2021-11-05 09:38:56",
        phone: "13023767915",
        problemDescription: "问题描述测试",
        remark: null,
        theme: "问题主题",
        reply: "",
        replyState: 0,
        searchValue: null,
        updateBy: "admin",
        updateTime: "2021-11-05 09:45:20",
        userName: "史雪宁",
      },
    };
  },
  created() {
    // let routerParams = this.$route.query.id;
    // console.log(routerParams);
    this.id = this.$route.query.id;
    this.getList();
  },
  methods: {
    focus() {
      this.isChecked = true;
      console.log("ischecked:" + this.isChecked);
    },
    blur() {
      this.isChecked = false;
      console.log("ischecked:" + this.isChecked);
    },
    getList() {},
    open() {
      this.isshow = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  margin: 50px 15px 0;
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
}

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

.ask_box {
  width: 310px;
  margin: 20px auto 0;
  background: #f3f4f6;
  border-radius: 9px;
  font-size: 12px;
  color: #3e4d70;
  line-height: 24px;
}

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

.asw_pop {
  position: fixed;
  bottom: 5%;
  width: 90%;

  .sayWhat ::v-deep .van-field__control {
    padding: 10px 10px;
    font-size: 14px;
    background: none;
    line-height: normal;
    background-color: #f6f6f6;
    border: 1px solid #dedede;
    border-radius: 18px;
    color: #949494;
  }

  // .van-cell__value {
  ::v-deep .van-field__body {
    align-items: flex-end;
  }
  // }
}

.asw_pop_checked {
  width: 70%;
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
