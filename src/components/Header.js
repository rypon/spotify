import React from "react";
import CurrentArtist from "./CurrentArtist";
import SearchFirstArtist from "./SearchFirstArtist";
import SearchSecondArtist from "./SearchSecondArtist";

function Header({
  setSearchInput,
  setSecondSearchInput,
  search,
  secondSearch,
  setCount,
  count,
  startArtist,
  secondArtist,
  getRelated,
  artist,
  setShowLander,
  showLander,
  LanderStatus,
}) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="button" onClick={() => LanderStatus()}>
          Home
        </button>
      </div>
      <div class="grid sm:grid-cols-3 justify-center">
        <div class="justify-self-center">
          <SearchFirstArtist
            setSearchInput={setSearchInput}
            search={search}
            setCount={setCount}
            count={count}
            startArtist={startArtist}
            getRelated={getRelated}
          />
        </div>
        <div class="justify-self-center self-center">
          <CurrentArtist artist={artist} secondArtist={secondArtist} />
        </div>
        <div class="justify-self-center">
          <SearchSecondArtist
            setSecondSearchInput={setSecondSearchInput}
            secondArtist={secondArtist}
            secondSearch={secondSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
