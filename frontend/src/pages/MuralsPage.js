import React, { useEffect } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllMurals } from '../store/murals'
import { MuralCard } from '../ui/murals/MuralCard'

export const MuralsPage = () => {

  const dispatch = useDispatch();

  console.log(dispatch)

  const effects = () => {
    dispatch(fetchAllMurals());
  };

  const inputs = [];

  useEffect(effects, inputs);

  const murals = useSelector(state => (state.murals ? state.murals : []));
  console.log(murals)
  return (
    <>
      <h1 className={"text-center my-4"}>Albuquerque Murals</h1>
      <Container style={{marginBottom: '3rem'}}>
        <h4>Sort By:</h4>
        <Row style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Button size="lg" style={{background:"#17a2b8"}}>Most Liked</Button>{' '}
          <Button size="lg" style={{background:"#17a2b8"}}>Mural Name (A-Z)</Button>{' '}
          <Button size="lg" style={{background:"#17a2b8"}}>Year (newest)</Button>{' '}
          <Button size="lg" style={{background:"#17a2b8"}}>Artist (A-Z)</Button>{' '}
        </Row>
      </Container>
      <Container className="card-columns">

          {murals.map(mural => <MuralCard mural={mural} key={mural.muralId}/>)}

      </Container>
    </>
  )
};
