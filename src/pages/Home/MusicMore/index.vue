<template>
  <div>
    <musiclist :listdata="moreList" :title="title" type="7" :isMore="true" />
    <div ref="more">加载更多</div>
  </div>
</template>

<script>
import musiclist from "@/pages/Home/MusicList";
import { mapState } from "vuex";
export default {
  name: "more",
  created() {
    this.$store.dispatch("listData/getMoreData", this.$route.params.type);
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

<style>
</style>