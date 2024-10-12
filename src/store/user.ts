import { defineStore } from "pinia";

export const userStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            userName: '1111',
        }
    },
    getters: {},
    actions: {},
    // 开启数据缓存, 默认：sessionStorage
    persist: {
        enabled: true,
        // 设置：localStorage
        strategies: [{
            // key: 'user',
            // storage: localStorage,
            paths:['token'], // 指定持久化数据       
        }]
    }
})