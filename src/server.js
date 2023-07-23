require("dotenv").config();
const http = require("http");
const app = require("./app");

const createServer = http.createServer(app);
const PORT = process.env.PORT || 5000;

createServer.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
