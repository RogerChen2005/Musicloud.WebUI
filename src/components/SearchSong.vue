<template>
    <!-- Most Popular Section -->
    <h2 class="text-h5 font-weight-bold mb-3 ml-2 search-song-header">Songs</h2>
    <div class="search-song-list mb-4">
        <song-list :songs="musics"></song-list>
    </div>
</template>

<script lang="ts" setup>
import { animate, createSpring, stagger } from 'animejs';

const props = defineProps({
    musics: {
        type: Object as PropType<Dto.MusicWithAlbumArtistDto[]>,
        required: true,
    },
})

watch(() => props.musics, () => {
    nextTick(() => {
        animate('.search-song-list', {
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 100,
            delay: stagger(70, { start: 250 }),
            ease: createSpring(),
        })
    })
})

onMounted(() => {
    animate('.search-song-header', {
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 100,
        delay: 200,
        ease: createSpring(),
    })
})
</script>

<style>
.search-song-list {
    display: flex;
    place-content: center;
}
</style>