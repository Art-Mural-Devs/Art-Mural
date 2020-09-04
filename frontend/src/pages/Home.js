import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import './styleHome.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import map from "../shared/images/mapMural.png"
import randomImage from "../shared/images/albuquerque_mural_0001_Layer-70.jpg"
import Image from 'react-bootstrap/Image'

import { fetchMuralByMostLiked } from '../store/murals'



export const Home = () => {

  const dispatch = useDispatch()
  const sideEffects = () => {
    dispatch(fetchMuralByMostLiked())
  }
  React.useEffect(sideEffects, [])


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


console.log(murals0, murals1, murals2 )
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
        <Container fluid>
          <Row>
            <Col>
              <Image id="mapImage" src={map} alt="Map image"/>
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