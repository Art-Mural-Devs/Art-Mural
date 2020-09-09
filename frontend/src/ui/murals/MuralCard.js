import React from 'react'
// import { useSelector } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import LikeButton from './LikeButton'
import { useDispatch } from 'react-redux'
import { httpConfig } from '../../utils/httpConfig'
import { getAllMurals } from '../../store/murals'
import Button from 'react-bootstrap/Button'

export const MuralCard = ({ mural }) => {
  const dispatch = useDispatch()

  const clickLike = () => {
    httpConfig.post("/apis/like/", {likeMuralId: mural.muralId})
      .then(reply => {
          let {message, type} = reply
          if(reply.status === 200) {
            console.log(reply)
            dispatch(getAllMurals())
          }
          console.log(reply)
        }
      );
  }

  return (
    <Col lg={true} style={{marginBottom: '2rem', alignItems: 'center'}}>
      <Card style={{ width:'18rem' }}>
        <Card.Img variant="top" src= { mural.muralImageUrl} alt={mural.muralTitle} fluid/>
        <Card.Header className="text-center"><Button onClick={clickLike} style={{background:"#17a2b8"}}>Like</Button></Card.Header>
        <Card.Body className="card-mural">
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

