import React from "react"
import './styleHome.css'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import routeImage from "../shared/images/Nob_Hill_Route.png"
import artisanMural from "../shared/images/NobHillCarouselImages/Albuquerque_Mural_artisan_santafe.jpg"
import empireMural from "../shared/images/NobHillCarouselImages/Albuquerque_Mural_empire_board_game.jpg"
import andrewMural from "../shared/images/NobHillCarouselImages/Andrew_nobbHill.gif"
import changeMural from "../shared/images/NobHillCarouselImages/bethechange.png"
import buffaloMural from "../shared/images/NobHillCarouselImages/buffalo_exchange_mural.jpg"
import eyeMural from "../shared/images/NobHillCarouselImages/eye-mural.png"
import greetingsMural from "../shared/images/NobHillCarouselImages/greetingstour.jpg"
import ladyMural from "../shared/images/NobHillCarouselImages/Lady_Bird.jpg"
import smokingMural from "../shared/images/NobHillCarouselImages/woman-smoking-eyes.jpg"

export const RoutePage = () => {
  return (
    <>
      <section className="mapMain-section">
        <Container>
          <Row>
            <Col>
              <h2 className="display-4 text-center">Nob Hill</h2>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <img id="mapImage" src={routeImage} alt="A map image of downtown Albuquerque with the murals of interest circled."/>
            </Col>
          </Row>
        </Container>
      </section>

        <Container className="my-5">
          <Row>
            <Col>
              <p>Pudding jujubes wafer fruitcake sugar plum. Chocolate sweet roll brownie brownie I love jujubes. Tart muffin halvah. Gummi bears candy canes chocolate bar caramels. Gingerbread toffee sweet donut tootsie roll lollipop chocolate bar halvah danish. Tootsie roll sesame snaps donut marshmallow chocolate cake. Cake I love halvah. Brownie chocolate cake brownie gummi bears. Macaroon chocolate biscuit tootsie roll gummi bears bonbon croissant ice cream. Dragée donut danish I love carrot cake pudding tootsie roll.</p>
            </Col>
          </Row>
        </Container>

      <section className="my-5">
        <Container>
          <Row>
            <Col>
              <hr></hr>
                <Carousel className="py-5">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src= {artisanMural}
                      alt="A large beige and black mural that says Albuquerque and depicts a desert landscape."
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={empireMural}
                      alt="A mural on the side of the Empire Board Games building in Albuquerque, New Mexico that depicts abstract flowers and rockets."
                    />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={eyeMural}
                      alt="A large triangular eye painted onto a recessed door and frame."
                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={andrewMural}
                      alt="A mural of a tall man in a beige coat and black top hat with shadowed eyes. A small dog stands at his feet and on the left is a view of old Route 66, and to the right, a depiction of modern Route 66."
                    />
                    <Carousel.Caption>
                      <h3>Fourth slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src= {changeMural}
                      alt="A mural of a tree with green leaves and white birds sitting in the branches. The branches form around a pink heart, and in the heart is written 'be the change.'"
                    />
                    <Carousel.Caption>
                      <h3>Fifth slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src= {buffaloMural}
                      alt="A large mural on a yellow wall of a little girl and four chickens. The little girl is reaching out to pet one of the chickens."
                    />
                    <Carousel.Caption>
                      <h3>Sixth slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src= {greetingsMural}
                      alt="A mural with a blue background and a small tag saying 'greetings from.' Below the word 'burque' is written in large orange letters, and inside the letters are depictions of hot air balloons, New Mexico landscapes and a Native American."
                    />
                    <Carousel.Caption>
                      <h3>Seventh slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src= {ladyMural}
                      alt="An abstract painting of a woman with gold face paint and long, flowing blue hair. In her hair is a bird's nest with eggs and a bird is landing on a lock of her hair."
                    />
                    <Carousel.Caption>
                      <h3>Eighth slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src= {smokingMural}
                      alt="A painting of a woman with teal hair pulled into a bun looking over her shoulder. Her brows are furrowed and smoke and fire are billowing out of her eyes."
                    />
                    <Carousel.Caption>
                      <h3>Ninth slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
};
