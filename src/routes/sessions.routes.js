const knex = require("../database/knex")
const AppError = require("../utils/AppError")

const { Router } = require("express")

const SessionsController = require("../controllers/SessionsController")
const sessionsController = new SessionsController()

const sessionsRoutes = Router()

sessionsRoutes.post("/", sessionsController.create)

module.exports = sessionsRoutes