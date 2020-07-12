const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const Port = 4000 || process.env
const routes = require("./Input")

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()) // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})

app.use("/", routes)

app.listen(Port, () => {
  console.log("Server is running at " + Port)
})
