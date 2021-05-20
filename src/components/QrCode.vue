<template>
  <div>
    <h1>qrcode</h1>
    <p>{{ msg }}</p>
    <div v-html="this.antifakeInfo"></div>

    <div class="qr-container">
      <span class="bg-red1"></span>
      <span class="bg-blue1"></span>
      <span class="bg-green1"></span>
      <span class="bg-black1"></span>
      <div id="antifakeInfo"></div>
    </div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      msg: "我是 qrcode 组件",
      url: "http://www.baidu.com",
      antifakeInfo: "",
      fourQuadrantList: [
        {
          Num: "9",
          Color: "黑色",
        },
        {
          Num: "6",
          Color: "红色",
        },
        {
          Num: "4",
          Color: "蓝色",
        },
        {
          Num: "2",
          Color: "绿色",
        },
      ],
    };
  },
  methods: {
    // 四象限
    creatQuadrant() {
      let that = this;
      let html = "";
      let str = "";
      let index = 1;
      this.fourQuadrantList.forEach((v) => {
        let className = "";
        switch (v.Color) {
          case "红色":
            className = "bg-red";
            break;
          case "蓝色":
            className = "bg-blue";
            break;
          case "绿色":
            className = "bg-green";
            break;
          case "黑色":
            className = "bg-black";
            break;
          default:
            className = "bg-black";
            break;
        }
        if (index == 2) {
          html = `<span class="${className}"></span>` + html;
        } else {
          html += `<span class="${className}"></span>`;
        }
        index = index + 1;
      });
      let timestr = new Date().getTime();
      str =
        '<div class="four-quadrant"><div class="qrcode-box">' +
        html +
        '<div class="qrcode" id="qrcode' +
        timestr +
        '"></div></div></div>';

      this.antifakeInfo = str;
      this.$nextTick(() => {
        let qrcode = new QRCode(document.getElementById("qrcode" + timestr), {
          text: that.url,
          width: 200,
          height: 200,
          colorDark: "transparent",
          colorLight: "#fff",
          correctLevel: QRCode.CorrectLevel.H,
        });
      });

      this.$nextTick(() => {
        let qrcode = new QRCode(document.getElementById("antifakeInfo"), {
          text: that.url,
          width: 200,
          height: 200,
          colorDark: "#000",
          colorLight: "transparent",
          correctLevel: QRCode.CorrectLevel.H,
        });
      });
    },
  },
  created: function () {
    this.creatQuadrant();
  },
};
</script>


<style>
.num-red {
  color: #ed0d8e;
}
.num-blue {
  color: #38bbf1;
}
.num-green {
  color: #12a957;
}
.num-black {
  color: #221e20;
}
.four-quadrant {
  padding: 0.9rem;
}
.qrcode-box {
  margin: 0 auto;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
}
.qrcode-box span {
  float: left;
  width: 100px;
  height: 100px;
}
.qrcode {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 200px;
}
.bg-red {
  background-color: #ed0d8e;
}
.bg-blue {
  background-color: #38bbf1;
}
.bg-black {
  background-color: #221e20;
}
.bg-green {
  background-color: #12a957;
}

.bg-red1 {
  background-color: #ed0d8e;
}
.bg-blue1 {
  background-color: #38bbf1;
}
.bg-black1 {
  background-color: #221e20;
}
.bg-green1 {
  background-color: #12a957;
}
</style>
