// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const currentplaying = ref<Dto.MusicDto>();
  const coverImg = ref<string>();
  function startPlay(music: Dto.MusicDto, coverImgPath?: string) {
    currentplaying.value = music;
    coverImg.value = `/api/cover/${coverImgPath}`;
  }
  return {
    startPlay,
    coverImg,
    currentplaying,
  };
});
