import "./App.css";
import Landing from "./components/Landing";

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
      <Landing cliendId={clientId} />
    </>
  );
}

export default App;
