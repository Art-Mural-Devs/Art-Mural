import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../shared/utils/http-config'

const slice = createSlice({
    name: "profile",
    initialState: [],
    reducers: {

        getProfileByProfileId: (profile, action) => {
            profile.push(action.payload)
        }
    }
})

export const {getProfileByProfileId} = slice.actions


export const fetchProfileByProfileId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/profile/${id}`);
    dispatch(getProfileByProfileId(data))
}

export default slice.reducer