<template>
    <div class="m-sidebar-wrapper">
        <div ref="sidebar" class="m-sidebar elevation-5" border>
            <m-sidebar-cell @click="openPage(option.path)" v-for="option in options" :name="option.name"
                :icon="option.icon"></m-sidebar-cell>
        </div>
        <music-player />
    </div>
</template>

<style>
.m-sidebar-wrapper {
    width: 100px;
    height: 100%;
    position: relative;
    z-index: 500;
}

.m-sidebar {
    background-color: rgb(var(--v-theme-surface));
    top: 50%;
    left: 25px;
    box-sizing: content-box;
    transform: translateY(-50%);
    width: 47px;
    border-radius: 30px;
    height: fit-content;
    position: absolute;
    padding: 20px 5px 20px 5px;
    overflow: hidden;
    /*transition: .5s;*/
}
</style>

<script setup lang="ts">
import { animate, createSpring } from 'animejs';

const sidebar = ref<HTMLElement | null>(null);
const router = useRouter();
const options = ref([
    {
        icon: 'mdi-home',
        name: 'Home',
        path: '/'
    },
    {
        icon: 'mdi-cog',
        name: 'Settings',
        path: '/settings'
    }
])

function openPage(path: string) {
    router.push(path);
}

onMounted(() => {
    if (sidebar.value) {
        sidebar.value.onmouseenter = () => {
            animate(sidebar.value!, {
                width: sidebar.value!.scrollWidth + 10,
                duration: 50,
                ease: createSpring(),
            });
        };
        sidebar.value.onmouseleave = () => {
            animate(sidebar.value!, {
                width: 47,
                duration: 50,
                ease: createSpring(),
            });
        };
    }
})
</script>
