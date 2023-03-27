import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
        port: 8000, //vite项目启动时自定义端口
        open: true, //vite项目启动时自动打开浏览器
        hmr: true //开启热更新,默认开启
    },

    // 打包环境配置
    build: {
        rollupOptions:{
            // 分包策略,依赖单独打包减少http请求
            output:{
                manualChunks: id => {
                    // 将 node_modules 中的代码单独打包成一个 JS 文件
                    if(id.includes('node_modules')){
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
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '/images': 'src/assets/img/' //设置图片便捷路径引用
        }
    }
})
