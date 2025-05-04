declare namespace Dto {
  interface MusicDto {
    id: string;
    title?: string;
    Track: number;
    metadata?: MetadataDto;
  }

  interface MetadataDto {
    id: string;
    duration: string;
    fileName?: string;
    fileSize: number;
  }

  interface ArtistDto {
    id: string;
    name?: string;
    description?: string;
  }

  interface MusicWithArtistDto extends MusicDto {
    artists: ArtistDto[];
  }

  interface MusicWithAlbumArtistDto extends MusicDto {
    album?: AlbumDto;
    artists: ArtistDto[];
  }

  interface AlbumWithMusicsArtistsDto extends AlbumDto {
    artists: ArtistDto[];
    musics: MusicWithArtistDto[];
  }

  interface ArtistWithAlbumDto extends ArtistDto {
    albums: AlbumDto[];
  }

  interface SearchResultDto {
    musics: MusicWithAlbumArtistDto[];
    albums: AlbumWithMusicsArtistsDto[];
    artists: ArtistWithAlbumDto[];
  }

  export interface AlbumDto {
    id: string;
    title: string;
    description: string;
    genre: string[];
    coverPath: string;
  }
}
