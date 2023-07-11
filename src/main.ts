import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './assets/styles/index.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
// Element-Plus 日期统一中文
app.use(ElementPlus, {
    locale: zhCn
})

app.mount('#app')
