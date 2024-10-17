import path from 'path'
import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  // import.meta.env是在运行时获取环境变量的值，适用于应用程序代码中需要动态获取环境变量的场合。（配置文件中获取不到，因为配置文件是在构建时被读取！！！)
  const root = process.cwd();
  const env = loadEnv(mode, root)
  return {
    // root: 指定项目的根目录。默认是 index.html 所在目录
    // base: 用于指定项目的基础路径，通常用于将项目部署到子路径的情况。 默认值：'/',
    // server: { // 配置开发服务器的相关选项。
    //   host: true, // 监听所有地址
    //   https: false, // 是否开启 https
    //   port: env.VITE_PORT, // 指定开发服务器的端口
    //   proxy:{ // 配置代理，用于解决跨域问题
    //     '/api': {
    //       target: 'https://api.example.com', // '/api' 开头的请求都会被代理地址
    //       changeOrigin: true, // 请求头中的 Origin 会被改为目标服务器地址，从而避免跨域问题
    //       rewrite: (path) => path.replace(/^\/api/, ''), // 将前端请求路径 /api/users 重写为 /users，确保与后端路径匹配
    //     },
    //   }  
    // },
    resolve: { // 配置模块解析的相关选项，如别名和扩展名
      alias: { // 定义模块路径别名
        '@/': `${pathSrc}/`,
      },
      // extensions: ['.js', '.ts', 'vue'] // 配置文件扩展名
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`,
        },
      },
    },
    plugins: [ // 插件数组，用于扩展 Vite 的功能
      vue(),
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
        dts: 'src/components.d.ts',
      }),

      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            scale: 1.2,
            warn: true,
          }),
        ],
        transformers: [
          transformerDirectives(),
          transformerVariantGroup(),
        ]
      }),
    ],
  }
}
