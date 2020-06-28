const express = require('express')
const app = express()
const Port = 3000 || process.env

app.listen(Port, ()=>{ console.log("Server is running at "+ Port)})
