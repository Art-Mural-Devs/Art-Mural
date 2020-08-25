import {Route} from "../interfaces/Route";
import {connect} from "../../src/database";

export async function selectAllRoutes() :Promise <any> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "(SELECT routeId, routeContent, routeImageUrl, routeName, routeNeighbourhoodLat, routeNeighbourhoodLong FROM route)";
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows;
    } catch (error) {
        console.log(error)
    }
}
