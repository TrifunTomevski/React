export type AlbumsType = {
  albumId: string;
  title: string;
  year: number;
  cover: string;
  price: number;
};

export interface AlbumsAndArtists {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: AlbumsType[];
}
[];
