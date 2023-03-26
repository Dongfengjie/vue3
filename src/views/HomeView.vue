<template>
    <main>
        <TheWelcome />
    </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

type ProxyTargetProps = {
    name: string
    age: number
}

interface TT {
    [key: string]: string | number
}

const obj: ProxyTargetProps = {
    name: 'dong',
    age: 30
}

const proxy = new Proxy(obj, {
    // get 用来指定读取对象时的行为,他的返回值就是最终读取到的值
    // 指定get后，在通过代理读取数据对象属性时，会调用get()方法
    get(target: TT, props: string, receiver: any) {
        // target 被代理对象
        // props 读取的属性
        // receiver 代码对象
        return target[props]
    },
    // set 会在通过代理修改对象时调用
    set(target: TT, props: string, value: any, receiver: any) {
        // target 被代理对象
        // props 读取的属性
        // value 读取属性的值
        // receiver 代码对象
        return (target[props] = value)
    }
})

proxy.name = 'yang'
</script>
