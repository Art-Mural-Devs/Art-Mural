import { connect } from '../../src/database';
import {Route} from "../interfaces/Route";

export async function selectRouteByRouteId (routeId: string) {

//    const orderByOptions = ["muralArtist", "muralTitle"];
//    const sortBy = orderByOptions.includes(orderBy) ? orderBy : "muralCreationYear";

    const mySqlConnection = await connect();
    const mySqlQuery = "SELECT BIN_TO_UUID(routeId) as routeId, routeContent, routeImageUrl, routeName, routeNeighbourhoodLat, routeNeighbourhoodLong FROM route WHERE routeId =UUID_TO_BIN(:routeId)"

    // @ts-ignore is required so that rows can be interacted with like the array it is
    const [rows] = await mySqlConnection.execute(mySqlQuery, {routeId})
    return rows;
}