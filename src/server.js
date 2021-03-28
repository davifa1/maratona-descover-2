const express = require('express');
const server = express();
const routes = require('./router');

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.use(routes)

server.listen(3000)