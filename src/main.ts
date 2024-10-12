// 全局入口文件
import { createApp } from "vue";
// 导入顶级根组件
import App from "./App.vue";

// 样式
import "@/styles/index.scss";
import "uno.css";
import 'animate.css'

// 创建实例
const app = createApp(App);

// 导入pinia
import store from './store'
app.use(store)

// 导入路由
import router from './router'
app.use(router)

// 全局注册图标：el-icon
import component from "@/components/index"
app.use(component)

// 挂着app实例 在index.html的id为app的div内部 
app.mount("#app");
