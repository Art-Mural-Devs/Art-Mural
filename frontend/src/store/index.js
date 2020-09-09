import {combineReducers} from "redux"
import murals from "./murals";
import profile from "./profile";
import  routes from "./route"
import muralRoutes from "./muralRoute"
import auth from "./auth"
export default combineReducers({routes, muralRoutes, murals, profile, auth})
