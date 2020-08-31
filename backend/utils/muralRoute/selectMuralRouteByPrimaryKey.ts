import { connect } from "../../src/database";
import {Route} from "../interfaces/Route";

export async function selectMuralRouteByPrimaryKey (routeId: string) : Promise<Route|undefined> {

    const mysqlConnection = await connect();

    const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(muralRoutePrimaryKey) as routeId, routeId, routeContent, routeImageUrl, routeName, routeNeighbourhoodLat, routeNeighbourhoodLong, FROM route WHERE routeId = :routeId', {routeId});

    // @ts-ignore is required so that rows can be interacted with like the array it is
    return rows.length !== 0 ? {...rows[0]} : undefined;}