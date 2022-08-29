import "./App.css";
import React, { useState, useEffect } from "react";
import RelatedArtistsPage from "./components/RelatedArtistsPage";
import Header from "./components/Header";
import SearchFirstArtist from "./components/SearchFirstArtist";
import SearchSecondArtist from "./components/SearchSecondArtist";
import LanderPage from "./components/LanderPage";
import FirstArtistSelectionPage from "./components/FirstArtistSelectionPage";
import SecondArtistSelectionPage from "./components/SecondArtistSelectionPage";
import { Routes, Route } from "react-router-dom";

const CLIENT_ID = "870853fc8bf84c4cadb2b73729986e0c";
const CLIENT_SECRET = "2290f350d4274d05b739e1463f6c5f37";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [secondSearchInput, setSecondSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [count, setCount] = useState(0);
  const [startArtist, setStartArtist] = useState([]);
  const [startArtistSelect, setStartArtistSelect] = useState([]);
  const [secondArtistSelect, setSecondArtistSelect] = useState([]);
  const [secondArtist, setSecondArtist] = useState([]);
  const [artist, setArtist] = useState([]);
  const [related, setRelated] = useState([]);
  const [showLander, setShowLander] = useState(true);

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
      "https://api.spotify.com/v1/search?q='" + searchInput + "'&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        // return data.artists.items[0];
        setArtist(data.artists.items[0]);
        setStartArtist(data.artists.items[0]);
        setCount(count + 1);
        setStartArtistSelect(data.artists.items);
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
        setSecondArtistSelect(data.artists.items);
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

  function LanderStatus() {
    setShowLander(!showLander);
    setArtist([]);
    setStartArtist([]);
    setRelated([]);
    setSecondArtist([]);
    setStartArtistSelect([]);
    setSecondArtistSelect([]);
  }

  if (
    artist.id === secondArtist.id &&
    artist.id !== undefined &&
    secondArtist.id !== undefined
  ) {
    console.log("Winner!");
  }

  console.log(startArtist);
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LanderPage
              showLander={showLander}
              setShowLander={setShowLander}
              LanderStatus={LanderStatus}
            />
          }
        />
        <Route
          exact
          path="/first-search"
          element={
            <div className="grid justify-items-center">
              <SearchFirstArtist
                setSearchInput={setSearchInput}
                search={search}
                setCount={setCount}
                count={count}
                startArtist={startArtist}
                getRelated={getRelated}
                LanderStatus={LanderStatus}
              />
              <FirstArtistSelectionPage
                startArtistSelect={startArtistSelect}
                setStartArtistSelect={setStartArtistSelect}
                startArtist={startArtist}
                setArtist={setArtist}
                setStartArtist={setStartArtist}
                increment={increment}
              />
            </div>
          }
        />
        <Route
          exact
          path="/second-search"
          element={
            <div className="grid justify-items-center">
              <SearchSecondArtist
                setSecondSearchInput={setSecondSearchInput}
                secondArtist={secondArtist}
                secondSearch={secondSearch}
                LanderStatus={LanderStatus}
              />
              <SecondArtistSelectionPage
                secondArtistSelect={secondArtistSelect}
                setSecondArtistSelect={setSecondArtistSelect}
                secondArtist={secondArtist}
                increment={increment}
              />
            </div>
          }
        />
      </Routes>

      {/* {showLander ? (
        <LanderPage
          showLander={showLander}
          setShowLander={setShowLander}
          LanderStatus={LanderStatus}
        />
      ) : (
        <div>
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
            showLander={showLander}
            setShowLander={setShowLander}
            LanderStatus={LanderStatus}
          />
          <FirstArtistSelectionPage
            startArtistSelect={startArtistSelect}
            setStartArtistSelect={setStartArtistSelect}
            startArtist={startArtist}
            setArtist={setArtist}
            setStartArtist={setStartArtist}
            increment={increment}
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
      )} */}
    </div>
  );
}

export default App;
