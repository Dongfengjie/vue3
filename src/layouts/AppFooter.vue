<script setup lang="ts">
import { ElementPlus } from '@element-plus/icons-vue'

const year = new Date().getFullYear();
</script>

<template>
    <el-text type="info" size="large">
        CopyRight @ DongFengJie |
        {{ year }} |
        <el-icon>
            <ElementPlus />
        </el-icon>
        版本号：1.0.0
    </el-text>
</template>

<style scoped></style>