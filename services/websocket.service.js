import { WebSocketServer, WebSocket } from "ws";
import IntervalService from "./interval.service.js";
export default class WebSocketService{
    wss
    clients = {}
    intervalMap = {}

    constructor(){
        this.startServer({port: 8080})
        this.openConnection((clientId)=>{
           let count = 0 
            this.intervalMap[clientId] = setInterval(()=>{
               count ++ 
                this.sendMessage('message ' + count)
               },5000)
               this.clients[clientId].on('close', () => {
                  clearInterval(this.intervalMap[clientId])
                });
        })
    }
    startServer(options){
         this.wss = new WebSocketServer(options);
    }

    openConnection(cb){
            this.wss.on('connection', (ws) => {
                ws.id = IntervalService.getRandomNumberInRange(1,400)
                this.clients[ws.id] = ws
            cb(ws.id)
        })
    }

    sendMessage(message){
        this.wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(message.toString());
            }
          }); 
    }
}