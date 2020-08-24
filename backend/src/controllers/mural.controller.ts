import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';


// Interfaces (represent the DB model and types of the columns associated with a specific DB table)

import {getAllMurals} from "../../utils/mural/getAllMurals";

export async function getAllMuralsController(request: Request, response: Response) {
    try {
            const data = await getAllMurals()
            // return the response
            const status: Status = {status: 200, message: null, data};
            return response.json(status);
        } catch(error) {
            console.log(error);
        }
    }