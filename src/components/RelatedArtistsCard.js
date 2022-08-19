import React, { useState } from "react";
import "../App.css";
import { Card } from "antd";
const { Meta } = Card;

function RelatedArtistsCard({ val, name, image }) {
  const [newRelatedArtist, setNewRelatedArtist] = useState([]);
  console.log(newRelatedArtist);

  return (
    <div class="flex justify-center w-48">
      <Card
        style={{
          width: 200,
        }}
        onClick={() => setNewRelatedArtist(val)}
        cover={<img alt="example" src={image.url} />}
      >
        <Meta title={name} />
      </Card>
    </div>
  );
}

export default RelatedArtistsCard;
