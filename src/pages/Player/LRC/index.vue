<template>
  <div>
    <p class="lrc">{{ currentLrc }}</p>
  </div>
</template>

<script>
export default {
  name: "lrc",
  data() {
    return {
      lrcObj: {},
      lrcKeyArr: [],
      currentLrc: "",
    };
  },
  props: ["musicLrc", "currentTime", "duration"],
  methods: {
    findMid(low, high) {
      // 占比  插值查找算法优化
      const accounted =
        (this.currentTime - this.lrcKeyArr[low]) /
        (this.lrcKeyArr[high] - this.lrcKeyArr[low]);
      let mid = Math.ceil(low + accounted * (high - low)); // 向上取整，保证大于low
      // 防止mid等于右指针
      mid = mid == high ? mid - 1 : mid;
      return mid;
    },
    findCurLrc() {
      // 改进点：每次需要遍历整个key数组获取歌词，采用二分或其他
      /* this.lrcKeyArr.forEach((item, index) => {
        // console.log(this.currentTime, item);
        if (
          this.currentTime > item &&
          this.currentTime < this.lrcKeyArr[index + 1]
        ) {
          this.currentLrc = this.lrcObj[item];
        }
      }); */

      const low = 0,
        high = this.lrcKeyArr.length - 1;
      let mid = this.findMid(low, high);
      // console.log(mid);
      // 防止找不到死机
      let count = 50;
      while (1) {
        if (high <= low || count == 0) break;
        if (this.currentTime > this.lrcKeyArr[mid]) {
          if (this.currentTime < this.lrcKeyArr[mid + 1]) {
            console.log(mid);
            this.currentLrc = this.lrcObj[this.lrcKeyArr[mid]];
            break;
          } else {
            mid = this.findMid(mid, high);
          }
        } else {
          mid = this.findMid(low, mid);
        }
        count--;
      }
    },
  },
  watch: {
    currentTime() {
      // console.log(111);
      this.findCurLrc();
    },
    // 监听到musicLrc变化了再算，直接在create中会导致第一次对undefined计算
    musicLrc() {
      console.log(this.musicLrc);
      // 对歌词的格式进行拆分处理 原格式如下：
      // [00:00.000] 原词 : Johan Gustafsson\n[00:01.000] 作词 : 王海涛\n
      let lrcObj1 = {};
      let arr = this.musicLrc.lyric.split("\n");
      // console.log(arr);
      const reg = /\[(\d*):(\d*)\.(\d*)\]/;
      for (let i = 0; i < arr.length; i++) {
        const arr1 = reg.exec(arr[i]);
        // console.log(arr1);
        if (arr1 == null) continue;
        const sum = arr1[1] * 60 + Number(arr1[2]) + arr1[3] / 100;
        // sum = Math.floor(sum * 10) == sum * 10 ? sum.toFixed(2) : sum;
        sum = sum.toFixed(2);
        const content = arr1["input"].replace(arr1[0], "");
        lrcObj1[sum] = content;
      }
      // console.log(lrcObj1);
      this.lrcObj = lrcObj1;
      this.lrcKeyArr = Object.keys(lrcObj1);
    },
  },
};
</script>

<style scoped>
.lrc {
  margin-top: 30px;
  font-size: 17px;
  font-weight: 600;
  color: #6983a7;
}
</style>