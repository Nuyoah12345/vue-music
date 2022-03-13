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
        state.moreList = val.slice(0, 30)
    }
}
const actions = {
    async getChinaData(context, val) {
        let res = await getMusicList(7);
        // console.log(res.result);
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
    async getMoreData(context, val,) {
        let res = await getMusicList(val);
        context.commit('GETMOREMUSIC', res.data)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}