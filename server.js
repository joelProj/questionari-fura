const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

async function startServer(){
    try{
        console.log("Connecting to database...");
        connectDB();
        console.log("Database connected...");
        
        console.log("Connecting to server...");
        const server = http.createServer(app);
        
        server.listen(port);
        console.log("Server connected...");
    }
    catch(err){
        console.log(err);
    }
}

async function connectDB(){
    //connectar client a bd i generar estructura inicial
}

//START SERVER + DB
startServer();