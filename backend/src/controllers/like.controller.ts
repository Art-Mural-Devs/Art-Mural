
import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {Like} from "../../utils/interfaces/Like";
import {selectLike} from "../../utils/like/selectLike";
import {deleteLike} from "../../utils/like/deleteLike";
import {insertLike} from "../../utils/like/insertLike";

const {validationResult} = require('express-validator');

export async function toggleLikeController(request: Request, response: Response) {

    try {
        validationResult(request).throw();
console.log(request)
        const {likeMuralId} = request.body;
        const profile: Profile = request.session?.profile
        const likeProfileId = <string>profile.profileId

        const like: Like = {
            likeProfileId,
            likeMuralId,
        }
        const select = await selectLike(like)
        // @ts-ignore
        if (select[0]){
            const result = await deleteLike(like)
        }else{
            const result = await insertLike(like)
        }
        const status: Status = {
            status: 200,
            message: 'Like successfully updated',
            data: null
        };
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}