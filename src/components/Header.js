import React from "react";
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
}) {
  return (
    <div class="grid sm:grid-cols-2 justify-center">
      <div class="justify-self-center">
        <SearchFirstArtist
          setSearchInput={setSearchInput}
          search={search}
          setCount={setCount}
          count={count}
          startArtist={startArtist}
          getRelated={getRelated}
          // setSecondSearchInput={setSecondSearchInput}
          // secondArtist={secondArtist}
          // secondSearch={secondSearch}
        />
      </div>
      <div class="justify-self-center">
        <SearchSecondArtist
          setSecondSearchInput={setSecondSearchInput}
          secondArtist={secondArtist}
          secondSearch={secondSearch}
        />
      </div>
    </div>
  );
}

export default Header;
