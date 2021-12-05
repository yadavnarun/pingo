import React, { useState } from "react";
import "../App.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Branding from "./branding/branding";
import Button from "./button/button";
// import { MdArrowRightAlt } from "react-icons/md";

const createGame = () => {};

const Landing = ({ clientId }) => {
  //   const [gameId, setGameId] = useState("");

  return (
    <>
      <Branding />
      <div className="content">
        <Button
          text="Create"
          click={() => {
            alert("res");
          }}
        />
        <Button
          text="Join"
          click={() => {
            alert("res");
          }}
        />
      </div>
      <div className="content-2">
        <input className="input" type="text" name="text" />
        <button class="submit-button">
          <ArrowForwardIcon />
        </button>
      </div>
    </>
  );
};

export default Landing;
