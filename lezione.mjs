import { createServer } from "node:http";

const server = createServer(async (req, res) => {
  console.log(req.url);
  console.log(req.method);

  if (req.url === "/") {
    try {
      const data = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      const resp = await data.json();
      console.log(resp);
      res.writeHead(200, "Content-type", "application/json");
      res.end(JSON.stringify(resp));
    } catch (error) {
      console.log(error);
      res.writeHead(500, "Content-type", "text/plain");
      res.end("server error");
    }
  } else if (req.url === "/bulbasaur") {
    try {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const resp = await data.json();
      console.log(resp);
      res.writeHead(200, "Content-type", "application/json");
      res.end(JSON.stringify(resp));
    } catch (error) {
      console.log(error);
      res.writeHead(500, "Content-type", "text/plain");
      res.end("server error");
    }
  }else {
    res.writeHead(404,"content-type,text/html")
    res.end("<h1>Page not Found</h1>")
  }
});

server.listen(3000, () => {
  console.log(`server avviato on http://localhost:3000`);
});
