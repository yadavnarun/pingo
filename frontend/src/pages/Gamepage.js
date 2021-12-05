import React from "react";
import { useNavigate } from "react-router-dom";
import Branding from "../components/branding/branding";
import Button from "../components/button/button";

const Gamepage = () => {
  let history = useNavigate();
  const exit = () => {
    history("/");
  };
  return (
    <>
    <Branding />
      <div className="content">
        <div class="cards">
          <div class="cards__item">player 1</div>
          <div class="cards__item">player 2</div>
        </div>
        {/* <button className="exit-button" onClick={exit}>
          Exit Game
        </button> */}
           <Button
          text="Exit"
          click={exit}
        />
      </div>
    </>
  );
};

export default Gamepage;
