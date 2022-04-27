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
          :to="`/player/${i.id}`"
          :name="i.name"
          @click.native="changeCurrent(i)"
        >
          <div class="img-warpper">
            <img
              src="./imgs/loading.jpg"
              :alt="i.name"
              :data-src="i.album.picUrl"
            />
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
  watch: {
    listdata() {
      console.log("数据来了");

      function imgLazy() {
        //划过去的高度
        const crossHeight = document.documentElement.scrollTop;
        //可视区高度
        const look = window.innerHeight;
        //获取位置
        const imglist = document.querySelectorAll("img");
        imglist.forEach((item, index) => {
          // 小优化
          if (
            item.getAttribute("src") !==
            "data:image/jpeg;base64,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"
          )
            return;
          // console.log(item.offsetTop,crossHeight);
          //逻辑 当图片的 offsettop < html.scrolltop + window.innerHeight
          const bol = item.offsetTop < crossHeight + look;
          if (bol) {
            console.log("好了");
            //图片将要在 client可视区展示   要发请求加载图片
            item.src = item.getAttribute("data-src");
          }
        });
      }
      //添加事件
      window.onscroll = imgLazy;
      // 等数据渲染完了  自己执行一次
      this.$nextTick(function () {
        // console.log(111);
        imgLazy();
      });
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