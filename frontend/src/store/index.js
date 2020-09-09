import {combineReducers} from "redux"
import murals from "./murals";
import profile from "./profile";
import  routes from "./route"
import muralRoutes from "./muralRoute"
export default combineReducers({routes, muralRoutes, murals, profile})
