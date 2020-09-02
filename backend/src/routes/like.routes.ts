import { Router } from 'express';
import {toggleLikeController} from "../controllers/like.controller";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";

const router = Router();

router.route('/').get(isLoggedIn, toggleLikeController);

export default router;
