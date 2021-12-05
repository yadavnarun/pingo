
import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Branding from "../components/branding/branding";
import Button from "../components/button/button";


const Landing = ({ clientId }) =>{
    const createGame = () => {};

  //   const [gameId, setGameId] = useState("");

    let history = useNavigate();
    const redirect = () =>{
        history('./game');
    }
    

    return (
        <> 
             <Branding />
        <div className="content">
        <Button
          text="Create"
          click={redirect}
        />
        <Button
          text="Join"
          click={redirect}
        />
        {/* <button className="create-button" onClick={redirect} > Create</button>
        <button className="join-button" onClick={redirect}> Join </button> */}
         </div>

        <div className="content-2">
        <input className="input" type="text" name="text" />
        <button className="submit-button"> <ArrowForwardIcon/> </button>
        </div>
      
        
        </>
    )





  
};


export default Landing;
