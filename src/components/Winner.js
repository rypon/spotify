import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

function Winner({ startArtist, secondArtist, guess, LanderStatus }) {
  return (
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <div className="w-[75%]">
        <p style={{ fontSize: "64px", textAlign: "center" }}>Winner!</p>
        <p style={{ fontSize: "36px", textAlign: "center" }}>
          Your route from {startArtist.name} to {secondArtist.name} took you{" "}
          {guess} moves.
        </p>
        <div className="flex items-center justify-center">
          <Link to="/" style={{ display: "contents" }}>
            <AiFillHome className="button" onClick={() => LanderStatus()} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Winner;
