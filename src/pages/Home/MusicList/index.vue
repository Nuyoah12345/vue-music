<template>
  <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>{{ title }}</h3>
        <router-link :to="'/more/' + type" v-if="!isMore">更多</router-link>
        <router-link to="/" v-if="isMore">返回</router-link>
      </div>
      <div class="list clearfix">
        <router-link
          tag="div"
          class="item"
          v-for="i in listdata"
          :key="i.album.id"
          :to="`/player/${i.album.id}`"
          :name="i.name"
          @click.native="changeCurrent(i)"
        >
          <div class="img-warpper">
            <img :src="i.album.picUrl" :alt="i.name" />
          </div>
          <div class="main">{{ cutStr(i.name) }}</div>
          <div class="gray">{{ cutStr(i.artists[0].name) }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "musicList",
  props: ["listdata", "title", "type", "isMore"],
  methods: {
    cutStr(str) {
      if (str.length > 7) {
        return str.slice(0, 8) + "...";
      }
      return str;
    },
    changeCurrent(data) {
      this.$store.commit("musicDetail/CHANGECURRENT", data);
    },
  },
};
</script>

<style scoped>
.collection-block {
  background-color: #f8f8f8;
  padding: 5px 0;
}

.block-padding {
  padding: 10px 17px;
  background-color: #fff;
}

.title {
  display: flex;
  margin: 14px 0 18px;
}

.title h3 {
  flex: 1 1 0%;
  display: block;
  font-weight: 700;
  font-size: 20px;
}

.list {
  width: 100%;
}

.list .item {
  float: left;
  width: 31%;
  margin-bottom: 10px;
}
.list .item:nth-child(3n + 2) {
  padding: 0 10px;
}

.main {
  margin-top: 4px;
  font-size: 12px;
}

.gray {
  font-size: 12px;
  color: #999;
}

.btn-more {
  font-size: 12px;
  text-align: right;
  color: #333;
}
</style>