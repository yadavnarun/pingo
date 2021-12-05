import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Landing = () =>{

    let history = useNavigate();
    const redirect = () =>{
        history('./game');
    }

    return (
        <> 
        <h1 className="title"> PINGO  <p className="sub-title"> By Webazoid</p> </h1>
        <div className="content">
        <button className="create-button" onClick={redirect} > Create</button>
        <button className="join-button" onClick={redirect}> Join </button>
         </div>

        <div className="content-2">
        <input className="input" type="text" name="text" />
        <button className="submit-button"> <ArrowForwardIcon/> </button>
        </div>
      
        
        </>
    )

}

export default Landing;