import {Route} from "../interfaces/RouteMural";
import {connect} from "../../src/database";

export async function insertRouteMural(routeMural: RouteMural) {
    try {
        const mysqlConnection = await connect()
        const query : string =  "INSERT INTO routeMural (routeMuralId, routeMuralImageUrl, routeMuralName, routeMuralNeighbourhoodLat, routeMuralNeighbourhoodLong, route ) VALUES(UUID_TO_BIN(UUID()), :routeMuralId, :routeMuralImageUrl, :routeMuralName, :routeMuralNeighbourhoodLat, :routeMuralNeighbourhoodLong)";

        const [rows] = await mysqlConnection.execute(query, routeMural)
        return "RouteMural created successfully"
    } catch (error) {
        console.log(error)
    }
}