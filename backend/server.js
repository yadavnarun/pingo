const http = require("http");
const websocketServer = require("websocket").server;
const httpServer = http.createServer();
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz", 9);
httpServer.listen(9090, () => console.log("Listening.. on 9090"));
const clients = {};
const games = {};

const wss = new websocketServer({
  httpServer: httpServer,
});

wss.on("request", (request) => {
  const connection = request.accept(null, request.origin);
  connection.on("open", () => console.log("opened!"));
  connection.on("close", () => console.log("closed!"));
  connection.on("message", (message) => {
    console.log("clients:", clients);
    console.log("games:", games);

    const result = JSON.parse(message.utf8Data);

    if (result.method === "connect") {
      const clientId = nanoid();
      console.log("connect", clientId);

      clients[clientId] = {
        connection: connection,
      };

      const payLoad = {
        method: "connect",
        clientId: clientId,
      };

      connection.send(JSON.stringify(payLoad));
    } else if (result.method === "createGame") {
      const gameId = nanoid();
      console.log("createGame", gameId);
      const clientId = result.clientId;

      games[gameId] = {
        gameId: gameId,
        clients: [],
      };

      const payLoad = {
        method: "createGame",
        game: games[gameId],
      };

      const con = clients[clientId].connection;
      con.send(JSON.stringify(payLoad));
    } else if (result.method === "joinGame") {
      const clientId = result.clientId;
      const gameId = result.gameId;
      const game = games[gameId];
      if (game.clients.length >= 2) {
        //sorry max players reach
        return;
      }
      game.clients.push({
        clientId: clientId,
      });

      // if (game.clients.length === 2) updateGameState();

      const payLoad = {
        method: "joinGame",
        game: game,
      };

      game.clients.forEach((c) => {
        clients[c.clientId].connection.send(JSON.stringify(payLoad));
      });
    }
  });
});
