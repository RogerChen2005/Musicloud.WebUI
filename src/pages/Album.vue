<template>
    <v-col class="mt-4">
        <v-row class="album-header ml-2">
            <img :src="`/api/cover/${album?.coverPath}`" alt="Album Cover" class="rounded-lg" width="200px"
                height="auto" />
            <v-col class="ml-4">
                <h1 class="text-h4 font-weight-bold mb-2">{{ album?.title }}</h1>
                <p class="text-subtitle-1 mb-4">By {{album?.artists.map(artist => artist.name).join(', ')}}</p>
            </v-col>
        </v-row>
        <v-sheet elevation="3" border rounded="lg" width="95%" class="album-main pa-2 mt-8">
            <v-table density="comfortable" :fixed-header="true">
                <thead>
                    <tr>
                        <th class="text-left">
                            #
                        </th>
                        <th class="text-left">
                            Title
                        </th>
                        <th class="text-left">
                            Artists
                        </th>
                        <th class="text-left">
                            Operation
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(song, index) in album?.musics" :key="song.id">
                        <td>{{ index }}</td>
                        <td>{{ song.title }}</td>
                        <td><v-chip v-for="artist in song.artists" @click="openArtist(artist)">{{ artist.name
                                }}</v-chip>
                        </td>
                        <td><v-btn variant="tonal" icon="mdi-play" density="comfortable" />
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-sheet>
    </v-col>
</template>

<script setup lang="ts">
import { openArtist, openAlbum } from '@/composables/openItem';
import axios from '@/request'
import { animate, createSpring } from 'animejs';

const route = useRoute();
const id = computed<string>(() => route.query.id as string);
const album = ref<Dto.AlbumWithMusicsArtistsDto>();

function init() {
    animate('.album-header', {
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 100,
        ease: createSpring(),
    });
    if (id.value) {
        axios.get<Dto.AlbumWithMusicsArtistsDto>('/album', {
            params: {
                id: id.value,
            },
        }).then((res) => {
            album.value = res.data;
            nextTick(() => {
                animate('.album-main', {
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