import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export const Navigation = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="md" bg="info" variant="dark">
          <Navbar.Brand className="mb-0 pl-5">ABQMural</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="px-1 pr-5 ">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Murals</Nav.Link>
              <Nav.Link href="#pricing">Routes</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              <Nav.Link href="#pricing">Log in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>



    </>
  )
}