<template>
    <div class="about">
        <el-calendar v-model="value" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(new Date())
</script>

<style>
@media (min-width: 1024px) {
    .about {
        height: 600px;
        width: 400px;
        display: flex;
        align-items: center;
    }
}
</style>
