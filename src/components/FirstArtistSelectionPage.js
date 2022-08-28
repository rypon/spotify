import React from "react";
import "../App.css";
import FirstArtistSelectionCard from "./FirstArtistSelectionCard";

function FirstArtistSelectionPage({
  startArtistSelect,
  startArtist,
  setStartArtist,
  increment,
  setArtist,
}) {
  const searchList = startArtistSelect?.map((val) => (
    <FirstArtistSelectionCard
      key={val.id}
      val={val}
      name={val.name}
      setArtist={setArtist}
      image={val.images?.[0]}
      startArtist={startArtist}
      setStartArtist={setStartArtist}
      increment={increment}
      // count={count}
    />
  ));

  return (
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <div>
        <div>
          <p>Select your first artist from the list below:</p>
        </div>
        <div class="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 ">
          {searchList}
        </div>
      </div>
    </div>
  );
}

export default FirstArtistSelectionPage;
