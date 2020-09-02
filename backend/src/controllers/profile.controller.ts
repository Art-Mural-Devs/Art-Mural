import {Request, Response, NextFunction} from 'express';
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByProfileId";
import {setHash} from "../lib/auth.utils";
import {Profile} from "../../utils/interfaces/Profile";
import {updateProfile} from "../../utils/profile/updateProfile";
import {Status} from "../../utils/interfaces/Status";
import {selectAllProfiles} from "../../utils/profile/selectAllProfiles";

export async function getProfileByProfileIdController(request : Request, response: Response, nextFunction: NextFunction) {
    const {profileId} = request.params
    const data = await selectProfileByProfileId(profileId)
    return response.json({status: 200, message: null, data})
}
export async function putProfileController(request: Request, response: Response) {
    try {

        const {profileContent,profileEmail,profilePassword,profileName} = request.body;
        const profileHash = await setHash(profilePassword)
        const profileId = <string>request.session?.profile.profileId

        const updatedProfile: Profile = {
            profileId: profileId,
            profileActivationToken: null,
            profileContent,
            profileEmail,
            profileHash,
            profileName

        }
        const result = await updateProfile(updatedProfile)
        const status: Status = {
            status: 200,
            message: result ?? 'profile successfully updated',
            data: null
        };
        return response.json(status);

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