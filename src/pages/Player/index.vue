<template>
  <div class="play">
    <div class="header">
      <div class="title">
        <router-link to="/">
          <i class="iconfont icon-home left"></i>
        </router-link>
        <div class="music-info">
          <h4>{{ currentMusic.album.name }}</h4>
          <p class="author">{{ currentMusic.artists[0].name }}</p>
        </div>
        <router-link to="/search">
          <i class="iconfont icon-search right"></i>
        </router-link>
      </div>
    </div>
    <div class="song-info">
      <div class="song-info-img">
        <img :src="currentMusic.album.picUrl" alt />
        <lrc
          :musicLrc="musicLrc ? musicLrc : {}"
          :currentTime="currentTime"
          :duration="duration"
        />
      </div>
      <div class="iconbox">
        <i class="iconfont icon-fabulous left"></i>
        <i class="box"></i>
        <i class="iconfont icon-upload right"></i>
      </div>
    </div>
    <div class="song">
      <audio ref="player" controls :src="musicDetail.url"></audio>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import lrc from "./LRC";
const lrc = () => import(/* webpackChunkName: "LRC" */ "./LRC");
export default {
  name: "player",
  data() {
    return {
      currentTime: 0,
      duration: 0,
    };
  },
  created() {
    this.$store.dispatch("musicDetail/getMusicDetail", this.$route.params.id);
    this.$store.dispatch("musicDetail/getMusicLrc", this.$route.params.id);
  },
  mounted() {
    this.listener();
  },
  computed: {
    ...mapState("musicDetail", ["musicDetail", "currentMusic", "musicLrc"]),
  },
  components: { lrc },
  methods: {
    listener() {
      this.$refs.player.addEventListener("timeupdate", () => {
        this.currentTime = this.$refs.player.currentTime;
        // console.log(this.$refs.player.currentTime);
      });
      this.$refs.player.addEventListener("canplay", () => {
        this.duration = this.$refs.player.duration;
        // console.log(this.$refs.player.duration);
      });
    },
  },
};
</script>

<style scoped>
.header {
  padding: 15px;
}

.music-info {
  flex: 1;
  font-size: 16px;
}

.title {
  display: flex;
  text-align: center;
}

.left {
  font-size: 30px;
}

.ca {
  color: red;
}

.right {
  font-size: 30px;
}

.song-info {
  padding: 15px;
}

.song-info-img {
  text-align: center;
}

.song-info-img img {
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
  margin-top: 10px;
  min-height: 50px;
}

.iconbox {
  display: flex;
  margin-top: 30px;
}

.iconbox .box {
  flex: 1;
}

.song {
  width: 100%;
  text-align: center;
}

.song audio {
  width: 80%;
}

.active {
  color: #222;
}

.author {
  font-size: 12px;
  color: #999;
}
</style>