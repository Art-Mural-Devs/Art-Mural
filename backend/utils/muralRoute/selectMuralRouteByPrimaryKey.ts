import { connect } from "../../src/database";
import {MuralRoute} from "../interfaces/muralRoute";

export async function selectMuralRouteByPrimaryKey (muralRoute: MuralRoute) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT FROM muralRoute WHERE muralRouteMuralId = UUID_TO_BIN(:muralRouteMuralId) AND muralRouteRouteId = UUID_TO_BIN(:muralRouteRouteId)";
        const [rows] = await mySqlConnection.execute(mySqlQuery)
    } catch(error) {
        console.log(error)
    }
}
