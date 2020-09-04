import React from 'react'
import { useSelector } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

export const MuralCard = ({ mural }) => {

  const murals = useSelector((state) => state.murals ? state.murals : null)

  // const FindUsername = () => {
  //   const user = users.find(user => post.postUserId === user.userId)
  //   return (
  //     <>
  //       {user && <h3>{user.username}</h3>}
  //     </>
  //   )
  // }

  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <p className="card-text">
          <small className="text-muted">{post.username}</small>
        </p>
        <div className="card-footer text-muted text-center">
          <FindUsername />
        </div>
      </div>
    </div>
  )
}

// <Col lg={true} style={{marginBottom: '2rem', alignItems: 'center'}}>
//   <Card style={{ width:'18rem' }}>
//     <Card.Img variant="top" src="http://farm4.staticflickr.com/3044/2479130748_15f6abb119_m.jpg" fluid/>
//     <Card.Header className={"text-center"}><Button style={{background:"#17a2b8"}}>Like</Button></Card.Header>
//     <Card.Body>
//       <Card.Title>The Harvest</Card.Title>
//       <Card.Text>
//         Gilberto Guzman
//       </Card.Text>
//       <Card.Text>
//         1984
//       </Card.Text>
//       <Card.Text>
//         5th & Copper NW
//       </Card.Text>
//     </Card.Body>
//   </Card>
// </Col>