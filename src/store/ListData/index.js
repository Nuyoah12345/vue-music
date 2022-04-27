import { getMusicList } from '@/api/index.js'

const state = {
    // 华语  欧美  韩国
    chinaData: [],
    forignData: [],
    KoreaData: [],
    moreList: []
}
const mutations = {
    GETCHINADATA(state, val) {
        state.chinaData = val.slice(0, 6)
    },
    GETFORIGNDATA(state, val) {
        state.forignData = val.slice(0, 6)
    },
    GETKOREADATA(state, val) {
        state.KoreaData = val.slice(0, 6)
    },
    GETMOREMUSIC(state, val) {
        // console.log(val);
        state.moreList = val.data.slice(0, 20 * val.num)
    }
}
const actions = {
    async getChinaData(context, val) {
        let res = await getMusicList(7);
        // console.log(res);
        context.commit('GETCHINADATA', res.data)
    },
    async getForignData(context, val) {
        let res = await getMusicList(96);
        // console.log(res.result);
        context.commit('GETFORIGNDATA', res.data)
    },
    async getKoreaData(context, val) {
        let res = await getMusicList(16);
        // console.log(res.result);
        context.commit('GETKOREADATA', res.data)
    },
    // 判断是否是第一次
    async getMoreData(context, val) {
        // console.log(val);
        let res = await getMusicList(val.type);
        context.commit('GETMOREMUSIC', { data: res.data, num: val.num })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}