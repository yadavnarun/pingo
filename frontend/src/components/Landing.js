import React from 'react';
import '../App.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Landing = () =>{
    return (
        <>
        <h1 className="title"> PINGO  <p className="sub-title"> By Webazoid</p> </h1>
        <div className="content">
        <button class="create-button"> Create</button>
        <button class="join-button"> Join </button>
        </div>
        <div className="content-2">
        <input className="input" type="text" name="text" />
        <button class="submit-button">  </button>
        </div>
       
        
        </>
    )

}

export default Landing;