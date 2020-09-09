import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import {Link} from 'react-router-dom'

export const RouteMainCard = (props) => {
  const {route} = props
  return(
    <>
      <Col lg={true} style={{marginBottom: '3rem'}}>
        <Link to={`/murals/byRouteId/${route?.routeId}`}>
  <Card style={{ width:'30rem' }}>
<Card.Img variant="top" src={route.routeImageUrl} fluid/>
<Card.Body>
<Card.Title className="mainCardText">{route.routeName}</Card.Title>
</Card.Body>
</Card>
        </Link>
</Col>
    </>
  )
}
