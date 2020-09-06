import React, { useState } from "react"
import { Marker } from "react-mapbox-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup } from "react-mapbox-gl";
import ReactMapGL from 'react-map-gl'
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
        <FontAwesomeIcon className="map-icon" icon="map-marker" size="lg" onClick={handleShow}/>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{mural.muralTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img className="image-map" src={mural.muralImageUrl} alt={mural.muralTitle}/>
              <p><b>Artist: </b>{mural.muralArtist}</p>
              <p><b>Year: </b>{mural.muralArtist}</p>
              <p><b>Address: </b>{mural.muralAddress}</p>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Marker>

      {/*    <Popup
          anchor="bottom"
          closeButton={true}
          closeOnClick={true}
          onClose={() => this.state({showPopup: true})}>

          <p className="image-map-p1">Title: {mural.muralTitle}</p>
          <p>Address: {mural.muralAddress}</p>
        </Popup>*/}

    </>
  )

};