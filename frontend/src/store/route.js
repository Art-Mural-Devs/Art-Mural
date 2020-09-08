import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const routeSlice = createSlice({
  name: "routes",
  initialState : [],
  reducers: {
    getAllRoutes: (routes, action) => {
      const {payload} = action
      return payload
    }
  }
})

export const {getAllRoutes} = routeSlice.actions

export const fetchAllRoutes = () => async dispatch => {
  const {data} = await httpConfig(`/apis/routes/`)
  dispatch(getAllRoutes(data))
}

export default routeSlice.reducer