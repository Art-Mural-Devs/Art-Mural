import React, { useState } from "react"
import { Marker } from "react-mapbox-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export const MapFeature = ({mural}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let coordinate = [mural.muralLat, mural.muralLong];

  return (
    <>
      <Marker
        coordinates={coordinate}
        anchor="bottom"
      >
        <FontAwesomeIcon className="map-icon" icon="map-marker-alt" size="lg" onClick={handleShow}/>

      </Marker>
    </>
  )

};