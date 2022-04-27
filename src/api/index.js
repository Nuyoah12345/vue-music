import request from "./request.js";

// 歌曲信息
export const getMusicList = (index) => request({
    url: '/top/song',
    method: 'get',
    params: {
        type: index
    }
})
// 歌曲mp3 url
export const getMusicUrl = (id) => request({
    url: '/song/url',
    method: 'get',
    params: {
        id: id
    }
})
// 歌词
export const getMusicLrc = (id) => request({
    url: '/lyric',
    method: 'get',
    params: {
        id: id
    }
})