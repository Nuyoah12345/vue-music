import { getMusicUrl } from '@/api/index.js'

const state = {
    // url
    musicDetail: {},
    // 当前播放的音乐信息
    currentMusic: {}
}
const mutations = {
    GETMUSICDETAIL(state, val) {
        state.musicDetail = val
    },
    CHANGECURRENT(state, val) {
        state.currentMusic = val
    }
}
const actions = {
    async getMusicDetail(context, id) {
        let res = await getMusicUrl(id)
        context.commit('GETMUSICDETAIL', res.data[0])
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}