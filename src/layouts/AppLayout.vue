<script setup lang="ts">
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue'
import AppAside from './AppAside.vue'
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-aside class="aside">
                <AppAside></AppAside>
            </el-aside>

            <el-container>
                <el-header class="appHeader">
                    <AppHeader></AppHeader>
                </el-header>

                <el-main>
                    content
                </el-main>

                <el-footer class="appFooter">
                    <AppFooter></AppFooter>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
.appHeader {
    @include flex-setting(center, center);
    @include com-background-color;
}

.aside {
    width: 300px;
    height: 100vh;
}

.appFooter {
    @include flex-setting(center, center);
    @include com-background-color;
}
</style>
