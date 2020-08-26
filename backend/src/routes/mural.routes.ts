import { Router } from 'express';
import {
    getAllMuralsController,
    getMuralsByMostLikedController
} from '../controllers/mural.controller';


const router = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)

router.route("/").get(getMuralsByMostLikedController)
router.route("/").get(getAllMuralsController)
export default router;