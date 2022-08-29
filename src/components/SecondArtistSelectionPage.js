import React from "react";
import "../App.css";
import SecondArtistSelectionCard from "./SecondArtistSelectionCard";

function SecondArtistSelectionPage({
  secondArtistSelect,
  setSecondArtist,
  secondArtist,
  increment,
}) {
  const searchList = secondArtistSelect?.map((val) => (
    <SecondArtistSelectionCard
      key={val.id}
      val={val}
      name={val.name}
      image={val.images?.[0]}
      secondArtist={secondArtist}
      setSecondArtist={setSecondArtist}
      increment={increment}
      // count={count}
    />
  ));

  return (
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <div>
        <div class="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 ">
          {searchList.slice(0, 6)}
        </div>
      </div>
    </div>
  );
}

export default SecondArtistSelectionPage;
