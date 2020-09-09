import {Request, Response, NextFunction} from 'express';
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByProfileId";
import {setHash} from "../lib/auth.utils";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {updateProfile} from "../../utils/profile/updateProfile";
import {Status} from "../../utils/interfaces/Status";
import {selectAllProfiles} from "../../utils/profile/selectAllProfiles";
import {selectConfidentialProfileByProfileId} from "../../utils/profile/selectConfidentialProfileByProfileId";

export async function getProfileByProfileIdController(request : Request, response: Response, nextFunction: NextFunction) {
    const {profileId} = request.params
    const data = await selectProfileByProfileId(profileId)
    return response.json({status: 200, message: null, data})
}
export async function putProfileController(request: Request, response: Response) {
    try {

        const {profileContent,profileEmail,profileName} = request.body;
        const profileIdFromSession = <string>request.session?.profile.profileId
        const {profileId} = request.params
        const performUpdate = async (partialProfile : PartialProfile) =>{
            const previousProfile: Profile = await selectConfidentialProfileByProfileId(profileId)
            console.log("previous profile",previousProfile)
            const updatedProfile : Profile = {...previousProfile, ...partialProfile}
            console.log("updatedProfile",updatedProfile)
            const result = await updateProfile(updatedProfile)
            const status: Status = {
                status: 200,
                message: result ?? 'profile successfully updated',
                data: null
            };
            return response.json(status);

        }
        const performFailedUpdate = (message: string ) => {
            return response.json({status:418, data: null, message})
        }
        return  profileId === profileIdFromSession
            ? performUpdate({profileId, profileContent, profileEmail, profileName})
            : performFailedUpdate("you are not allowed to perform this action")




    } catch(error) {
        console.log(error);
    }
}
export async function getAllProfilesController(request: Request, response: Response): Promise<Response | void> {


    try {

        //const profile: Profile | string = request.session?.profile ?? "No user signed in";

        const data = await selectAllProfiles()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}