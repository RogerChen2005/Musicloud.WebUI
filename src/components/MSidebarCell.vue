<template>
    <div class="m-sidebar-cell">
        <v-btn :icon="icon" variant="plain">
        </v-btn>
        <div class="ml-2 text-subtitle-2">{{ name }}</div>
    </div>
</template>

<style>
.m-sidebar-cell {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    cursor: default;
}
</style>

<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        default: 'mdi-bell',
    },
    name: {
        type: String,
        default: '',
    },
});
</script>