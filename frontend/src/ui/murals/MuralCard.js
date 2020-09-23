import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux'
import { httpConfig } from '../../utils/httpConfig'
import { getAllMurals } from '../../store/murals'
import Button from 'react-bootstrap/Button'

export const MuralCard = ({ mural }) => {
  const dispatch = useDispatch()
  const [colorState, setColorState] = useState('like');
  const [color, setColor] = useState("#17a2b8");

  const clickLike = () => {
    httpConfig.post("/apis/like/", {likeMuralId: mural.muralId})
      .then(reply => {
          let {message, type} = reply
          if(reply.status === 200) {
            dispatch(getAllMurals())
            setColorState('liked')
            setColor("#ff0000")
          }
        let info = reply.message
        if (info === "Please, Log In in order to like a mural.")
          alert(` ${info}`);
        }
      );
  }

  return (
    <Col lg={true} style={{marginBottom: '2rem', alignItems: 'center'}}>
      <Card style={{ width:'18rem' }}>
        <Card.Img variant="top" src= { mural.muralImageUrl} alt={mural.muralTitle}/>
        <Card.Header className="text-center">
          <Button onClick={clickLike} className="button-like" style={{backgroundColor: color}}>
            {colorState}
         </Button>{mural.mostLiked}</Card.Header>
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

