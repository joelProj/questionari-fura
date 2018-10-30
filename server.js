const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
global.Promise = require('bluebird');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

const port = process.env.PORT || 3000;



async function startServer(){
    try{
        await connectDB();
        
        console.log("Connecting to server...");
        const server = http.createServer(app);

        server.listen(port);
        console.log("Server connected");
    }
    catch(err){
        console.log(err);
    }
}

const onDbConnecting = () => console.log('Connecting to database...');
const onDbConnected = () => console.log('Database connected');

async function connectDB(){   
    try{
        db.on('connecting', onDbConnecting);
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', onDbConnected);
        await mongoose.connect("mongodb://localhost/DB-fura");
    }
    catch(err){
        console.log(err);
    }
}

//START SERVER + DB
startServer();