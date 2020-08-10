import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export const MuralsPage = () => {
  return (
    <>
      <h1>All Mural will be here</h1>
      <Container>
        <Row>
          <Col lg={true} style={{marginBottom: '2rem'}}>
            <Card style={{ width:'18rem' }}>
              <Card.Img variant="top" src="http://farm4.staticflickr.com/3044/2479130748_15f6abb119_m.jpg" fluid/>
              <Card.Body>
                <Card.Title>The Harvest</Card.Title>
                <Card.Text>
                  Gilberto Guzman
                </Card.Text>
                <Card.Text>
                  1984
                </Card.Text>
                <Card.Text>
                  5th & Copper NW
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true} style={{marginBottom: '2rem'}}>
            <Card style={{ width:'18rem' }}>
              <Card.Img variant="top" src="http://farm8.staticflickr.com/7068/6926342359_f99ba36534_m.jpg" fluid/>
              <Card.Body>
                <Card.Title>Heritage</Card.Title>
                <Card.Text>
                  Celia Kimball
                </Card.Text>
                <Card.Text>
                  1985
                </Card.Text>
                <Card.Text>
                  6100 Taylor Ranch Rd NW
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true} style={{marginBottom: '2rem'}}>
            <Card style={{ width:'18rem' }}>
              <Card.Img variant="top" src="http://farm4.staticflickr.com/3050/2439175208_49dbff1c16_m.jpg" fluid/>
              <Card.Body>
                <Card.Title>Mestizaje</Card.Title>
                <Card.Text>
                  Emanuel Martinez
                </Card.Text>
                <Card.Text>
                  1996
                </Card.Text>
                <Card.Text>
                  1025 Broadway SE
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={true} style={{marginBottom: '2rem'}}>
            <Card style={{ width:'18rem' }}>
              <Card.Img variant="top" src="http://farm3.staticflickr.com/2263/2478320549_e77672598e_m.jpg" fluid/>
              <Card.Body>
                <Card.Title>El Camino Real</Card.Title>
                <Card.Text>
                  Patricio A. Zamora (PAZ)
                </Card.Text>
                <Card.Text>
                  1998
                </Card.Text>
                <Card.Text>
                  1801 4th Street NW
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true} style={{marginBottom: '2rem'}}>
            <Card style={{ width:'18rem' }}>
              <Card.Img variant="top" src="http://farm8.staticflickr.com/7002/6836564611_bfb467d0d3_m.jpg" fluid/>
              <Card.Body>
                <Card.Title>La Communidad</Card.Title>
                <Card.Text>
                  Patricio A. Zamora (PAZ)
                </Card.Text>
                <Card.Text>
                  1997
                </Card.Text>
                <Card.Text>
                  Bridge Blvd and Old Coors DR SW
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true} style={{marginBottom: '2rem'}}>
            <Card style={{ width:'18rem' }}>
              <Card.Img variant="top" src="http://farm8.staticflickr.com/7143/6836582183_261be223f8_m.jpg" fluid/>
              <Card.Body>
                <Card.Title>More than a Fire Fighter</Card.Title>
                <Card.Text>
                  Patricio A. Zamora (PAZ)
                </Card.Text>
                <Card.Text>
                  1999
                </Card.Text>
                <Card.Text>
                  724 Silver SW
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};
