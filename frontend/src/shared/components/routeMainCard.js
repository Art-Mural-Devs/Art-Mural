import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'

export const RouteMainCard = (props) => {
  const {route} = props
  return(
    <>
      <Col lg={true} style={{marginBottom: '3rem'}}>
        <a href="/routePage">
  <Card style={{ width:'30rem' }}>
<Card.Img variant="top" src={route.routeImageUrl} fluid/>
<Card.Body>
<Card.Title className='text-center'>{route.routeName}</Card.Title>
</Card.Body>
</Card>
</a>
</Col>
    </>
  )
}
