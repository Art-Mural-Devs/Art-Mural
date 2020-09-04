import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'

const muralsSlice = createSlice({
  name: "murals",
  initialState: [],
  reducers: {
    getAllMurals: (murals, action) => {
      return action.payload
    },
    getMuralByMostLiked: (murals, action) => {
      return action.payload
    }
  }
})

export const {getAllMurals, getMuralByMostLiked} = muralsSlice.actions

export const fetchAllMurals = () => async dispatch => {
  const {data} = await httpConfig(`/apis/murals/`);
  dispatch(getAllMurals(data))
}

export const fetchMuralByMostLiked = () => async dispatch => {
  const {data} = await httpConfig(`/apis/murals/bylikes/`);
  dispatch(getMuralByMostLiked(data))
}


export default muralsSlice.reducer