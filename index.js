require('dotenv').config()
const express = require('express')

const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('chandan954629.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>please be greatfull</h1>')
})

app.get('/youtub', (req, res) => {
    res.send('<h3>Chandan-dev and code</h3>');
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})