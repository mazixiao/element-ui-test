
<template>
  <div style="border: 1px solid green;padding: 10px;margin:10px">
    <h1>组件通信方式(eventBus1, 兄弟组件通信)</h1>
    <el-button type="success" @click="changeBus2">兄弟组件通过事件控制绿框</el-button>
    <el-button type="success" @click="changeNum">兄弟组件传参改变对方数值</el-button>
  </div>
</template>


<script>
import eventBus from "../assets/js/eventBus.js";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "eventBus1",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
    // setTimeout(function() {
    //   eventBus.$emit("content", '我是兄弟组件1,覆盖了"我是兄弟组件2"这几个字');
    // }, 3000);
    setTimeout(() => {
      eventBus.$emit("content", '3秒后, 我是兄弟组件1,覆盖了"我是兄弟组件2"这几个字');
    }, 3000)
  },
  beforeUpdate() {},
  updated() {},

  methods: {
    changeBus2() {
      eventBus.$emit("show");
    },
    changeNum() {
      eventBus.$emit("addNum", 10);
    }
  }
};
</script>


<style scoped lang="scss">
</style>






