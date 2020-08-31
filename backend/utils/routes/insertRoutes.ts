import {Route} from "../interfaces/Route";
import {connect} from "../../src/database";

export async function insertRoutes(route: Route) {
    try {
        const mysqlConnection = await connect()
        const query : string =  "INSERT INTO route (routeId, routeContent, routeImageUrl, routeName, routeNeighbourhoodLat, routeNeighbourhoodLong, route ) VALUES(UUID_TO_BIN(UUID()), :routeId, :routeContent, :routeImageUrl, :routeName, :routeNeighbourhoodLat, :routeNeighbourhoodLong)";

        const [rows] = await mysqlConnection.execute(query, route)
        return "Route created successfully"
    } catch (error) {
        console.log(error)
    }
}