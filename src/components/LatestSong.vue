<template>
    <!-- Most Popular Section -->
    <h2 class="text-h5 font-weight-bold mb-3 ml-2 latest-song-header">Latest Songs</h2>
    <div class="latest-song-container">
        <SongList class="latest-song-item" :songs="latest_songs"></SongList>
    </div>
</template>

<script lang="ts" setup>
import axios from '@/request'
import { animate, createSpring } from 'animejs';
import SongList from './SongList.vue';

const latest_songs = ref<Dto.MusicWithAlbumArtistDto[]>([])

onMounted(() => {
    animate('.latest-song-header', {
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 100,
        delay: 200,
        ease: createSpring(),
    })
    axios.get<Dto.MusicWithAlbumArtistDto[]>('/music/latest').then((res) => {
        latest_songs.value = res.data
        nextTick(() => {
            animate('.latest-song-item', {
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 100,
                ease: createSpring(),
            })
        })
    }).catch((err) => {
        console.error(err)
    })
})
</script>

<style>
.latest-song-container {
    display: flex;
    place-content: center;
}
</style>