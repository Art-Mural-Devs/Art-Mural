import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/httpConfig'

const muralsSlice = createSlice({
  name: "murals",
  initialState: [],
  reducers: {
    getAllMurals: (murals, action) => {
      return action.payload
    },

    getMuralByMostLiked: (murals, action) => {
      return action.payload

    },

    getMuralsOrderedByMuralArtist: (murals, action) => {
      return action.payload

    },

    getMuralsOrderedByCreationYear: (murals, action) => {
      return action.payload

    },

    getMuralsOrderedByMuralTitle: (murals, action) => {
      return action.payload

    }
  }
})

export const {getAllMurals, getMuralByMostLiked, getMuralsOrderedByMuralArtist, getMuralsOrderedByCreationYear, getMuralsOrderedByMuralTitle} = muralsSlice.actions

export const fetchAllMurals = () => async dispatch => {
  const {data} = await httpConfig(`/apis/murals/`);
  dispatch(getAllMurals(data))
}

export const fetchMuralByMostLiked = () => async dispatch => {
  const {data} = await httpConfig(`/apis/murals/bylikes/`);
  dispatch(getMuralByMostLiked(data))
}

export const fetchMuralByArtist = () => async dispatch => {
  const {data} = await httpConfig(`/apis/murals/byartist/`);
  dispatch(getMuralsOrderedByMuralArtist(data))
}

export const fetchMuralByYear = () => async dispatch => {
  const {data} = await httpConfig(`/apis/murals/byyear/`);
  dispatch(getMuralsOrderedByCreationYear(data))
}

export const fetchMuralByTitle = () => async dispatch => {
  const {data} = await httpConfig(`/apis/murals/bytitle/`);
  dispatch(getMuralsOrderedByMuralTitle(data))
}

export default muralsSlice.reducer
