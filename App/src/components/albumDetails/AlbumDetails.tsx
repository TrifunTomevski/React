import { useParams } from "react-router-dom";
import { AlbumsAndArtists, AlbumsType } from "../../types/types";
import classes from "./albumDetails.module.css";

type Props = {
  artistsDb: AlbumsAndArtists[];
};

export const AlbumDetails = ({ artistsDb }: Props) => {
  const { albumId } = useParams();

  const albumDetails: AlbumsType[] = artistsDb.reduce((acc, artist) => {
    const albumsDetails = artist.albums.find(
      (album) => album.albumId === albumId
    );

    if (albumsDetails) {
      acc.push(albumsDetails);
    }
    return acc;
  }, []);

  return (
    <>
      {albumDetails.map((album) => (
        <div className={classes.albumDetailContainer} key={album.albumId}>
          <img
            src={`../../../src/assets/imgs/albums/${album.cover}.jpg`}
            alt=""
          />
          <p className={classes.albumDetails}>
            <strong>Title:</strong> {album.title}
          </p>
          <p className={classes.albumDetails}>
            <strong>Year:</strong> {album.year}
          </p>
          <p className={classes.albumDetails}>
            <strong>Price:</strong> {album.price}$
          </p>
        </div>
      ))}
    </>
  );
};
