<template>
  <div>
<!--    <IndexAnimation></IndexAnimation>-->
    <Header background="transparent"></Header>
    <div class="common">
      <div class="home">
        {{ info.welcome }}
      </div>
    </div>
  </div>
</template>

<script>
import IndexAnimation from "@/components/IndexAnimation";
import Header from "@/components/Header";

let i = 0;
let timer = null;
export default {
  name: "home",
  components: {
    IndexAnimation,
    Header,
  },
  data() {
    return {
      info: {
        welcome: "",
        welcomeText: "Make life a poem, simple and delicate.",
      },
    };
  },
  mounted() {
    this.typing();
  },
  methods: {
    // 打字机效果
    typing() {
      if (i <= this.info.welcomeText.length) {
        this.info.welcome = this.info.welcomeText.slice(0, i++) + "_";
        timer = setTimeout(this.typing, 100);
      } else {
        this.info.welcome = this.info.welcomeText; //结束打字,移除 _ 光标
        clearTimeout(timer);
      }
    },
  },
};
</script>

<style scoped lang="less">
.home{
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translateY(-50%);
  font-size: 0.48rem;
  color: #fff;
  font-weight: 500;
}
</style>