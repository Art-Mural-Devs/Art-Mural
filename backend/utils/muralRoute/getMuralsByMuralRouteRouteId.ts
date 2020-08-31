import {connect} from "../../src/database";

export async function selectMuralsByMuralRouteRouteId(routeId: string) {
    const mySqlConnection = await connect();
    const mySqlQuery = "SELECT BIN_TO_UUID(muralRouteMuralId) AS muralRouteMuralId, BIN_TO_UUID(muralRouteRouteId) AS muralRouteRouteId, BIN_TO_UUID(muralId) AS muralId, muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle, route.routeContent, route.routeName, route.routeNeighbourhoodLat, route.routeNeighbourhoodLong FROM mural LEFT JOIN muralRoute ON mural.muralId = muralRoute.muralRouteMuralId JOIN route ON route.routeId = UUID_TO_BIN(:routeId) WHERE muralRoute.muralRouteRouteId = UUID_TO_BIN(:routeId)";

    const [rows] = await mySqlConnection.execute(mySqlQuery, {routeId})
    return rows;
}