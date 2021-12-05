
import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing'
import Gamepage from './pages/Gamepage';


function App() {

  const ws = new WebSocket("ws://localhost:9090/");


  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        method: "connect",
      })
    );
  };

  let clientId;

  ws.onmessage = (message) => {
    const response = JSON.parse(message.data);
    if (response.method === "connect") {
      // console.log(response.data);
      clientId = response.data.clientId;
    }
  };
  
  return (
    <>  
  
    <Routes>
      <Route exact path="/" element={   <Landing cliendId={clientId} />} />
      <Route exact path="/game" element={<Gamepage />} />
    </Routes>
    
    </>
  )
    



}

export default App;
