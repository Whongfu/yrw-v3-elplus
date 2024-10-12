import { RouteRecordRaw } from "vue-router";

// 配置项 配置路由地址和路由组件的11对应关系
export const routes: RouteRecordRaw[] = [
    /**
    {
        path: '/', // 配置路由地址
        component: Layout, // 配置组件
        children: [
            {
                path: '/path', // 注意：/path 和 path\ 加斜杠：完全使用path，不加斜杠：需拼接父级path
                //路由懒加载 只要输入路由地址才会加载
                component: () => import('组件地址') // 配置组件
            }
        ]
    }
    */
    {
        path: '/',
        name: 'layout',
        redirect: '/home', // 路由重定向
    },
    {
        path: '/login',
        name: 'login',
        component: ()=>import('@/views/login/index.vue'),
        meta: {
            title: '登录', // 菜单标题
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页', // 首页
        }
    }
]