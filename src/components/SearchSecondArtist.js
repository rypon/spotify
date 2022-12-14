import React from "react";
import "../App.css";
import { Input, Space, Card } from "antd";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

const { Search } = Input;
const { Meta } = Card;

function SearchSecondArtist({
  setSecondSearchInput,
  secondSearch,
  secondArtist,
  LanderStatus,
}) {
  const invalidImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAhFBMVEX///8rKikAAAAoJyb7+/vo6OgyMTBLSkklJCMiISAQDgz39/cTEQ+3t7ceHRwWFRPe3t4bGRjv7+9TUlFycXEJBgE5ODefn56JiIhiYWHq6up6enppaWjAwMCioaHV1dWDgoLJycmrq6uVlZVEQ0KHh4eSkpI2NTRMS0qqqqlubW0/Pj3ClDLdAAAEZ0lEQVR4nO3bbXuaMBQGYBqwJrxKgSqtVp2snfb//79VXddtnoMgShby3J/NdYXHkHccBwAAAAAAAAAAAAAAAAAAAAAAwHwPy2g6y8tsXFXjrMy/T6P1SHedeuStN6Uv/DCNlZLSdaWUKk4TX4hqFdkQxNM2E34q70hunIh4tdZdx9uKMsE9/1cOvnhe6q7orXibMDwTwC+xeF/oru1NbETaKIAD6d8PL4WFSponcHgnimqiu9JXFZTCbRfBvi2I77rrfUXrULVOYC99G8xQubmgEXw2hUh35a8jLy5MYE+86q7+NZQtO8N/FM+6H6C7rMWISApz3Y/QVdk1go8QDG8JebcX4cg3uk+YdukOv5g8OizFuadzpfogz42dwth5gpfWPptMCiGz+W43z1xRJHXTKPde97NcKo9rnioR5Xbp/f7tJNqJkI8snWl8jg7W/Jvghu42OCkQvftsCsLMBdQb+0Aq/EYXWSiu6cis38pfR+RzERRzjy0150oJE7fY7rhmILZ1xTbMG2RiQ1iwf+iZDaIXJgQDe4SM2To8F4HjzOi5ZWzcjsoT82/60/Nlf5Dxuenta31dL/RaSZUNyo7o/ArTdtzp//JOnM4KCCtyhEwbNKH/SUD/lclLo9J0Q5BN2tB/ZE2OCq5qWJxuReFNq3x1U7I7SGpnBmeLi4eb1vnaduQqUDQtTjejwqwZwiM1SYxXTYuPyL0X36zpMtmpNR/cHsjyoVFHkIGI1UlLaDHJYTIwakst2M52lS8KP/kji+avAjM4mpXBUTBZf3vdVeExC9miKdN9olnvwt8OWeTjFkMbPdP2TZssd0IvOg2bH3TDLDp93fXqE71mMm290Amzdk6bLbiGYcysu82aKneyovfSzD1rau+VOae16FWYcadTzbaghuCZ25KPDT1xbI+/vGRLMwgq9qQ6NGxD9VIjxd5BkI+6K9ePdc1VTkvmBtOaizuCOasfmLrbrInht/OaCaqae4yxgcfu7U3SmhtZyor+cFF3sV3e2TAz4G5dHCOQNuwesSuEQwTKhgjYFcIhAteGCPKwJgJ1b0NfUBtB/M5f4huOVV0EqRXzgtq7/eFcd/X6sKgbEQb1dSOL2UP/FUHTOytme+S/AHeNvJ7c3iv/rZOK7dgvqHkT0sqGacGHkl0q+lYMCB8mbDMQ1uyiP3PNQFhznuSxx0kGXjq60IKZJFsUgZPTr4IlG8hH9NwgtKY7dLjJgbJiofgpIrsDW85VjzbU4appH6p0RN7tt+r+oeNUxIGCiV9xdkF1B/FGd636RQ0LJl/JvgD52Zthn+p0RX6jYVmXSF7KbvzF1zCQGRj2+WJX1LvgSt216heZgUX3kffIDKy4bvIlEPKEsqwdeG/jU5ZNlQEAAOAfI5ruavXJEzTd9eoTc+KKDJABMkAGyAAZIANkgAyQATJABsjAQQZ7yAAZ7CEDZLCHDJDBnidcil0ZhPcUy24kAQAAAAAAAAAAAAAAAAAAAADAsPwE7eo0R45Or2sAAAAASUVORK5CYII=";

  return (
    <div>
      <p className="title w-fit mx-auto mt-5 mb-5">Ending Point</p>
      <div class="w-fit mx-auto">
        <Space direction="vertical">
          <Search
            className="place-self-center"
            placeholder="Search seconding Artist"
            onSearch={() => secondSearch()}
            style={{
              width: 200,
              margin: "5px",
            }}
            onChange={(event) => setSecondSearchInput(event.target.value)}
          />
        </Space>
      </div>
      <div className="w-fit mx-auto">
        <Card
          style={{
            width: 300,
          }}
          bodyStyle={{ backgroundColor: "#191414", color: "#C7C7C7" }}
          cover={
            <img
              alt="example"
              src={
                secondArtist?.images === undefined ||
                secondArtist?.images.length === 0
                  ? invalidImage
                  : secondArtist?.images[0].url
              }
            />
          }
          bordered={false}
        >
          <p className="card-p-title">
            {secondArtist?.name === undefined
              ? "Search Valid Artist"
              : secondArtist?.name}
          </p>
          <p>
            {secondArtist?.name === undefined
              ? "Search Valid Artist"
              : secondArtist?.genres.join(", ")}
          </p>
        </Card>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <Link to="/first-search" style={{ display: "contents" }}>
            <BsArrowLeft className="button" />
          </Link>
          <Link to="/" style={{ display: "contents" }}>
            <AiFillHome className="button" onClick={() => LanderStatus()} />
          </Link>
          <Link to="/play" style={{ display: "contents" }}>
            <BsArrowRight className="button" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchSecondArtist;
