const express = require("express")
const router = express.Router()
const controller = require("./FileController")

router.get("/Status", controller.getStatus)
router.post("/upload-file", controller.postFile)

module.exports = router
