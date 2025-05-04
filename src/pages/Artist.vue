<template>
    <v-col class="mt-4">
        <v-row class="artist-header ml-2">
            <!-- <img :src="`/api/cover/${artist?.coverPath}`" alt="Album Cover" class="rounded-lg" width="200px"
                height="auto" /> -->
            <v-col class="ml-4">
                <h1 class="text-h4 font-weight-bold mb-2">{{ artist?.name }}</h1>
            </v-col>
        </v-row>
        <div class="artist-album-container">
            <div class="recommended-album-item" v-for="album in artist?.albums" :key="album.id">
                <v-card @click="openAlbum(album)" link class="ma-2" width="200" height="250">
                    <v-img height="150" cover :src="`/api/cover/${album.coverPath}`"></v-img>
                    <v-card-title class="text-subtitle-1">{{ album.title }}</v-card-title>
                    <v-card-subtitle>{{ album.genre.join(",") }}</v-card-subtitle>
                </v-card>
            </div>
        </div>
    </v-col>
</template>

<script setup lang="ts">
import { openArtist, openAlbum } from '@/composables/openItem';
import axios from '@/request'
import { animate, createSpring } from 'animejs';

const route = useRoute();
const id = computed<string>(() => route.query.id as string);
const artist = ref<Dto.ArtistWithAlbumDto>();

function init() {
    animate('.artist-header', {
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 100,
        ease: createSpring(),
    });
    if (id.value) {
        axios.get<Dto.ArtistWithAlbumDto>('/artist', {
            params: {
                id: id.value,
            },
        }).then((res) => {
            artist.value = res.data;
            nextTick(() => {
                animate('.artist-main', {
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 100,
                    ease: createSpring(),
                });
            })
        });
    }
}

watch(id, () => {
    init();
});

onMounted(() => {
    init();
});
</script>

<style>
.artist-album-container {
    display: flex;
    flex-wrap: wrap;
    ;
}
</style>