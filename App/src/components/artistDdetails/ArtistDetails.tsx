import { Link, useParams } from "react-router-dom";
import { AlbumsAndArtists } from "../../types/types";
import classes from "./artistDetails.module.css";

type Props = {
  artistsDb: AlbumsAndArtists[];
};

export default function ArtistDetails({ artistsDb }: Props) {
  const { name } = useParams();

  const artistDetails = artistsDb.find((artist) => artist.name === name);

  if (!artistDetails) {
    return null;
  }

  const { cover, name: artistName, bio, albums } = artistDetails;

  return (
    <div className={classes.container}>
      <img
        src={`../../../src/assets/imgs/covers/${cover}.jpg`}
        alt="artist cover"
      />
      <h3>{artistName}</h3>
      <p className={classes.artistBio}>{bio}</p>
      <div className={classes.artistAlbums}>
        {albums.map((album) => (
          <Link key={album.albumId} to={album.albumId}>
            <pre>
              <img
                src={`../../../src/assets/imgs/albums/${album.cover}.jpg`}
                alt="artist album cover"
              />
            </pre>
          </Link>
        ))}
      </div>
    </div>
  );
}
