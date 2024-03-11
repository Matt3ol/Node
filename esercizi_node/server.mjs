import { createServer } from "node:http";

const server = createServer((req, res) => {
  //request object is an incoming message class.response is another object and is a server response that passes through a callback func
  console.log("request received");
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end(
    "<html><body><h1>This page was served with Node.js!</h1><body><html>"
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
