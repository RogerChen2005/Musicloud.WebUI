import router from "@/router";

export function openArtist(artist: Dto.ArtistDto) {
  router.push({ path: "artist", query: { id: artist.id } });
}

export function openAlbum(album?: Dto.AlbumDto) {
  if (album) {
    router.push({ path: "album", query: { id: album.id } });
  }
}
