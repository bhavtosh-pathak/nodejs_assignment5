import net from 'net'
const client=net.createConnection({port:3000},()=>{
    console.log('connected with the chat server');
});
client.on('data',(data)=>{
    console.log(data.toString().trim());
});
client.on('end',()=>{
    console.log('discoonected from server');
});
process.stdin.on('data',(input)=>{
    client.write(input.toString().trim());
})
