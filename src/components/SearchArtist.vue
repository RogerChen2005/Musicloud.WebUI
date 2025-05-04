<template>
    <!-- Recommended Album Section -->
    <h2 class="text-h5 font-weight-bold mb-3 ml-2 search-artist-header">Artists</h2>
    <v-slide-group show-arrows class="mb-4">
        <v-slide-group-item v-for="artist in artists" :key="artist.id">
            <div class="search-artist-item">
                <v-card class="ma-2" width="200" height="100">
                    <v-card-title class="text-subtitle-1">{{ artist.name }}</v-card-title>
                </v-card>
            </div>
        </v-slide-group-item>
    </v-slide-group>
</template>

<script lang="ts" setup>
import { animate, createSpring, stagger } from 'animejs';

defineProps({
    artists: {
        type: Object as PropType<Dto.ArtistDto[]>,
        required: true,
    },
})

onMounted(() => {
    animate('.search-artist-header', {
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 100,
        ease: createSpring(),
    })
})
</script>