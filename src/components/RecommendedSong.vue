<template>
    <!-- Recommended Songs Section -->
    <h2 class="text-h5 font-weight-bold mb-3">Recommended for You</h2>
    <v-slide-group show-arrows>
        <v-slide-group-item v-for="song in recommended_songs" :key="song.id">
            <v-card class="ma-2" width="200" height="250">
                <v-img height="150" cover :src="`/api/cover/${song.album?.coverPath}`"></v-img>
                <v-card-title class="text-subtitle-1"> {{ song }}</v-card-title>
                <v-card-subtitle>{{song.artists.map(ar => ar.name).join(",")}}</v-card-subtitle>
            </v-card>
        </v-slide-group-item>
    </v-slide-group>
</template>

<script lang="ts" setup>
import axios from '@/request'

const recommended_songs = ref<Dto.MusicWithAlbumArtistDto[]>([])

onMounted(() => {
    axios.get<Dto.MusicWithAlbumArtistDto[]>('/music/recommended').then((res) => {
        recommended_songs.value = res.data
    }).catch((err) => {
        console.error(err)
    })
})
</script>