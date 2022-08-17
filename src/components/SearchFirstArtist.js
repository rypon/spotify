import React, { useState, useEffect } from "react";
import "../App.css";
import { Input, Space, Card } from "antd";
const { Search } = Input;
const { Meta } = Card;

function SearchFirstArtist({
  setSearchInput,
  onSearch,
  artistImage,
  artistName,
}) {
  return (
    <div class=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
      <div class="flex flex-col items-start mx-10">
        <Space direction="vertical">
          <Search
            className="place-self-center"
            placeholder="Search Starting Artist"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </Space>
      </div>
      <div class="mx-10">
        <Card
          style={{
            width: 300,
          }}
          cover={<img alt="example" src={artistImage} />}
        >
          <Meta title={artistName} />
        </Card>
      </div>
    </div>
  );
}

export default SearchFirstArtist;
