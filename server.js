import net from 'net'
const arr=[];
const server = net.createServer((socket)=>{
    console.log("client is connected.",socket.remoteAddress());
    arr.push(socket);
    socket.on('data',(data)=>{
        const message=data.toString().trim();
        console.log('message from:',socket.remoteAddress + ':',message);
        arr.forEach((client)=>{
            if(client!=socket){
                client.write(`message from ${socket.remoteAddress}:${message}`);
            }
        });
    });
    socket.on('end',()=>{
        console.log('client disconnected',socket.remoteAddress);
        arr.splice(arr.indexOf(socket),1);
    });
    socket.on('error',(err)=>{
        console.log('error is',err.message);
    });
});
server.listen(3000,()=>{
    console.log('server started on 3000');
});
