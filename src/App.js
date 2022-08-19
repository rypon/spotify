import "./App.css";
import SearchFirstArtist from "./components/SearchFirstArtist";
import React, { useState, useEffect } from "react";
import RelatedArtistsPage from "./components/RelatedArtistsPage";

const CLIENT_ID = "870853fc8bf84c4cadb2b73729986e0c";
const CLIENT_SECRET = "2290f350d4274d05b739e1463f6c5f37";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [count, setCount] = useState(0);
  const [artist, setArtist] = useState([]);
  const [related, setRelated] = useState([]);
  const [newRelatedArtist, setNewRelatedArtist] = useState([]);

  useEffect(() => {
    //API access token
    const authParameters = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  //Search

  const artistParameters = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  async function search() {
    const searchedArtist = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0];
      });

    setArtist(searchedArtist);
  }
  async function getRelated() {
    const relatedArtists = await fetch(
      "https://api.spotify.com/v1/artists/" + artist?.id + "/related-artists",
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists;
      });
    setRelated(relatedArtists);
  }

  useEffect(() => {
    setArtist(artist);
    setRelated(related);
  }, [count]);

  function increment() {
    setCount(count + 1);
    getRelated();
  }

  return (
    <div>
      <SearchFirstArtist
        setSearchInput={setSearchInput}
        search={search}
        setCount={setCount}
        count={count}
        artist={artist}
        getRelated={getRelated}
      />
      <button onClick={() => increment()}> button</button>
      <RelatedArtistsPage related={related} setRelated={setRelated} />
    </div>
  );
}

export default App;
