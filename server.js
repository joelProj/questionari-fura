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
        await mongoose.connect("mongodb://localhost/fura-testing");
    }
    catch(err){
        console.log(err);
    }
}

//START SERVER + DB
startServer();






// CREATE TABLE PREGUNTES (
//     ID_PREGUNTA INTEGER NOT NULL,
//     TEXTE VARCHAR(100) NOT NULL,
//     GRUP CHAR(2)NOT NULL,
//     ID_RESPOSTA INTEGER NOT NULL UNIQUE,
//     FECHA DATETIME NOT NULL,
//     PRIMARY KEY ID_PREGUNTA,
//     FOREIGN KEY (ID_RESPOSTA) REFERENCES RESPOSTES (ID_RESPOSTA)
//     );
    
// CREATE TABLE RESPOSTES (
//     ID_RESPOSTA INTEGER NOT NULL,
//     TEXTE VARCHAR(50) NOT NULL,
//     ID_DEVICE VARCHAR(50) NOT NULL UNIQUE,
//     CONSTRAINT RESPOSTA_DEVICE UNIQUE (ID_RESPOSTA,ID_DEVICE)
//     );