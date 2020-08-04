import React from "react"
import './styleHome.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import map from "./mapMural.png"
import randomImage from "./albuquerque_mural_0001_Layer-70.jpg"

export const Home = () => {
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="md" bg="info" variant="dark">
          <Navbar.Brand className="mb-0 pl-5">ABQMural</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="px-1 pr-5 ">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Murals</Nav.Link>
              <Nav.Link href="#pricing">Routes</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              <Nav.Link href="#pricing">Log in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


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
              <img id="mapImage" src={map} alt="Map image"/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="text-mainPage bg-info" >
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
            <Col className="pl-4 pr-0 py-3"  sm={4} >
              <img src={randomImage} className="rounded " alt="Mural Image"/>
            </Col>
            <Col className="pl-4 pr-0 py-3"  sm={4} >
              <img src={randomImage} className="rounded " alt="Mural Image"/>
            </Col><Col className="pl-4 pr-0 py-3"  sm={4} >
            <img src={randomImage} className="rounded " alt="Mural Image"/>
          </Col>

          </Row>
        </Container>
      </section>

      <footer>
        <Container className="footer-fluid" fluid>
          <Container>
            <Row>
              <Col>
                <h2 className="text-white">The website was created by: </h2>
              </Col>
            </Row>
            <Row xs={1} md={4} className="pt-4">
              <Col>
                <a href="#" target="_blank">
                  <p className="text-white"> Alison C Maez
                    <i className="fa fa-linkedin fa-lg p-2"></i></p></a>

              </Col>
              <Col>
                <a href="https://www.linkedin.com/in/andrei-hristian-a673551b3/" target="_blank">
                  <p className="text-white"> Andrei Hristian
                    <i className="fa fa-linkedin fa-lg p-2"></i></p></a>

              </Col>
              <Col>
                <a href="#" target="_blank">
                  <p className="text-white"> John Jaramillo
                  <i className="fa fa-linkedin fa-lg p-2"></i></p></a>
              </Col>
              <Col>
                <a href="#" target="_blank">
                  <p className="text-white"> Josh Duffy
                    <i className="fa fa-linkedin fa-lg p-2"></i></p></a>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="Footer-Note">Graduates of Deep Dive Coding, Cohort #30 </p>
              </Col>
            </Row>
          </Container>
          </Container>
      </footer>

    </>
  )
}