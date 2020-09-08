import React from 'react'
// import { useSelector } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import LikeButton from './LikeButton'

export const MuralCard = ({ mural }) => {

  return (
    <Col lg={true} style={{marginBottom: '2rem', alignItems: 'center'}}>
      <Card style={{ width:'18rem' }}>
        <Card.Img variant="top" src= { mural.muralImageUrl} alt={mural.muralTitle} fluid/>
        <Card.Header className="text-center"><LikeButton /></Card.Header>
        <Card.Body className="card-body">
          <Card.Title>{ mural.muralTitle}</Card.Title>
          <Card.Text>
            { mural.muralArtist}
          </Card.Text>
          <Card.Text>
            { mural.muralCreationYear }
          </Card.Text>
          <Card.Text>
            { mural.muralAddress }
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

// <Button style={{background:"#17a2b8"}}>Like</Button>