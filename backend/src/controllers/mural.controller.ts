import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {insertMural} from '../../utils/mural/insertMurals';
import {getAllMurals} from '../../utils/mural/getAllMurals';
import {SelectMuralsByMuralsTitle} from '../../utils/mural/SelectMuralsByMuralsTitle';



// Interfaces (represent the DB model and types of the columns associated with a specific DB table)


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
export async function SelectMuralsByMuralsTitleController(request : Request, response: Response){
    const     {muralTitle} = request.params
    const data  = await SelectMuralsByMuralsTitle(muralTitle)
    return response.json({status:200, message: null, data})
}