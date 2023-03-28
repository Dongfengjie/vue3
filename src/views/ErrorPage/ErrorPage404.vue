<script setup lang="ts">

</script>

<template>
    <el-result icon="error" title="404" sub-title="抱歉，你访问的页面不存在">
        <template #icon>
            <el-image src="https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg" />
        </template>
        <template #extra>
            <el-button type="primary">Back</el-button>
        </template>
    </el-result>
</template>

<style scoped></style>