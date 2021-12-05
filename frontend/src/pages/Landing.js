import React, { useRef } from "react";
import "../App.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Branding from "../components/branding/branding";
import Button from "../components/button/button";

const Landing = ({ handelGame }) => {
  const input = useRef("");

  return (
    <>
      <Branding />
      <div className="content">
        <Button text="Create" click={() => handelGame("create")} />
      </div>

      <div className="content-2">
        <input
          className="input"
          type="text"
          name="gameId"
          placeholder="enter game code"
          ref={input}
        />
        <Button
          text={<ArrowForwardIcon />}
          className="submit-button"
          click={() => handelGame("join", input.current.value)}
          type="small"
        />
      </div>
    </>
  );
};

export default Landing;
