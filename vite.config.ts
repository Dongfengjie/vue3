import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import setting from './src/vueConfigSetting.js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // 配置 ElementPlus 按需引入
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],

    // // 配置环境变量名称，APP_为自定义开头名
    // envPrefix: 'APP_',

    // scss mixin配置
    // 指定传递给 CSS 预处理器的选项。文件扩展名用作选项的键，
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: "@import 'src/assets/styles/mixin.scss';"
            }
        }
    },

    // 开发环境配置
    server: {
        host: true, //指定服务器监听某个IP地址 true默认监听所有
        port: 8000, //vite项目启动时自定义端口
        open: true, //vite项目启动时自动打开浏览器
        hmr: true, //开启热更新,默认开启
        proxy: {
            //代理跨域
            '/api': {
                target: setting.proxyTarget,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },

    // 打包环境配置
    build: {
        // outDir: 'build', // 指定打包文件的输出目录, 默认值为 dist
        // assetsDir: 'static', // 静态资源的存放目录, 默认值为 assets
        assetsInlineLimit: 4096, // 图片转 base64 编码的阈值
        rollupOptions: {
            // 分包策略,依赖单独打包减少http请求
            output: {
                manualChunks: (id) => {
                    // 将 node_modules 中的代码单独打包成一个 JS 文件
                    if (id.includes('node_modules')) {
                        return 'vendor'
                    }
                }
            }
        }
    },

    // 预览环境配置
    preview: {},

    // 配置绝对路径
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
            // '/images': 'src/assets/img/' //设置图片便捷路径引用
        }
    }

    // node_modules中的依赖模块构建过一次就会缓存在 node_modules/.vite/deps 文件夹下，下一次会直接使用缓存的文件。
    //     optimizeDeps: {
    //         force: true // 强制进行依赖预构建
    //     },
})
