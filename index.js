const express = require('express');
const cors = require('cors');
const friendsRouter = require('./routes/friends.js');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/friends', friendsRouter);


server.listen(4040, () => console.log('Server started on port 4040'));
