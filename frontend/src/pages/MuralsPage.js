import React, { useEffect } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAllMurals,
  fetchMuralByArtist,
  fetchMuralByMostLiked,
  fetchMuralByTitle,
  fetchMuralByYear
} from '../store/murals'
import { MuralCard } from '../ui/murals/MuralCard'
// import { getMuralsOrderedByMuralTitleController } from '../../../backend/src/controllers/mural.controller'

export const MuralsPage = () => {

  const dispatch = useDispatch();
  const effects = () => {
    dispatch(fetchAllMurals());
    dispatch(fetchMuralByMostLiked());
  };

  const inputs = [];

  useEffect(effects, inputs);

  const murals = useSelector(state => (state.murals ? state.murals : []));
  return (
    <>
      <h1 className={"text-center my-4"}>Albuquerque Murals</h1>
      <Container style={{marginBottom: '3rem'}}>
        <h4>Sort By:</h4>
        <Row style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Button size="lg" onClick={() => {dispatch(fetchMuralByMostLiked())}} style={{background: "#17a2b8"}}>Most
            Liked</Button>{' '}
          <Button size="lg" onClick={() => {dispatch(fetchMuralByTitle())}} style={{background: "#17a2b8"}}>Mural Name
            (A-Z)</Button>{' '}
          <Button size="lg" onClick={() => {dispatch(fetchMuralByYear())}} style={{background: "#17a2b8"}}>Year
            (newest)</Button>{' '}
          <Button size="lg" onClick={() => {dispatch(fetchMuralByArtist())}} style={{background: "#17a2b8"}}>Artist
            (A-Z)</Button>{' '}
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          {murals.map(mural => <MuralCard mural={mural} key={mural.muralId}/>)}
        </Row>
      </Container>
    </>
  )
};
