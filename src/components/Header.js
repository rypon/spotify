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
    <div>
      <SearchFirstArtist
        setSearchInput={setSearchInput}
        search={search}
        setCount={setCount}
        count={count}
        startArtist={startArtist}
        getRelated={getRelated}
        setSecondSearchInput={setSecondSearchInput}
        secondArtist={secondArtist}
        secondSearch={secondSearch}
      />
      {/* <SearchSecondArtist
        setSecondSearchInput={setSecondSearchInput}
        secondArtist={secondArtist}
        secondSearch={secondSearch}
      /> */}
    </div>
  );
}

export default Header;
