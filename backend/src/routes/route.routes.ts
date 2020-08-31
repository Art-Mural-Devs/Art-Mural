import { Router } from 'express';
import {getAllRoutesController, selectRouteByRouteIdController} from "../controllers/route.controller";
// const { checkSchema } = require('express-validator');

const router = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/routeId/:routeId')
    .get(selectRouteByRouteIdController)

router.route('/')
    .get(getAllRoutesController)


export default router;

