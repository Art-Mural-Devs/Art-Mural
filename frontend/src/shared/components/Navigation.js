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
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/routesMainPage">Routes</Nav.Link>
              <Nav.Link href="/contactPage">Contact</Nav.Link>
              {localStorage.getItem('authUser') && localStorage.getItem('authUser').length> 0  ? <p style={{color:'white',paddingTop:'10px', paddingLeft:'10px'}} onClick={() =>{localStorage.setItem("authUser",'')}}>Log out</p> : <Nav.Link href="/logInPage">Log in</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>



    </>
  )
}