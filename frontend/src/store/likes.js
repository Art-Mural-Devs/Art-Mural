import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
  name: "like",
  initialState: [],
  reducers: {
    selectLike: (like, action) => {
      return action.payload
    },
    selectLikesByLikeProfileId: (like, action) => {
      return action.payload
    },
    insertLike: (like, action) => {
      like.push(action.payload)
    },
    deleteLike: (like, action) => {
      like.push(action.payload)
    }
  }
})

export const {selectLike, selectLikesByLikeProfileId, insertLike, deleteLike} = slice.actions

export const fetchLike = () => async dispatch => {
  const {data} = await httpConfig(`/apis/like/`);
  dispatch(selectLikesByLikeProfileId(data))
}

export const fetchLikesByLikeProfileId = () => async dispatch => {
  const {data} = await httpConfig(`/apis/like/`);
  dispatch(selectLike(data))
}

export const fetchInsertLike = (id) => async dispatch => {
  const {data} = await httpConfig(`/apis/like/insert${id}`);
  dispatch(insertLike(data))
}

export const fetchDeleteLike = (id) => async dispatch => {
  const {data} = await httpConfig(`/apis/like/delete${id}`);
  dispatch(deleteLike(data))
}

export default slice.reducer