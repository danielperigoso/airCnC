const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket => {
    
});

mongoose.connect('mongodb+srv://weblogic:88888888@cluster0-cyvkf.mongodb.net/omnistack09?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true,

});

// req.query = Acessar query params
// req.params = Acessar route params
// req.body = Acessar corpo da requisição
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);
server.listen(5555);