import { getMusicUrl } from '@/api/index.js'
import { getMusicLrc } from '@/api/index.js'

const state = {
    // url
    musicDetail: {},
    // 当前播放的音乐信息
    currentMusic: {},
    // 音乐歌词
    musicLrc: {}
}
const mutations = {
    GETMUSICDETAIL(state, val) {
        state.musicDetail = val
    },
    CHANGECURRENT(state, val) {
        state.currentMusic = val
    },
    GETMUSICLRC(state, val) {
        state.musicLrc = val
    }
}
const actions = {
    async getMusicDetail(context, id) {
        let res = await getMusicUrl(id)
        context.commit('GETMUSICDETAIL', res.data[0])
    },
    async getMusicLrc(context, id) {
        let res = await getMusicLrc(id)
        context.commit('GETMUSICLRC', res.lrc)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}