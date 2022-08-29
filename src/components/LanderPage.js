import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function LanderPage({ setShowLander, showLander, LanderStatus }) {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="grid justify-items-center">
        <div className="text-9xl ">MusicRoute</div>
        <div className="text-2xl mt-5">
          Find your way from one artist to another through Spotify's recommended
          artist algorithm!
        </div>
        <Link to="/first-search" style={{ display: "contents" }}>
          <button className="button" onClick={() => LanderStatus()}>
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LanderPage;
