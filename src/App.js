import "./App.css";
import SearchFirstArtist from "./components/SearchFirstArtist";
import React, { useState, useEffect } from "react";
import RelatedArtists from "./components/RelatedArtists";

const CLIENT_ID = "870853fc8bf84c4cadb2b73729986e0c";
const CLIENT_SECRET = "2290f350d4274d05b739e1463f6c5f37";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [count, setCount] = useState(0);
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

  //Search

  async function search() {
    // GET request using search to get the Artist ID
    const artistParameters = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    const searchedArtist = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        setArtist(data.artists.items[0]);
      });

    //GET request with Artist ID grab all related artists from that artist
    const relatedArtists = await fetch(
      "https://api.spotify.com/v1/artists/" + artist.id + "/related-artists",
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        setRelated(data);
      });
    //Display those albums to the user
  }

  // let artistImage = artist?.images;
  // let artistImage = artist.images[0].url;
  // let artistName = artist.name;
  console.log(related);
  console.log(artist);

  return (
    <div>
      {artist ? (
        <SearchFirstArtist
          setSearchInput={setSearchInput}
          onSearch={search}
          artist={artist}
        />
      ) : (
        <SearchFirstArtist />
      )}
      <RelatedArtists related={related} />
    </div>
  );
}

export default App;
