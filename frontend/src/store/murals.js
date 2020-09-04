import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
  name: "murals",
  initialState: [],
  reducers: {
    getAllMurals: (murals, action) => {
      return action.payload
    },
    getMuralByMuralId: (murals, action) => {
      murals.push(action.payload)
    }
  }
})

export const {getAllMurals, getMuralByMuralId} = slice.actions

export const fetchAllMurals = () => async dispatch => {
  const {data} = await httpConfig(`/apis/murals/`);
  dispatch(getAllMurals(data))
}

export const fetchMuralByMuralId = (id) => async dispatch => {
  const {data} = await httpConfig(`/apis/murals/${id}`);
  dispatch(getMuralByMuralId(data))
}

export default slice.reducer