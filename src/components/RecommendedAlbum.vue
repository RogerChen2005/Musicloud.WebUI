<template>
    <!-- Recommended Album Section -->
    <h2 class="text-h5 font-weight-bold mb-3 ml-2 recommended-album-header">Recommended Albums for You</h2>
    <v-slide-group show-arrows>
        <v-slide-group-item v-for="album in recommended_albums" :key="album.id">
            <div class="recommended-album-item">
                <v-card @click="openAlbum(album)" link class="ma-2" width="200" height="250">
                    <v-img height="150" cover :src="`/api/cover/${album.coverPath}`"></v-img>
                    <v-card-title class="text-subtitle-1">{{ album.title }}</v-card-title>
                    <v-card-subtitle>{{ album.genre.join(",") }}</v-card-subtitle>
                </v-card>
            </div>
        </v-slide-group-item>
    </v-slide-group>
</template>

<script lang="ts" setup>
import { openAlbum } from '@/composables/openItem';
import axios from '@/request'
import { animate, createSpring, stagger } from 'animejs';

const recommended_albums = ref<Dto.AlbumDto[]>([])

onMounted(() => {
    animate('.recommended-album-header', {
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 100,
        ease: createSpring(),
    })
    axios.get<Dto.AlbumDto[]>('/album/recommended').then((res) => {
        recommended_albums.value = res.data
        nextTick(() => {
            animate('.recommended-album-item', {
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 100,
                delay: stagger(70, { start: 50 }),
                ease: createSpring(),
            })
        })
    }).catch((err) => {
        console.error(err)
    })
})
</script>