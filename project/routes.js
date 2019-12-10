const express = require("express")
const Router = express.Router()
const Controller = require("./controller")



Router
    .route("/")
    .get(Controller.getdata)
    .post(Controller.createdata)
    .delete(Controller.deleteAll)
Router
    .route("/:id")
    .get(Controller.find)
    .patch(Controller.updatedata)
    .delete(Controller.deleteOne)

module.exports = Router