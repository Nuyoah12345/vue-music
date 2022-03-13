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
export default {
  name: "player",
  created() {
    this.$store.dispatch("musicDetail/getMusicDetail", this.$route.params.id);
  },
  computed: {
    ...mapState("musicDetail", ["musicDetail", "currentMusic"]),
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