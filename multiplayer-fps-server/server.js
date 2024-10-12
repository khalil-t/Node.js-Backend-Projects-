
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app); 
const io = new Server(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
}

)


let players={}
//player connection 
io.on("connection", (socket)=>{
 
    console.log(`Player connected: ${socket.id}`)


    players[socket.id] = { x: 0, y: 0, hp: 100 };


    socket.broadcast.emit('newplayer',{

        id: socket.id,
        x: players[socket.id].x,
        y: players[socket.id].y,
        hp: players[socket.id].hp
    })
    console.log('new player join the game')

//player movement 
    socket.on('move' , (data)=>{
        players[socket.id].x=data.x
        players[socket.id].y=data.y
        socket.broadcast.emit('playermoved', {
            id: socket.id, x: data.x, y: data.y
        })
    })
    

//player shoots 
    socket.on('shoot' ,(targetId)=>{
    
    players[targetId].hp -= 10
    
    if(players[targetId].hp<=0){
        io.emit('player died' , {
            id: targetId         })
    }
    })
//player disconnect
    socket.on('disconnect' ,() => {
        console.log(`Player disconnected: ${socket.id}`);
        delete players[socket.id];
        io.emit('playerDisconnected', { id: socket.id });
    } )
})


