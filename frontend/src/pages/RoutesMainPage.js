import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


export const RoutesMainPage = () => {
  return (
    <>
      <h1 className={"text-center mt-4 mb-5"}>Albuquerque Routes</h1>
      <Container>
        <Row>
          <Col lg={true} style={{marginBottom: '3rem'}}>
            <Card style={{ width:'30rem' }}>
              <Card.Img variant="top" src="http://farm4.staticflickr.com/3044/2479130748_15f6abb119_m.jpg" fluid/>
               <Card.Body>
                <Card.Title className='text-center'>South Valley</Card.Title>
                </Card.Body>
            </Card>
          </Col>
          <Col lg={true} style={{marginBottom: '2rem'}}>
            <Card style={{ width:'30rem' }}>
              <Card.Img variant="top" src="http://farm4.staticflickr.com/3044/2479130748_15f6abb119_m.jpg" fluid/>
              <Card.Body>
                <Card.Title className='text-center'>Downtown</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={true} style={{marginBottom: '2rem'}}>
            <Card style={{ width:'30rem' }}>
              <Card.Img variant="top" src="http://farm4.staticflickr.com/3044/2479130748_15f6abb119_m.jpg" fluid/>
              <Card.Body>
                <Card.Title className='text-center'>Nob Hill</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true} style={{marginBottom: '2rem'}}>
            <Card style={{ width:'30rem' }}>
              <Card.Img variant="top" src="http://farm4.staticflickr.com/3044/2479130748_15f6abb119_m.jpg" fluid/>
              <Card.Body>
                <Card.Title className='text-center'>5th Street</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};
