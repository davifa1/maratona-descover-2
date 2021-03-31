const express = require('express');
const server = express();
const routes = require('./router');

// USE: colocar/abilitar configuraçao no server

// usar o motor de view o ejs
server.set('view engine', 'ejs')
// habilitar arquivos static
server.use(express.static('public'))
//usar o req.body
server.use(express.urlencoded({ extended: true }))
// chamar as rotas
server.use(routes)
// ligar o servidor
server.listen(3000)