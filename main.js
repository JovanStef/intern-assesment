import express from "express";
import WebSocketService from "./services/websocket.service.js";
import cors from 'cors';
import usersRouter from "./users/users.router.js";
import companiesRouter from "./companies/companies.router.js";
import addressesRouter from "./addresses/addresses.router.js";
import productsRouter from "./products/products.router.js";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webSocketService = new WebSocketService()

const app = express();
const port = 3000;
app.use(cors())

app.use("/users", usersRouter);

app.use("/addresses", addressesRouter);

app.use("/companies", companiesRouter);

app.use("/products",productsRouter)

app.get('/', function(req, res){
  res.sendFile(`${__dirname}/index.html`);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
