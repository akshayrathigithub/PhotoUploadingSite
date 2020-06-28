const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const Port = 3000 || process.env

app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})

app.listen(Port, () => {
  console.log("Server is running at " + Port)
})
