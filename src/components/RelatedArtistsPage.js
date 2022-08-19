import React from "react";
import "../App.css";
import RelatedArtistsCard from "./RelatedArtistsCard";
import { Card, Col, Row } from "antd";

function RelatedArtistsPage({ related }) {
  const relatedObj = related?.map((val) => (
    <RelatedArtistsCard
      key={val.id}
      val={val}
      name={val.name}
      image={val.images?.[0]}
    />
  ));

  return (
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 ">
        {relatedObj}
      </div>
    </div>
  );
}

export default RelatedArtistsPage;
