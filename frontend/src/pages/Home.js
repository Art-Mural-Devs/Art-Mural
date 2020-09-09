import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import ReactMapboxGl from "react-mapbox-gl";
import './styleHome.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { MapFeature } from "../ui/homePage/MapFeature";
import { fetchMuralByMostLiked } from '../store/murals'
import Nav from 'react-bootstrap/Nav'
import { fetchAllRoutes } from '../store/route'
import { RouteMainButton } from '../ui/homePage/RouteMainButton'

library.add(faMapMarkerAlt);

export const Home = () => {
  const dispatch = useDispatch()
  const sideEffects = () => {
    dispatch(fetchMuralByMostLiked())
    dispatch(fetchAllRoutes())
  }
  React.useEffect(sideEffects, [])
  const murals = useSelector(state => state.murals ? state.murals : []);
  const routes = useSelector(state => state.routes ? state.routes : []);
  const murals0 = useSelector(state => (
    state.murals
      ? state.murals[0]
      : null
  ));
  const murals1 = useSelector(state => (
    state.murals
      ? state.murals[1]
      : null
  ));
  const murals2 = useSelector(state => (
    state.murals
      ? state.murals[2]
      : null
  ));

  const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiZ2Vvcmdla2VwaGFydCIsImEiOiJjanQ4cmdmYjkwYnZnNDNwNDF4NXFiMTJmIn0.MwDDiyszR0QFmMYMNvzi1Q"
  });

  return (
    <>
      <header>
        <Container className="background-mainPage py-3">
          <Container>
            <Row>
              <Col className="titleMainPage">
                <h1 className="display-3 text-white">Ready for your next Mural Tour</h1>
              </Col>
            </Row>
          </Container>
          <Container className="my-5">
            <Row md={2} className="mt-3 mx-5">
              {routes.map( route => <RouteMainButton key={route.routeId} route={route}/>)}
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col className="quoteMain">
                <p>"The power of Street Art is that it goes to people`s daily life to be seen."</p>
                <p>Andrei Hristian</p>
              </Col>
            </Row>
          </Container>
        </Container>
      </header>

      <section className="mapMain-section">
        <Container>
          <Row>
            <Col>
              <h2 className="display-4 text-center">Find your favorite Mural</h2>
            </Col>
          </Row>
        </Container>
        <Container className="map text-center">
          <Row className="justify-content-center">
            <Col md={8}>
              <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                  height: "85vh",
                  width: "75vw"
                }}
                center={[-106.6, 35.09810]}
                zoom={[11.5]}
              >
                {murals.map(mural => (
                    <MapFeature key={mural.muralId} mural={mural}/>
                  )
                )};
              </Map>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="text-mainPage bg-info">
        <Container>
          <Row>
            <Col>
              <p className="text-white">Albuquerque has a lot to offer in terms of food and entertainment. If you
                like mural painting, you are at the right city. Albuquerque has a large pool of
                wall art. Albuquerque is a great place to walk around to enjoy the mural arts. The city
                provided spaces for artists to show their skills on the walls in empty
                lots. ABQMural can help you to find amazing art around you and are excited to guide you
                in this journey. </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="imageSection">
        <Container fluid className="image-random">
          <Row>
            <Col>
              <h2 className="display-4 text-center">The Most Liked Murals</h2>
            </Col>
          </Row>
          <Row>
            <Col className="pl-3 pr-0 py-3" sm={4}>
                {murals0 && (<Image src={murals0.muralImageUrl}/>)}
                {murals0 && (<p>Voted By: {murals0.mostLiked}</p>)}
            </Col>
            <Col className="pl-3 pr-0 py-3" sm={4}>
                {murals1 && (<Image src={murals1.muralImageUrl}/>)}
                {murals1 && (<p>Voted By: {murals1.mostLiked}</p>)}
            </Col>
            <Col className="pl-3 pr-0 py-3" sm={4}>
              {murals2 && (<Image src={murals2.muralImageUrl}/>)}
              {murals2 && (<p>Voted By: {murals2.mostLiked}</p>)}
          </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={4} className="btn-image">
              <Nav.Link href="/murals">
              <Button variant="info" size="lg" block>Click like to your favorite Mural</Button>
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}