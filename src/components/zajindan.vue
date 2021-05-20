<template>
  <div class="zajindan">
    <div class="zajindan-box">
      <img src="../assets/dan.png" class="dan2" alt />
      <img
        src="../assets/chuizi.png"
        class="chuizi"
        :class="{ manchui: cz == 1, kuaichui: cz == 2 }"
        v-show="cz != 3"
      />
      <div class="zazaza" @click="zajindan()"></div>
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
      cz: 1,
    };
  },
  methods: {
    // 四象限
    zajindan: () => {},
  },
  created: function () {},
};
</script>

<style scoped>
.zajindan-box {
  background-image: url("../assets/bg.png");
}
.chuizi {
    position: absolute;
    top: 1rem;
    right: 2.5rem;
    width: 8rem;
    z-index: 10;
    transform: rotate(50deg);
    transform-origin: right bottom;
}
.manchui {
    animation: za 0.8s infinite ease;
}
.kuaichui {
    animation: zaza 0.1s 4 ease;
}
@keyframes za {
    0% {
        transform: rotate(50deg);
    }
    50% {
        transform: rotate(25deg);
    }
    100% {
        transform: rotate(50deg);
    }
}
@keyframes zaza {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(50deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>