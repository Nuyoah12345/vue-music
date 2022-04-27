<template>
  <div>
    <musiclist :listdata="chinaData" title="华语" type="7" :isMore="false" />
    <musiclist :listdata="forignData" title="欧美" type="96" :isMore="false" />
    <musiclist :listdata="KoreaData" title="韩国" type="16" :isMore="false" />
  </div>
</template>

<script>
import { mapState } from "vuex";
// import musiclist from "@/components/MusicList";
const musiclist = () =>
  import(/* webpackChunkName: "MusicList" */ "@/components/MusicList");
export default {
  name: "home",
  components: {
    musiclist,
  },
  created() {
    this.$store.dispatch("listData/getKoreaData");
    this.$store.dispatch("listData/getChinaData");
    this.$store.dispatch("listData/getForignData");
  },
  computed: {
    ...mapState("listData", ["chinaData", "forignData", "KoreaData"]),
  },
};
</script>

<style>
</style>