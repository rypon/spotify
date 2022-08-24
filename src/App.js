import "./App.css";
import React, { useState, useEffect } from "react";
import RelatedArtistsPage from "./components/RelatedArtistsPage";
import Header from "./components/Header";
import LanderPage from "./components/LanderPage";

const CLIENT_ID = "870853fc8bf84c4cadb2b73729986e0c";
const CLIENT_SECRET = "2290f350d4274d05b739e1463f6c5f37";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [secondSearchInput, setSecondSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [count, setCount] = useState(0);
  const [startArtist, setStartArtist] = useState([]);
  const [secondArtist, setSecondArtist] = useState([]);
  const [artist, setArtist] = useState([]);
  const [related, setRelated] = useState([]);

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

  const searchParameters = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };

  async function search() {
    const searchedArtist = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        // return data.artists.items[0];
        setArtist(data.artists.items[0]);
        setStartArtist(data.artists.items[0]);
        setCount(count + 1);
        console.log(data.artists.items);
      });
  }

  async function secondSearch() {
    const secondSearchedArtist = await fetch(
      "https://api.spotify.com/v1/search?q=" +
        secondSearchInput +
        "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        setSecondArtist(data.artists.items[0]);
      });
  }

  async function getRelated() {
    const relatedArtists = await fetch(
      "https://api.spotify.com/v1/artists/" + artist?.id + "/related-artists",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        // return data.artists;
        setRelated(data.artists);
      });
  }

  useEffect(() => {
    setArtist(artist);
    getRelated();
    setRelated(related);
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  if (
    artist.id === secondArtist.id &&
    artist.id !== undefined &&
    secondArtist.id !== undefined
  ) {
    console.log("Winner!");
  }

  return (
    <div className="app">
      <LanderPage />
      <Header
        setSearchInput={setSearchInput}
        setSecondSearchInput={setSecondSearchInput}
        search={search}
        secondSearch={secondSearch}
        setCount={setCount}
        count={count}
        startArtist={startArtist}
        secondArtist={secondArtist}
        getRelated={getRelated}
        artist={artist}
      />

      <RelatedArtistsPage
        related={related}
        setRelated={setRelated}
        artist={artist}
        setArtist={setArtist}
        increment={increment}
        count={count}
      />
    </div>
  );
}

export default App;
