import { Router } from 'express';
import {
    getAllMuralsController,
    getMuralsByMuralRouteRouteIdController,
    getMuralsOrderedByMostLikedController
} from '../controllers/mural.controller';


const router = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)

router.route("/bylikes").get(getMuralsOrderedByMostLikedController)
router.route("/:orderBy").get(getAllMuralsController)
router.route("/").get(getAllMuralsController)
router.route("/byRouteId/:routeId").get(getMuralsByMuralRouteRouteIdController)
export default router;