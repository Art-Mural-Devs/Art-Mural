import React, { useEffect, useState } from "react"
import './styleHome.css'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchMuralRouteById } from '../store/muralRoute'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRoutes } from '../store/route'
import { RouteMainCard } from '../shared/components/routeMainCard'


export const RoutePage = ({match}) => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch()
  const effects = () => {
    dispatch(fetchMuralRouteById(match.params.routeId))
  dispatch(fetchAllRoutes(match.params.routeId))};
  const inputs = [match.params.routeId];
  useEffect(effects, inputs);
  const muralRoutes = useSelector(state => {
    return state.muralRoutes
      ? state.muralRoutes.filter(muralRoute => muralRoute.muralRouteRouteId === match.params.routeId)
      : []
  });
  console.log(muralRoutes)
  const routes = useSelector(state => {
    return state.routes? state.routes.filter(route => route.routeId === match.params.routeId)
      : []});
  const handleSelect = (selectedIndex, e) => {		setIndex(selectedIndex);	};
  console.log(routes[0]?.routeName)
  return (
    <>
      <section className="mapMain-section">
        <Container>
          <Row>
            <Col>
              {routes && (<h2>{routes[0]?.routeName}</h2>)}
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              {routes && (<img src={routes[0]?.routeImageUrl}/>)}
            </Col>
          </Row>
        </Container>
      </section>

        <Container className="my-5">
          <Row>
            <Col>
              {routes && (<p>{routes[0]?.routeContent}</p>)}
            </Col>
          </Row>
        </Container>

      <section className="my-5">
        <Container>
          <Row>
            <Col>
              <hr></hr>
              <Carousel className="py-5">
                {muralRoutes.map(muralRoute => {return (
                  <Carousel.Item>
                  <img className="d-block w-100"
                  src={muralRoute.muralImageUrl}
                  alt="A mural on the side of the Empire Board Games building in Albuquerque, New Mexico that depicts abstract flowers and rockets."/>
                  <Carousel.Caption>
                  <h3>{muralRoute.muralTitle}</h3>
                  </Carousel.Caption>
                  </Carousel.Item>)}
                  )}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
};
