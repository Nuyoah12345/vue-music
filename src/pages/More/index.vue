<template>
  <div>
    <musiclist :listdata="moreList" :title="title" type="7" :isMore="true" />
    <div ref="more" id="end">{{ content }}</div>
  </div>
</template>

<script>
const musiclist = () =>
  import(/* webpackChunkName: "MusicList" */ "@/components/MusicList");
import { mapState } from "vuex";
export default {
  name: "more",
  data() {
    return {
      num: 1,
      content: "",
    };
  },
  methods: {
    scrollHandle() {
      //划过去的高度
      const crossHeight = document.documentElement.scrollTop;
      //可视区高度
      const look = window.innerHeight;
      // console.log(document.body.clientWidth);
      const heightAll = document.body.clientHeight;
      if (
        crossHeight + look + 100 > heightAll &&
        crossHeight + look + 100 < 5000
      ) {
        this.num++;
        this.$store.dispatch("listData/getMoreData", {
          type: this.$route.params.type,
          num: this.num,
        });
      } else {
        this.content = "到底了~~~";
        this.$refs.more.className = "end";
      }
    },
  },
  created() {
    this.$store.dispatch("listData/getMoreData", {
      type: this.$route.params.type,
      num: this.num,
    });
    // 绑定滚动事件
    window.addEventListener("scroll", this.scrollHandle);
  },
  beforeDestroy() {
    // 组件销毁后  解绑滚动事件
    window.removeEventListener("scroll", this.scrollHandle);
  },
  components: { musiclist },
  computed: {
    ...mapState("listData", ["moreList"]),
    title() {
      if (this.$route.params.type == 7) {
        return "华语";
      } else if (this.$route.params.type == 96) {
        return "欧美";
      } else {
        return "韩国";
      }
    },
  },
};
</script>

<style scoped>
.end {
  margin: 20px 0;
  text-align: center;
  font-weight: 700;
}
</style>