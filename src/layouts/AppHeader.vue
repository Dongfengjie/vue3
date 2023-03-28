<script setup lang="ts">
import { useRouter } from 'vue-router'
import DocumentationIcon from '@/assets/icons/IconDocumentation.vue'
import ToolingIcon from '@/assets/icons/IconTooling.vue'
import EcosystemIcon from '@/assets/icons/IconEcosystem.vue'
import CommunityIcon from '@/assets/icons/IconCommunity.vue'
import SupportIcon from '@/assets/icons/IconSupport.vue'
import MyClock from '@/components/MyClock/MyClock.vue'
import MyAvatar from '@/components/MyAvatar/MyAvatar.vue'

const router = useRouter()

const handleClick = () => {
    console.log(11);
    router.push('/404');
}
</script>

<template>
    <div class="icon">
        <DocumentationIcon />
        <ToolingIcon />
        <EcosystemIcon />
        <CommunityIcon />
        <SupportIcon />
    </div>

    <div class="avatar">
        <MyClock :hover=true></MyClock>
        <MyAvatar @avatarClick="handleClick" :className="'avatar_con'"></MyAvatar>
    </div>
</template>

<style scoped lang="scss">
div {
    flex: auto;
    display: flex;
    align-items: center;
}

.icon {
    justify-content: space-around;

    svg {
        @include hover(pointer);
    }
}

.avatar {
    justify-content: right;

    &_con {
        margin-left: 20px;
        @include hover(pointer);
    }

}
</style>