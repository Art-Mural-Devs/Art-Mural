import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const muralRouteSlice = createSlice({
  name: "muralRoutes",
  initialState : [],
  reducers: {
    getMuralRouteById: (muralRoutes, action) => {
      const {payload} = action
      return payload
    }
  }
})

export const {getMuralRouteById} = muralRouteSlice.actions

export const fetchMuralRouteById = (routeId) => async dispatch => {
  const {data} = await httpConfig(`/apis/murals/byRouteId/${routeId}`)
  dispatch(getMuralRouteById(data))
}

export default muralRouteSlice.reducer