/// <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_NODE_ENV: string
    VITE_APP_DOMAIN_URL: string
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
