import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/httpConfig'
import {fetchAuth} from "./auth";


const slice = createSlice({
    name: "profile",
    initialState: null,
    reducers: {

        getProfileByProfileId: (profile, action) => {
            return action.payload
        }
    }
})

export const {getProfileByProfileId} = slice.actions


export const fetchProfileByProfileId  = () => async (dispatch, getState)=> {
    await dispatch(fetchAuth())


    const state = getState()
    if (state.auth!==null){
    const {data} = await httpConfig(`/apis/profile/${state.auth.profileId}`);
    dispatch(getProfileByProfileId(data))
    }
}

export default slice.reducer