import React, { useState, useEffect } from "react";
import "../App.css";
import { Input, Space, Avatar, Card } from "antd";
const { Search } = Input;
const { Meta } = Card;

const onSearch = (value) => console.log(value);

function SearchFirstArtist() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <div>
        <Space direction="vertical">
          <Search
            placeholder="Search Starting Artist"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </Space>
      </div>
      <div>
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
    </div>
  );
}

export default SearchFirstArtist;
