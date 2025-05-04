<template>
  <div class="fill-height mt-4">
    <!-- Page Title -->
    <section class="search-header ml-2 mb-4">
      <h1 class="text-h4 font-weight-bold mb-2">Search for {{ queryString }}</h1>
    </section>
    <SearchSong :musics="search_result.musics" />
    <SearchAlbum :albums="search_result.albums" />
    <SearchArtist :artists="search_result.artists" />
  </div>
</template>

<script lang="ts" setup>
import { animate, createSpring } from 'animejs';
import axios from '@/request';
const route = useRoute();
const queryString = computed<string>(() => {
  return route.query.q as string;
});
const search_result = ref<Dto.SearchResultDto>({
  albums: [],
  artists: [],
  musics: [],
});

function init() {
  animate('.search-header', {
    opacity: [0, 1],
    translateX: [50, 0],
    duration: 100,
    ease: createSpring(),
  })
  if (queryString) {
    axios.get<Dto.SearchResultDto>(`/search?query=${queryString.value}`).then((res) => {
      search_result.value = res.data;
    }).catch((err) => {
      console.error(err);
    })
  }
}

watch(queryString, () => {
  init();
})

onMounted(() => {
  animate('.search-header', {
    opacity: [0, 1],
    translateX: [50, 0],
    duration: 100,
    ease: createSpring(),
  })
  init();
})
</script>
