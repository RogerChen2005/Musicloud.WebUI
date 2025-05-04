<template>
  <div class="mt-4">
    <!-- Page Title -->
    <section class="index-page-header ml-2">
      <h1 class="text-h4 font-weight-bold mb-2">Welcome!</h1>
      <p class="text-subtitle-1 mb-4">Discover your favorite music</p>
    </section>
    <RecommendedAlbum />
    <LatestSong />
  </div>
</template>

<script lang="ts" setup>
import LatestSong from '@/components/LatestSong.vue';
import RecommendedAlbum from '@/components/RecommendedAlbum.vue';
import { animate, createSpring } from 'animejs';
onMounted(() => {
  animate('.index-page-header', {
    opacity: [0, 1],
    translateX: [50, 0],
    duration: 100,
    ease: createSpring(),
  })
})
</script>
