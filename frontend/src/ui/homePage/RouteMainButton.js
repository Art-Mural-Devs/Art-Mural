import React from "react"
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

export const RouteMainButton = (props) => {
  const {route} = props

  return (
    <>
      <Col className="text-center main-buttons mt-4">
        <Link to={`/murals/byRouteId/${route?.routeId}`}>
        <Button variant="outline-info text-white" size="lg" block>{route.routeName}</Button>
        </Link>
        </Col>
    </>
  )

};