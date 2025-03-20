import express from "express";
import WebSocketService from "./services/websocket.service.js";
import cors from 'cors';
import usersRouter from "./users/users.router.js";
import companiesRouter from "./companies/companies.router.js";
import addressesRouter from "./addresses/addresses.router.js";
import productsRouter from "./products/products.router.js";

// let intervalMap = {}
const webSocketService = new WebSocketService()

//  webSocketService.startServer({port: 8080})
//  webSocketService.openConnection((clientId)=>{
//     let count = 0 
//      intervalMap[clientId] = setInterval(()=>{
//         count ++ 
//          webSocketService.sendMessage('message ' + count)
//         },5000)
//         webSocketService.clients[clientId].on('close', () => {
//            clearInterval(intervalMap[clientId])
//          });
//  })

const app = express();
const port = 3000;
app.use(cors())

app.use("/users", usersRouter);

app.use("/addresses", addressesRouter);

app.use("/companies", companiesRouter);

app.use("/products",productsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
