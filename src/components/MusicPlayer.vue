<script setup lang="ts">
import { animate, createSpring } from 'animejs';
import { useAppStore } from '@/stores/app';

const isPlaying = ref(false);
const musicPlayerRef = ref<HTMLElement | null>(null);
const musicPlayerProgressRef = ref<HTMLElement | null>(null);
const audioRef = ref<HTMLAudioElement | null>(null);
const store = useAppStore();
const progress = ref(0);

watch(() => store.currentplaying, (newVal) => {
    if (audioRef.value) {
        audioRef.value.src = `/api/file/${newVal?.metadata?.fileName}`;
        audioRef.value.play().then(() => {
            isPlaying.value = true;
        })
    };
})

onMounted(() => {
    if (musicPlayerRef.value) {
        musicPlayerRef.value.onmouseenter = () => {
            animate(musicPlayerRef.value!, {
                width: musicPlayerRef.value!.scrollWidth + 10,
                duration: 50,
                ease: createSpring(),
            });
            animate(musicPlayerProgressRef.value!, {
                opacity: 0,
                duration: 200,
            });
        };
        musicPlayerRef.value.onmouseleave = () => {
            animate(musicPlayerRef.value!, {
                width: 60,
                duration: 700,
                ease: "inOutCubic",
            });
            animate(musicPlayerProgressRef.value!, {
                opacity: 1,
                duration: 200,
                delay: 800
            });
        };
    }
    if (audioRef.value) {
        audioRef.value.ontimeupdate = () => {
            progress.value = (audioRef.value!.currentTime || 0) / (audioRef.value!.duration || 1) * 100;
        };
    }
})

function play() {
    if (audioRef.value) {
        audioRef.value.play().then(() => {
            isPlaying.value = true;
        });
    }
}

function pause() {
    if (audioRef.value) {
        audioRef.value.pause();
        isPlaying.value = false;
    }
}
</script>

<template>
    <div class="music-player-container" :class="{ 'music-player-container-active': store.currentplaying }">
        <div ref="musicPlayerProgressRef" class="music-player-progess">
            <v-progress-circular color="primary" :model-value="progress" :size="72" :width="8"></v-progress-circular>
        </div>
        <div ref="musicPlayerRef" class="music-player-content elevation-4">
            <div class="music-player-wrapper">
                <img ref="albumCoverRef" alt="Album Cover" :src="store.coverImg" class="music-player-album-cover"
                    :class="{ 'album-cover-rotate': isPlaying }" />
                <div class="music-player-controls">
                    <span class="music-player-title ml-4">{{ store.currentplaying?.title }}</span>
                    <v-btn v-if="isPlaying" variant="plain" icon="mdi-pause" class="play-button ml-2" @click="pause" />
                    <v-btn v-else variant="plain" icon="mdi-play" class="pause-button ml-2" @click="play" />
                </div>
            </div>
        </div>
        <audio ref="audioRef" class="music-player-audio"></audio>
    </div>
</template>

<style>
@keyframes album-cover-rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.music-player-container {
    position: relative;
    bottom: 5%;
    left: -125px;
    transform: translateY(-50%);
    position: absolute;
    transition: .5s;
}

.music-player-container.music-player-container-active {
    left: 25px;
}

.music-player-content {
    background-color: rgb(var(--v-theme-surface));
    width: 60px;
    height: 60px;
    border-radius: 30px;
    overflow: hidden;
    box-sizing: content-box;
    z-index: 500;
    position: relative;
}

.music-player-wrapper {
    display: flex;
    flex-direction: row;
    width: fit-content;

}

.music-player-album-cover {
    height: 60px;
    width: 60px;
    border-radius: 30px;
}

.music-player-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.music-player-progess {
    position: absolute;
    transform: translate(-6px, -6px);
}

.music-player-audio {
    display: none;
}

.album-cover-rotate {
    animation: album-cover-rotate 10s linear infinite;
    z-index: 0;
}

.music-player-title {
    text-wrap: nowrap;
    font-weight: bold;
}
</style>