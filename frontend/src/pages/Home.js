import React, {useState} from "react"
import { useDispatch, useSelector } from 'react-redux'
import ReactMapboxGl, {Layer, Feature, Marker, Popup} from "react-mapbox-gl";
import './styleHome.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import {library} from '@fortawesome/fontawesome-svg-core'
import { faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {MapFeature} from "../ui/MapFeature";
import { fetchMuralByMostLiked } from '../store/murals'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(faMapMarker);

export const Home = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch()
  const sideEffects = () => {
    dispatch(fetchMuralByMostLiked())
  }
  React.useEffect(sideEffects, [])
  const murals = useSelector(state => state.murals ? state.murals : []);

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
            <Row className="mt-3 px-5">
              <Col className="text-center">
                <Button variant="outline-info text-white" size="lg" block>Route 1</Button>{' '}
              </Col>
              <Col className="text-center">
                <Button variant="outline-info text-white" size="lg" block>Route 2</Button>{' '}
              </Col>
            </Row>
            <Row className="mt-4 px-5">
              <Col className="text-center">
                <Button variant="outline-info text-white" size="lg" block>Route 3</Button>{' '}
              </Col>
              <Col className="text-center ">
                <Button variant="outline-info text-white" size="lg" block>Route 4</Button>{' '}
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col className="quoteMain">
                <p>The power of Street Art is that it goes to people`s daily life to be seen</p>
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
        <Container>
          <Row>
            <Col>
              <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                  height: "85vh",
                  width: "75vw"}}
                center={[-106.66871, 35.09810]}
                zoom={[11.5]}
              >

                  {murals.map(mural => (
                      <MapFeature mural={mural}/>
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
            <Col className="pl-4 pr-0 py-3" sm={4}>
              {murals0 && ( <Image src={murals0.muralImageUrl}/>)}
            </Col>
            <Col className="pl-4 pr-0 py-3" sm={4}>
              {murals1 && ( <Image src={murals1.muralImageUrl}/>)}
            </Col><Col className="pl-4 pr-0 py-3" sm={4}>
            {murals2 && ( <Image src={murals2.muralImageUrl}/>)}
          </Col>

          </Row>
        </Container>
      </section>
    </>
  )
}