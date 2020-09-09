import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRoutes } from '../store/route'
import { RouteMainCard } from '../shared/components/routeMainCard'



export const RoutesMainPage = () => {
const dispatch = useDispatch()
  const sideEffects = () =>  {
    dispatch(fetchAllRoutes())
  }
  React.useEffect(sideEffects, [])
  const routes = useSelector(state => state.routes ? state.routes : []);

  return (
    <>
      <h1 className="text-center mt-4 mb-5">Albuquerque Routes</h1>
      <Container>
        <Row>
          {routes.map( route => <RouteMainCard key={route.routeId} route={route} />)}
        </Row>
      </Container>
    </>
  )
};

