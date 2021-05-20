<template>
  <div>
    <router-link to="/">HelloWorld</router-link>
    <router-link to="/about">About</router-link>
    <h1>home</h1>
    <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是home 组件"
    };
  }
};
</script>