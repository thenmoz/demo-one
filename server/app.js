const express = require('express')
const users = require('./db.json')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(port, () => {
    console.log(`Starting node add port : ${port}`);
})