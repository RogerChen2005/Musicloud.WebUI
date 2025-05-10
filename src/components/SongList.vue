<template>
    <v-sheet elevation="3" border rounded="lg" width="95%" class="pa-2">
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
                        Album
                    </th>
                    <th class="text-left">
                        Operation
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(song, index) in songs" :key="song.id">
                    <td>{{ index }}</td>
                    <td>{{ song.title }}</td>
                    <td><v-chip v-for="artist in song.artists" @click="openArtist(artist)">{{ artist.name }}</v-chip>
                    </td>
                    <td><v-btn variant="plain" @click="openAlbum(song.album)">{{ song.album?.title }}</v-btn></td>
                    <td><v-btn variant="tonal" icon="mdi-play" density="comfortable" @click="playSong(song)" />
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-sheet>
</template>

<script setup lang="ts">
import { openArtist, openAlbum } from '@/composables/openItem';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

defineProps({
    songs: {
        type: Array as PropType<Dto.MusicWithAlbumArtistDto[]>,
        required: true,
    }
})

function playSong(song: Dto.MusicWithAlbumArtistDto) {
    appStore.startPlay(song, song.album?.coverPath);
}
</script>