import React from "react";
import { useNavigate } from "react-router-dom";
import Branding from "../components/branding/branding";
import Button from "../components/button/button";

const Gamepage = ({ ws, cliendId, game, setGame }) => {
  let navigate = useNavigate();
  const exit = () => {
    setGame(null);
    navigate("/");
  };

  return (
    <>
      <Branding />
      <div className="content">
        <div className="cards">
          <div className="cards__item">player 1</div>
          <div className="cards__item">player 2</div>
        </div>
        <Button text="Exit" click={() => exit()} />
      </div>
    </>
  );
};

export default Gamepage;
