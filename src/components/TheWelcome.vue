<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from '@/assets/icons/IconDocumentation.vue'
import ToolingIcon from '@/assets/icons/IconTooling.vue'
import EcosystemIcon from '@/assets/icons/IconEcosystem.vue'
import CommunityIcon from '@/assets/icons/IconCommunity.vue'
import SupportIcon from '@/assets/icons/IconSupport.vue'
</script>

<template>
    <WelcomeItem>
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>Documentation</template>
    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <ToolingIcon />
        </template>
        <template #heading>Tooling</template>
    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <EcosystemIcon />
        </template>
        <template #heading>Ecosystem</template>
    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <CommunityIcon />
        </template>
        <template #heading>Community</template>
    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <SupportIcon />
        </template>
        <template #heading>Support Vue</template>
    </WelcomeItem>
</template>
