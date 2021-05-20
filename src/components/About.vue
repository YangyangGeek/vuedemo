<template>
  <div>
    <router-link to="/">HelloWorld</router-link>
    <router-link to="/home">home</router-link>
    <h1>about</h1>
    <p>{{aboutMsg}}</p>
    <div>
      <label for="count">计数器</label>
      <p>{{this.$store.state.count}}</p>
    </div>
    <button v-on:click="handleAdd">点击+1</button>
    <button v-on:click="handleReduce">点击-1</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aboutMsg: "我是about组件"
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    handleAdd() {
      this.$store.commit("increment");
    },
    handleReduce() {
      this.$store.commit("decrease");
    }
  }
};
</script>