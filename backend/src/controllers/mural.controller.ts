import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {getAllMurals} from '../../utils/mural/getAllMurals';
import {getMuralsOrderedByMuralArtist} from "../../utils/mural/getMuralsOrderedByMuralArtist";
import {getMuralsOrderedByMuralTitle} from "../../utils/mural/getMuralsOrderedByMuralTitle";
import {getMuralsOrderedByCreationYear} from "../../utils/mural/getMuralsOrderedByCreationYear";
import {selectMuralsOrderedByMostLiked} from "../../utils/mural/selectMuralsOrderedByMostLiked";
import {selectMuralsByMuralRouteRouteId} from "../../utils/muralRoute/getMuralsByMuralRouteRouteId";



// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
export async function getAllMuralsController(request: Request, response: Response) {
    try {
        const data = await getAllMurals()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
        } catch(error) {
            console.log(error);
        }
    }
export async function getMuralsOrderedByMostLikedController(request : Request, response: Response){
    const data = await selectMuralsOrderedByMostLiked()
    const status: Status = {status: 200, message: null, data};
    return response.json(status);
}

export async function getMuralsByMuralRouteRouteIdController(request : Request, response: Response){
    const {routeId} = request.params
    const data = await selectMuralsByMuralRouteRouteId(routeId)

    const status: Status = {status: 200, message: null, data};
    return response.json(status);
}

export async function getMuralsOrderedByMuralArtistController(request : Request, response: Response){
    const data = await getMuralsOrderedByMuralArtist()
    const status: Status = {status: 200, message: null, data};
    return response.json(status);
}

export async function getMuralsOrderedByCreationYearController(request : Request, response: Response) {
    const data = await getMuralsOrderedByCreationYear()
    const status: Status = {status: 200, message: null, data};
    return response.json(status);
}

export async function getMuralsOrderedByMuralTitleController(request : Request, response: Response){
    const data = await getMuralsOrderedByMuralTitle()
    const status: Status = {status: 200, message: null, data};
    return response.json(status);
}