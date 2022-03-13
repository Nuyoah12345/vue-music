import Vue from "vue";
import Vuex from 'vuex'
import listData from './ListData/index.js'
import musicDetail from './MusicDedail'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        listData,
        musicDetail
    }
})