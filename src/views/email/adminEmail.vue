<template>
  <div class="page">
    <div class="title">
      <form action="/">
        <van-search
          shape="round"
          v-model="searchValue"
          placeholder="请输入搜索关键词"
          @search="onSearch"
        />
      </form>
      <div v-show="startTimeValue" class="reset" @click="resetTime">
        重置时间
      </div>
      <div
        v-show="!startTimeValue"
        class="chance flex_col"
        @click="show = true"
      >
        <img class="img" src="../../img/chance.png" alt="" />
        筛选
      </div>
    </div>
    <div class="chose_times">
      <van-calendar
        v-model="show"
        type="range"
        :show-confirm="false"
        allow-same-day
        :min-date="minDate"
        :max-date="maxDate"
        color="#4B98F7"
        @confirm="onConfirm"
      />
    </div>
    <div class="reply_box">
      <van-tabs swipeable animated>
        <!-- 已回复开始 -->
        <van-tab :title="'已回复(' + repliedList.length + ')'">
          <div class="reply">
            <div
              class="replied"
              v-for="(item, index) in repliedList"
              :key="index"
            >
              <div class="headline flex_row">
                <div class="title_w">{{ item.theme }}</div>
                <div class="title_w1" @click="goReply(item.id)">
                  <img class="img" src="../../img/detail.png" alt="" /> 详情
                </div>
              </div>
              <div class="content">{{ item.problemDescription }}</div>
              <div class="fgx"></div>
              <div class="ask_infor flex_row">
                <div class="ask_box flex_row">
                  <div class="ask_head">
                    <img class="img" src="../../img/head-portrait.png" alt="" />
                  </div>
                  <div class="ask_msg">
                    <div class="ask_name">{{ item.userName }}</div>
                    <div class="ask_idcode">{{ item.createBy }}</div>
                  </div>
                </div>
                <div class="ask_time">{{ item.createTime }}</div>
              </div>
              <div class="asw_box">
                <div class="asw">
                  <span class="asw_asw">回复</span>
                  ：{{ item.reply }}
                </div>
                <div class="asw_time">{{ item.updateTime }}</div>
              </div>
            </div>
          </div>
        </van-tab>
        <!-- 未回复开始 -->
        <van-tab :title="'未回复(' + noReplyList.length + ')'">
          <div class="reply">
            <div
              class="replied"
              v-for="(item, index) in noReplyList"
              :key="index + item"
            >
              <div class="headline flex_row">
                <div class="title_w">{{ item.theme }}</div>
                <div class="title_w1" @click="goReply(item.id)">
                  <img class="img" src="../../img/detail.png" alt="" /> 详情
                </div>
              </div>
              <div class="content">{{ item.problemDescription }}</div>
              <div class="fgx"></div>
              <div class="ask_infor flex_row">
                <div class="ask_box flex_row">
                  <div class="ask_head">
                    <img class="img" src="../../img/head-portrait.png" alt="" />
                  </div>
                  <div class="ask_msg">
                    <div class="ask_name">{{ item.userName }}</div>
                    <div class="ask_idcode">{{ item.createBy }}</div>
                  </div>
                </div>
                <div class="ask_time">{{ item.createTime }}</div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: "",
      searchValue: "",
      startTimeValue: "",
      endTimeValue: "",
      minDate: new Date(2021, 10, 1),
      maxDate: new Date(2022, 1, 1), //日历最大值
      show: false,
      repliedList: [],
      noReplyList: [],
    };
  },
  created() {
    let routerParams = this.$route.query.id;
    this.userId = routerParams;
    console.log(this.userId);
    this.getList(this.startTimeValue, this.endTimeValue, this.searchValue);
    this.getList1(this.startTimeValue, this.endTimeValue, this.searchValue);
  },
  mounted() {
    var list = JSON.parse(sessionStorage.getItem("noReplyList")); //本地获取数据
    for (var i in list) {
      if (list[i].replyState == 0) {
        this.noReplyList.push(list[i]);
      } else {
        this.repliedList.push(list[i]);
      }
    }
  },
  methods: {
    onSearch(val) {
      this.$toast(val);
    },
    getList() {
      //获取已读列表
    },
    getList1() {
      //获取未读列表
    },

    goReply(id) {
      //跳转管理员回信
      this.$router.push({
        path: "/email/viewDetail",
        query: {
          id: id,
          userId: this.userId,
        },
      });
    },
    onConfirm(date) {
      //选择时间
      const [start, end] = date;
      //取得开始时间、结束时间
      this.show = false;
      this.startTimeValue =
        start.getFullYear() +
        "-" +
        (start.getMonth() + 1) +
        "-" +
        start.getDate();
      this.endTimeValue =
        end.getFullYear() + "-" + (end.getMonth() + 1) + "-" + end.getDate();
      console.log(this.startTimeValue, this.endTimeValue);
      this.getList(this.startTimeValue, this.endTimeValue, this.searchValue);
      this.getList1(this.startTimeValue, this.endTimeValue, this.searchValue);
    },
    resetTime() {
      //重置时间
      this.startTimeValue = "";
      this.endTimeValue = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  background: #fff;

  .van-cell {
    width: 303px;
    background: #f6f7fb;
    border-radius: 10px;
    padding: 10px 0px 10px 13px;
  }
  .reset {
    font-size: 14px;
    color: #4b98f7;
  }
  .chance {
    font-size: 11px;
    color: #b1b2b4;
    align-items: center;
    .img {
      width: 19px;
      height: 20px;
      margin-bottom: 4px;
    }
  }
}
.reply_box {
  ::v-deep .van-tabs__wrap {
    margin-top: 75px;
    z-index: 999;
    width: 100%;
    position: fixed;
  }
  ::v-deep .van-tabs__content {
    padding-top: 120px;
  }
  ::v-deep .van-field__left-icon {
    margin-right: 10px;
  }
  ::v-deep .van-tabs__line {
    width: 124px;
    background: #323232;
  }
  ::v-deep .van-tab {
    color: #b1b2b4;
    font-weight: 400;
  }
  ::v-deep .van-tab--active {
    color: #333333;
    font-weight: 500;
  }
}
.replied {
  margin: 15px 15px 0;
  padding: 15px 15px;
  background: #ffffff;
  box-shadow: 0px 3px 13px rgba(188, 200, 214, 0.22);
  border-radius: 3px;
}

.headline {
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
  .title_w {
    width: 85%;
    font-size: 16px;
    color: #292929;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .title_w1 {
    font-size: 12px;
    color: #4b98f7;
    .img {
      width: 8px;
      height: 8px;
    }
  }
}
.content {
  margin-top: 8px;
  font-size: 12px;
  color: #3e4d70;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.fgx {
  margin-top: 15px;
  width: 100%;
  height: 0;
  border-bottom: 1px solid rgba(122, 122, 122, 0.13);
}
.ask_infor {
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  .ask_box {
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
  }
  .ask_time {
    font-size: 12px;
    color: #3a3a3a;
  }
}
.asw_box {
  margin-top: 15px;
  background: #f3f4f6;
  border-radius: 9px;
  .asw {
    line-height: 20px;
    padding-top: 15px;
    margin: 0px 15px;
    font-size: 12px;
    color: #3a3a3a;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-all;
    .asw_asw {
      padding: 1px 3px;
      background: #80b3f2;
      font-size: 11px;
      color: #fff;
    }
  }
  .asw_time {
    padding: 8px 15px 10px 0;
    font-size: 11px;
    color: #3a3a3a;
    font-weight: 500;
    text-align: right;
  }
}

.chose_times {
  background: #ffffff;
  ::v-deep .van-calendar__day--start {
    border-radius: 20px 0 0 20px;
  }
  ::v-deep .van-calendar__day--end {
    border-radius: 0 20px 20px 0;
  }
  ::v-deep .van-calendar__day {
    margin: 10px 0;
  }
  ::v-deep .van-calendar__bottom-info {
    // display: none;
  }
  ::v-deep .van-calendar__day--middle {
    color: #ffffff !important;
    background: #4b98f7;
  }
  ::v-deep .van-calendar__day--middle::after {
    background: #4b98f7;
  }
}
</style>