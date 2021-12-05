import React from "react";
import { useNavigate } from "react-router-dom";

const Gamepage = () => {
  let history = useNavigate();
  const exit = () => {
    history("/");
  };
  return (
    <>
      <h1 className="title">
    
        PINGO <p className="sub-title"> By Webazoid</p>
      </h1>
      <div className="content">
        <div class="cards">
          <div class="cards__item">player 1</div>
          <div class="cards__item">player 2</div>
        </div>
        <button className="exit-button" onClick={exit}>
          Exit Game
        </button>
      </div>
    </>
  );
};

export default Gamepage;
