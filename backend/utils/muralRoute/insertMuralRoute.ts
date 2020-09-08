import {MuralRoute} from "../interfaces/MuralRoute";
import {connect} from "../../src/database";

export async function insertMuralRoute() {
    try {
        const mysqlConnection = await connect()
        const query : string =  "INSERT INTO muralRoute (muralRouteMuralId, muralRouteRouteId) VALUES(UUID_TO_BIN(:muralId),UUID_TO_BIN(:routeId))";

        const [rows] = await mysqlConnection.execute(query)
        return "muralRoute created successfully"
    } catch (error) {
        console.log(error)
    }
}