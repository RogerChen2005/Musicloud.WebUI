<template>
    <!-- Recommended Album Section -->
    <h2 class="text-h5 font-weight-bold mb-3 ml-2 search-album-header">Albums</h2>
    <v-slide-group show-arrows class="mb-4">
        <v-slide-group-item v-for="album in albums" :key="album.id">
            <div class="search-album-item">
                <v-card class="ma-2" width="200" height="250">
                    <v-img height="150" cover :src="`/api/cover/${album.coverPath}`"></v-img>
                    <v-card-title class="text-subtitle-1">{{ album.title }}</v-card-title>
                    <v-card-subtitle>{{ album.genre.join(",") }}</v-card-subtitle>
                </v-card>
            </div>
        </v-slide-group-item>
    </v-slide-group>
</template>

<script lang="ts" setup>
import { animate, createSpring, stagger } from 'animejs';

const props = defineProps({
    albums: {
        type: Object as PropType<Dto.AlbumDto[]>,
        required: true,
    },
})

watch(() => props.albums, () => {
    nextTick(() => {
        animate('.search-album-item', {
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 100,
            delay: stagger(50),
            ease: createSpring(),
        })
    })
}, { immediate: true })

onMounted(() => {
    animate('.search-album-header', {
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 100,
        ease: createSpring(),
    })
})
</script>