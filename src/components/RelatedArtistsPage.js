import React from "react";
import "../App.css";
import RelatedArtistsCard from "./RelatedArtistsCard";

function RelatedArtistsPage({ related, setRelated }) {
  const relatedObj = related?.map((val) => (
    <RelatedArtistsCard
      key={val.id}
      val={val}
      name={val.name}
      setRelated={setRelated}
      image={val.images?.[0]}
    />
  ));

  return (
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 ">
        {relatedObj}
      </div>
    </div>
  );
}

export default RelatedArtistsPage;
