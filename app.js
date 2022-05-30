const express = require("express");
let accountsRoutes = require("./api/accounts");
const app = express();

const port = 8000;
const dataroute = "/api/accounts";

app.use(express.json());

app.use(dataroute, accountsRoutes);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
