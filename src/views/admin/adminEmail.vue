<template>
  <div class="page">
    <div class="title">
      <van-field
        @click-left-icon="search"
        v-model="searchValue"
        left-icon="search"
        placeholder="搜索问题关键字"
      />
      <div class="chance flex_col" @click="show = true">
        <img class="img" src="../../img/chance.png" alt="" />
        筛选
      </div>
    </div>
    <van-popup
      closeable
      v-model="show"
      position="bottom"
      close-icon="close"
      :style="{ height: '65%' }"
    >
      <div class="chose_times">
        <div class="time_title">
          <div>选择日期</div>
          <div class="time_detail flex_row">
            <div class="time_begin flex_col">
              <span>{{ startWeek }}</span>
              <span>{{ startTime }}</span>
            </div>
            <div class="fgx"></div>
            <div class="time_finish flex_col">
              <span>{{ endWeek }}</span>
              <span>{{ endTime }}</span>
            </div>
          </div>
        </div>
        <van-calendar
          type="range"
          :show-title="false"
          :show-mark="false"
          :show-subtitle="false"
          :show-confirm="false"
          :poppable="false"
          color="#4B98F7"
          :row-height="40"
          @confirm="onConfirm"
        /></div
    ></van-popup>
    <div class="reply_box">
      <van-tabs swipeable animated>
        <van-tab :title="'已回复(' + repliedList.length + ')'">
          <div class="replied_box">
            <div
              class="replied"
              v-for="(item, index) in repliedList"
              :key="index"
            >
              <div class="headline flex_row">
                <div class="title_w">{{ item.theme }}</div>
                <div class="title_w1" @click="goRdetail(item.id)">
                  <img class="img" src="../../img/detail.png" alt="" /> 详情
                </div>
              </div>
              <div class="content">{{ item.problemDescription }}</div>
              <div class="fgx"></div>
              <div class="ask_infor flex_row">
                <div class="ask_head">
                  <img class="img" src="../../img/head-portrait.png" alt="" />
                </div>
                <div class="ask_msg">
                  <div class="ask_name">{{ item.userName }}</div>
                  <div class="ask_idcode">{{ item.createBy }}</div>
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
        <van-tab :title="'未回复(' + noReplyList.length + ')'">
          <div class="reply">
            <div
              class="replied"
              v-for="(item, index) in noReplyList"
              :key="index + item"
            >
              <div class="headline flex_row">
                <div class="title_w">{{ item.theme }}</div>
                <div class="title_w1" @click="goNRdetail(item.id)">
                  <img class="img" src="../../img/detail.png" alt="" /> 详情
                </div>
              </div>
              <div class="content">{{ item.problemDescription }}</div>
              <div class="fgx"></div>
              <div class="ask_infor flex_row">
                <div class="ask_head">
                  <img class="img" src="../../img/head-portrait.png" alt="" />
                </div>
                <div class="ask_msg">
                  <div class="ask_name">{{ item.userName }}</div>
                  <div class="ask_idcode">{{ item.createBy }}</div>
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
      date: "",
      startWeek: "周~",
      endWeek: "周~",
      startTime: "~月~日",
      endTime: "~月~日",
      show: false,
      repliedList: [],
      noReplyList: [],
    };
  },
  created() {
    let routerParams = this.$route.query.id;
    this.userId = routerParams;
    console.log(this.userId);
    this.getList();
    this.getList1();
  },

  methods: {
    search(searchValue) {
      this.getList(searchValue);
      this.getList1(searchValue);
    },
    getList(sTime, eTime, theme) {
      this.$api.admin
        .getList({
          startTime: sTime,
          endTime: eTime,
          replyState: 1,
          theme: theme,
        })
        .then((res) => {
          if (res.data.code == 0) {
            console.log(res);
            this.repliedList = res.data.data;
          } else {
            console.log(res);
            this.$toast(res.data.msg);
          }
        });
    },
    getList1(sTime, eTime, theme) {
      this.$api.admin
        .getList({
          startTime: sTime,
          endTime: eTime,
          replyState: 0,
          theme: theme,
        })
        .then((res) => {
          if (res.data.code == 0) {
            console.log(res);
            this.noReplyList = res.data.data;
          } else {
            console.log(res);
            this.$toast(res.data.msg);
          }
        });
    },
    goRdetail(id) {
      this.$router.push({
        path: "/viewDetail",
        query: {
          id: id,
        },
      });
    },
    goNRdetail(id) {
      this.$router.push({
        path: "/adminAnswer",
        query: {
          id: id,
          userId: this.userId,
        },
      });
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      //取得开始时间、结束时间
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      var sMonth = start.getMonth() + 1;
      var sDay = start.getDate();
      var eMonth = end.getMonth() + 1;
      var eDay = end.getDate();
      this.startTime = sMonth + "月" + sDay + "日";
      this.endTime = eMonth + "月" + eDay + "日";
      let datelist = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      this.startWeek = datelist[start.getDay()];
      this.endWeek = datelist[end.getDay()];
      this.show = false;
      console.log(this.startTime);
      console.log(this.endWeek);
      var sTime =
        start.getFullYear() +
        "-" +
        (start.getMonth() + 1) +
        "-" +
        start.getDate();
      var eTime =
        end.getFullYear() + "-" + (end.getMonth() + 1) + "-" + end.getDate();
      console.log(sTime, eTime);
      this.getList(sTime, eTime);
      this.getList1(sTime, eTime);
    },
  },
};
</script>
<style lang="scss" scoped>
input[class="van-field__control"]::-webkit-input-placeholder {
  color: #000;
}
.flex_col {
  display: flex;
  flex-direction: column;
}
.flex_row {
  display: flex;
  flex-direction: row;
}
.page {
  height: 100%;
  overflow: auto;
  background-color: #f6f6f6;
  .title {
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 95px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    background: #fff;
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
  .chose_times {
    background: #ffffff;
    .time_title {
      padding: 14px 0;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      .time_detail {
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 16px;
        color: #06121e;
        font-weight: bold;
        justify-content: space-between;
        align-items: center;
        .time_begin {
          margin-left: 15px;
          text-align: left;
        }
        .fgx {
          width: 0;
          height: 68px;
          border: 1px solid #e7e7e7;
          transform: rotate(45deg);
        }
        .time_finish {
          margin-right: 15px;
          text-align: right;
        }
      }
    }
  }
  .reply_box {
    .replied_box {
      margin: 0 15px;
      .replied {
        margin-top: 15px;
        padding: 15px 15px;
        background: #ffffff;
        box-shadow: 0px 3px 13px rgba(188, 200, 214, 0.22);
        border-radius: 3px;
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
            margin-left: 55px;
            margin-top: 16px;
            font-size: 12px;
            color: #3a3a3a;
          }
        }
        .asw_box {
          margin-top: 15px;
          background: #f3f4f6;
          border-radius: 9px;
          .asw {
            padding: 10px 15px 15px 15px;
            font-size: 12px;
            color: #3a3a3a;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
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
      }
    }
    .reply {
      margin: 0px 15px;
      .replied {
        margin-top: 15px;
        padding: 15px 15px;
        background: #ffffff;
        box-shadow: 0px 3px 13px rgba(188, 200, 214, 0.22);
        border-radius: 3px;
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
            margin-left: 55px;
            margin-top: 16px;
            font-size: 12px;
            color: #3a3a3a;
          }
        }
      }
    }
  }
}
::v-deep .van-tabs__wrap {
  margin-top: 95px;
  z-index: 999;
  width: 100%;
  position: fixed;
}
::v-deep .van-tabs__content {
  padding-top: 139px;
}
::v-deep .van-cell {
  width: 303px;
  background: #f6f7fb;
  border-radius: 10px;
  padding: 10px 0px 10px 13px;
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
::v-deep .van-calendar__day--start {
  border-radius: 40px 0 0 40px;
}
::v-deep .van-calendar__day--end {
  border-radius: 0 40px 40px 0;
}
::v-deep .van-calendar__day {
  margin: 10px 0;
}
::v-deep .van-calendar__bottom-info {
  display: none;
}
::v-deep .van-calendar__bottom-info {
  display: none;
}
::v-deep .van-calendar__day--middle {
  color: #ffffff !important;
  background: #4b98f7;
}
::v-deep .van-calendar__day--middle::after {
  background: #4b98f7;
}
::v-deep .van-calendar__body {
  //   height: 300px;
}
</style>