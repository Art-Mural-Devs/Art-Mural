import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { MuralCard } from '../shared/MuralCard'
import { fetchAllMurals } from '../../store/murals'


export const Murals = () => {

  const dispatch = useDispatch();

  console.log(dispatch)

  const effects = () => {
    dispatch(fetchAllMurals());
  };

  const inputs = [];

  useEffect(effects, inputs);

  const murals = useSelector(state => (state.murals ? state.murals : []));



  return (
    <>
      <div className="card-columns">
        {murals.map(mural => <MuralCard mural={mural} key={mural.muralId}/>)}
      </div>
    </>
  );


};