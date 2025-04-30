<template>
    <div class="m-sidebar-wrapper">
        <div ref="sidebar" class="m-sidebar elevation-5" border>
            <m-sidebar-cell v-for="option in options" :name="option.name" :icon="option.icon"></m-sidebar-cell>
        </div>
    </div>
</template>

<style>
.m-sidebar-wrapper {
    width: 100px;
    height: 100%;
    position: relative;
}

.m-sidebar {
    background-color: #f5f5f5;
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

const options = ref([
    {
        icon: 'mdi-home',
        name: 'Home',
    },
    {
        icon: 'mdi-account',
        name: 'Profile',
    },
    {
        icon: 'mdi-cog',
        name: 'Settings',
    }
])

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
