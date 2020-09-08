import { Router } from 'express';
import {
    getAllRoutesController, insertRouteController,
    // insertRouteController,
    selectRouteByRouteIdController
} from "../controllers/route.controller";
import {asyncValidatorController} from "../controllers/asyncValidatorController";
import {check} from "express-validator";
import {routeValidator} from "../Validators/route.validator";
const { checkSchema } = require('express-validator');

const router = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/routeId/:routeId')
    .get(asyncValidatorController([check("routeId", "Please provide a valid UUID for routeId").isUUID()]), selectRouteByRouteIdController)

router.route('/')
    .get(getAllRoutesController)
    // .post(asyncValidatorController(checkSchema(routeValidator)), insertRouteController)

export default router;