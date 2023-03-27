<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useDateFormat } from '@vueuse/core'
// import request from '@/utils/request.js'

const props = defineProps({
    hover: Boolean
})

const nowDate = ref('')
const timer = ref<number | null>(null)
const isHover = computed(() => {
    return props.hover ? 'hover' : '';
})

onMounted(() => {
    timer.value = setInterval(() => {
        nowDate.value = useDateFormat(new Date(), 'YYYY-MM-DD, hh:mm:ss').value
    }, 1000)
})
</script>

<template>
    <el-popover placement="bottom" :width="200" :trigger="isHover"
        content="this is content, this is content, this is content">
        <template #reference>
            {{ nowDate }}
        </template>
    </el-popover>
</template>

<style lang="scss" scoped>
.el-tooltip__trigger {
    @include hover(pointer)
}
</style>