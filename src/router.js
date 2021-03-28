const express = require('express');
const routes = express.Router();

const view = __dirname + "/views/"

const profile = {
    name: "Davi Henrique",
    avatar: "https://avatars.githubusercontent.com/u/63513686?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 4,
    "vacation-per-year": 4,
}

routes.get('/', (req, res) => {
    return res.render(view + 'index')
})

routes.get('/job', (req, res) => {
    return res.render(view + 'job')
})
routes.get('/job/edit', (req, res) => {
    return res.render(view + 'job-edit')
})
routes.get('/profile', (req, res) => {
    return res.render(view + 'profile', { profile })
})

module.exports = routes