import {Router} from "express"
import {indexController} from '../controllers/index.controller'

export const indexRoute = Router()

indexRoute.route("/")
    .get(indexController)