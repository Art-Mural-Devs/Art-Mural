import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterElement = () => {
  return (
    <>
      <footer>
        <Container className="footer-fluid" fluid>
          <Container>
            <Row>
              <Col>
                <h2 className="text-white">The website was created by: </h2>
              </Col>
            </Row>
            <Row md={4} className="pt-4">
              <Col sm={12}>
                <a href="https://www.linkedin.com/in/alison-maez/">
                  <p className="name"> Alison C Maez
                    <FontAwesomeIcon id="linkedInIcon" icon={["fab", "linkedin"]}/></p>
                </a>
              </Col>
              <Col sm={12}>
                <a href="https://www.linkedin.com/in/andrei-hristian-a673551b3/">
                  <p className="name"> Andrei Hristian
                    <FontAwesomeIcon id="linkedInIcon" icon={["fab", "linkedin"]}/></p>
                </a>

              </Col>
              <Col sm={12}>
                <a href="https://www.linkedin.com/in/john-jaramillo-5172521b3/">
                  <p className="name"> John Jaramillo
                    <FontAwesomeIcon id="linkedInIcon" icon={["fab", "linkedin"]}/></p>
                </a>
              </Col>
              <Col sm={12}>
                <a href="https://www.linkedin.com/in/josh-duffy-b636aaaa/">
                  <p className="name"> Josh Duffy
                    <FontAwesomeIcon id="linkedInIcon" icon={["fab", "linkedin"]}/></p>
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="Footer-Note">Graduates of <a className="name" href="https://deepdivecoding.com/"> Deep
                  Dive Coding </a>, Cohort #30 </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="Footer-Note">2020 Albuquerque, New Mexico </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </footer>

    </>
  )
}