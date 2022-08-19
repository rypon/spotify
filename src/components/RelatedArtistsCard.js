import React, { useState, useEffect } from "react";
import "../App.css";
import { Card } from "antd";
const { Meta } = Card;

function RelatedArtistsCard({
  val,
  name,
  image,
  artist,
  setArtist,
  increment,
  count,
}) {
  const [newCount, setNewCount] = useState(0);
  // useEffect(() => {
  //   // setArtist(val);
  //   console.log(artist.name);
  // }, [clicked]);

  function clicked() {
    console.log(val);
    setArtist(val);
    increment();
  }
  console.log(artist.name);

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
      </Card>
    </div>
  );
}

export default RelatedArtistsCard;
