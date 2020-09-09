import { Router } from 'express';
import {getAllMuralsController, getMuralsOrderedByMostLikedController, getMuralsByMuralRouteRouteIdController} from '../controllers/mural.controller';


const router = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)

router.route("/bylikes").get(getMuralsOrderedByMostLikedController)
router.route("/:orderBy").get(getAllMuralsController)
router.route("/").get(getAllMuralsController)
// router.route("/byyear").get(getMuralsOrderedByCreationYearController)
// router.route("/byartist").get(getMuralsOrderedByMuralArtistController)
// router.route("/bytitle").get(getMuralsOrderedByMuralTitleController)
router.route("/byRouteId/:routeId").get(getMuralsByMuralRouteRouteIdController)
export default router;