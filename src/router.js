const express = require('express');
const routes = express.Router();

const view = __dirname + "/views/"

const profile = {
    name: "Davi Henrique",
    avatar: "https://github.com/davifa1.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 4,
    "vacation-per-year": 4,
}

// ESTRUTURA DE DADOS:
//array
//objetp

const jobs = []

//criar as rotas

//request / response
routes.get('/', (req, res) => {
    return res.render(view + 'index')
})

routes.get('/job', (req, res) => {
    return res.render(view + 'job')
})
routes.post('/job', (req, res) => {
    //PUSH(colocar/enviar/enpurar ):
    //colocar coisas dentro do array
    jobs.push(req.body)
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => {
    return res.render(view + 'job-edit')
})
routes.get('/profile', (req, res) => {
    return res.render(view + 'profile', { profile })
})

// exportar para as rotas para para todo o projeto
module.exports = routes