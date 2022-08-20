import React, { useState, useEffect } from "react";
import "../App.css";
import { Card } from "antd";
const { Meta } = Card;

function RelatedArtistsCard({ val, name, image, setArtist, increment }) {
  function clicked() {
    setArtist(val);
    increment();
  }

  return (
    <div class="flex justify-center w-48">
      <Card
        style={{
          width: 200,
        }}
        onClick={() => clicked()}
        cover={<img alt="example" src={image.url} />}
      >
        <Meta title={name} />
        <p>
          {val?.name === undefined
            ? "Search Valid Artist"
            : val?.genres.join(", ")}
        </p>
      </Card>
    </div>
  );
}

export default RelatedArtistsCard;
