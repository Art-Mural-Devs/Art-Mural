import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {getAllMurals} from '../../utils/mural/getAllMurals';
import {getMuralsByMostLiked} from "../../utils/mural/getMuralsByMostLiked";


// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
export async function getAllMuralsController(request: Request, response: Response) {
    try {
        const {orderBy} = request.params
        const data = await getAllMurals(orderBy)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
        } catch(error) {
            console.log(error);
        }
    }
export async function getMuralsByMostLikedController(request : Request, response: Response){
    const     {likeProfileId} = request.params
    const data  = await getMuralsByMostLiked(likeProfileId)
    return response.json({status:200, message: null, data})
}