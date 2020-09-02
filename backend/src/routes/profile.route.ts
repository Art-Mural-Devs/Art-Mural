import {Router} from "express";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {profileValidator} from "../validators/profile.validator";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";
import {
    getAllProfilesController,
    getProfileByProfileIdController,
    putProfileController
} from "../controllers/profile.controller";
import {getProfileByProfileEmail} from "../lib/getProfileByProfileEmail";

const {checkSchema} = require("express-validator");
export const ProfileRoute = Router()



ProfileRoute.route("/:profileId")
    .get(getProfileByProfileIdController)
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)
ProfileRoute.route("/")
    .get(getAllProfilesController)