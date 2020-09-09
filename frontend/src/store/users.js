import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/httConfig'

const slice = createSlice({
  name: "profile",
  initialState: [],
  reducers: {
    getAllprofile: (profile, action) => {
      return action.payload
    },
    getUserByUserId: (profile, action) => {
      profile.push(action.payload)
    }
  }
})

export const {getAllprofile, getUserByUserId} = slice.actions

export const fetchAllprofile = () => async dispatch => {
  const {data} = await httpConfig(`/apis/profile/`);
  dispatch(getAllprofile(data))
}

export const fetchUserByUserId = (id) => async dispatch => {
  const {data} = await httpConfig(`/apis/profile/${id}`);
  dispatch(getUserByUserId(data))
}

export default slice.reducer