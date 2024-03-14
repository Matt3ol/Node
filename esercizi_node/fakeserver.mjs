import { createServer } from "node:http";


const server = createServer((req, res) => {
 console.log(`Method: ${req.method}, URL:${req.url}`)

server.listen(3000, () => {
  console.log("Server listening http://localhost:3000");
});
