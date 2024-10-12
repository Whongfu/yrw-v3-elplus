// 路由入口文件

// createRouter 创建路由实例
// createWebHashHistory hash模式 地址上有#
// createWebHistory 历史模式 
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { userStore } from "@/store/user";
import { routes } from "./routes";

// 创建路由实例 导入配置项和模式
const router = createRouter({
    history: createWebHistory(), // 模式
    routes
})

// 全局路由前置守卫
router.beforeEach(async (to, from, next) => {
    const user = userStore()
    console.log('token-> ', user.token)
    next()
    // const store = useStore()
    // const isLogin = store.state.isLogin
    // if (to.path !== '/login' && !isLogin) {
    //     // 如果用户未登录且尝试访问非登录页面，则重定向到登录页
    //     next('/login')
    // } else {
    //     // 否则，继续路由导航
    //     next()
    // }
})

// 导出路由实例
export default router