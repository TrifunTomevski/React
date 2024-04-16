import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Artists } from "./components/artists/Artists";
import artists from "./db/db";
import ArtistDetails from "./components/artistDdetails/ArtistDetails";
import { AlbumDetails } from "./components/albumDetails/AlbumDetails";

function App() {
  return (
    <div className="main">
      <Link to="">
        <div className="homePageBanner">
          <h1>MUSIC DB</h1>
        </div>
      </Link>
      <Routes>
        <Route path="/" element={<Artists artistsDb={artists} />} />
        <Route path="/:name" element={<ArtistDetails artistsDb={artists} />} />
        <Route
          path="/:name/:albumId"
          element={<AlbumDetails artistsDb={artists} />}
        />
      </Routes>
    </div>
  );
}

export default App;
