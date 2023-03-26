<script setup lang="ts">
import childpic from '@/assets/img/child.jpg'

const emit = defineEmits(['avatarClick'])

const props = defineProps({
    className: String
})

const click = () => {
    emit('avatarClick')
}

</script>

<template>
    <!-- scr='/images/child.jpg' 也可以访问图片 -->
    <el-avatar :class=props.className :size="45" :src='childpic' @click="click" />
</template>

<style scoped lang="scss"></style>