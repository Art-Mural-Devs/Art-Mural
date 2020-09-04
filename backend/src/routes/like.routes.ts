import { Router } from 'express';
import {toggleLikeController} from "../controllers/like.controller";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";

const router = Router();

router.route('/').post(isLoggedIn, toggleLikeController);

export default router;
