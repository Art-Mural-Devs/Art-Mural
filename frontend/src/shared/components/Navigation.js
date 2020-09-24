import React, { useEffect } from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth } from '../../store/auth'
import { SignOutComponent } from '../../pages/SignOut'

export const Navigation = (props) => {
  const {profile} = props
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const effects = () => {
    dispatch(fetchAuth());
  };
  const inputs = [];
  useEffect(effects, inputs);

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="info" variant="dark">
        <Navbar.Brand className="mb-0 pl-5">ABQMural</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="px-1 pr-5 ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/murals">Murals</Nav.Link>
            <Nav.Link href="/routesMainPage">Routes</Nav.Link>
            {auth !== null && (
              <>
                <Nav.Link href="/profileDetails">Profile</Nav.Link>
                <Nav.Link><SignOutComponent /></Nav.Link>
              </>
            )}
            {auth === null && (
              <>
                <Nav.Link href="/LogInPage">Profile</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>



    </>
  )
}