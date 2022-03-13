import request from "./request.js";

export const getMusicList = (index) => request({
    url: '/top/song',
    method: 'get',
    params: {
        type: index
    }
})

export const getMusicUrl = (id) => request({
    url: '/song/url',
    method: 'get',
    params: {
        id: id + ',33894312'
    }
})