import { createPinia } from "pinia";

// pinia-plugin-persist是一个Pinia持久化存储插件，用于将Pinia状态存储到本地持久化存储中，例如localStorage或sessionStorage 
// 安装：npm install pinia pinia-plugin-persist
import piniaPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPersist)

export default store