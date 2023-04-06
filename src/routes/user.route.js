const route = require("express").Router();
const userController = require("../controllers/user.controllers")


route.get("/", userController.soma)

module.exports = route