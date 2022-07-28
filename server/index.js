const express = require('express')
const path = require('path')
const app = express()

//devops lab
require('dotenv').config()
app.use(express.json())


app.use(express.static(path.join(__dirname, "/../public")))

app.get('/', function(req,res) {
    res.sendFile(path.resolve('public/index.html'))
})

var Rollbar = require('rollbar')
var rollbar = new Rollbar ({
    accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
})

rollbar.log('Hello world!')
rollbar.log('Rollbar testing')

const port = process.env.PORT || 4006

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})