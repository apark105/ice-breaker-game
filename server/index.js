const express = require("express");
const cors = require("cors");
// const http = require("http");
// const socketIO = require("socket.io");
const path = require('path')

const pool = require("./db")

const port = 5000 || process.env.PORT 
const app = express();

// let server = require("http").createServer(app);
// const io = socketIO(server);

// io.on('connection', (socket) => {
//     console.log('a new user connected')
// })




// const content = require('fs').readFileSync(__dirname + '/../index.html', 'utf8');

// const httpServer = require('http').createServer((req, res) => {
//   // serve the index.html file
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Content-Length', Buffer.byteLength(content));
//   res.end(content);
// });

// const io = require('socket.io')(httpServer);

// io.on('connection', socket => {
//     console.log('connect');
//   });
  
//   httpServer.listen(5000, () => {
//     console.log('go to http://localhost:5000');
//   });


//middleware 
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../index.html")))


//ROUTES//



//get all data 

app.get("/listOfQuestions", async (req, res) => {
    try {
        const allQuestions = await pool.query("SELECT * FROM DATE_GAME") 
        res.json(allQuestions.rows)
    } catch (err) {
        console.error(err.message)

    }
})


app.listen(port, ()=>{
    console.log('Server has started on port ' + port)
})