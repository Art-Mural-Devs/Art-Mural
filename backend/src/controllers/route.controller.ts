import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)

import {selectAllRoutes} from "../../utils/routes/selectAllRoutes";
import {selectRouteByRouteId} from "../../utils/routes/selectRouteByRouteId";

export async function getAllRoutesController(request: Request, response: Response) {
    try {
        const data = await selectAllRoutes()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}

export async function selectRouteByRouteIdController(request: Request, response: Response) {
        // return the response
        const {routeId} = request.params
        const data = await selectRouteByRouteId(routeId)
        return response.json({status: 200, message: null, data})
}

