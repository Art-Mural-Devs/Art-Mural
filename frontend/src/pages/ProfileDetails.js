import React, { useEffect } from "react"
import './style.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchProfileByProfileId } from "../store/profile";
import { UpdateProfileForm } from "./UpdateProfileForm";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export const ProfileDetails = () => {

  const dispatch = useDispatch();

  const effects = () => {

    dispatch(fetchProfileByProfileId())
  };

  const inputs = [];

  useEffect(effects, inputs);

  const profile = useSelector(state => {

    return state.profile ? state.profile : null
  });

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='yours'>
              <h2>Your Profile</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col md={4}>
          <div className='box username'>
            <h3>Username</h3>
            {profile && (<p>{profile.profileName}</p>)}
          </div>
        </Col>
        <Col md={4}>
          <div className='box details'>
            <div className='email'>
              <h3>Email: </h3>
              {profile && (<p>{profile.profileEmail}</p>)}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className='box aboutMe'>
            <h3>Profile Content: </h3>
            {profile && (<p>{profile.profileContent}</p>)}
          </div>
        </Col>
      </Row>
      <Container >
        <Row md={1}>
          <h2 className="text-center my-3 ">UPDATE PROFILE</h2>
        </Row>
        <Row md={2} >
          {profile && <UpdateProfileForm key={profile.profileId} profile={profile}/>}
        </Row>
      </Container>
    </>
  )

}
