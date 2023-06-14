// Use components from https://react-bootstrap.netlify.app/docs/getting-started/introduction

import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './img/logo192.png';
import Button from 'react-bootstrap/esm/Button';
import { ButtonGroup } from 'react-bootstrap';
import TerrainTokenDeck, { type ForestToken, type MountainToken, type WaterToken } from '../src/classes/terrains';
import { useEffect, useState } from 'react';

const localTerrainDeck = new TerrainTokenDeck();

export default function App() {
  const [displayedMountainToken, setMountainToken] = useState<MountainToken>();
  const [displayedForestToken, setForestToken] = useState<ForestToken>();
  const [displayedWaterToken, setWaterToken] = useState<WaterToken>();

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="mx-auto">
        <Row>
          <Col />
          <Col className='d-grid gap-3 p-3' xxl="auto">
            <h1>
              Randomly draw a token
            </h1>
            <Container className='d-grid gap-3 p-3 ms-3 me-3'>
              <Row className='d-flex align-items-center'>
                <Col md lg="5">
                  <Button
                    variant="outline-secondary"
                    onClick={() => setMountainToken(localTerrainDeck.drawMountainToken())}
                  >
                    Mountain
                  </Button>
                </Col>
                <Col sm lg="1">
                  {displayedMountainToken?.number}
                </Col>
                <Col>
                  {displayedMountainToken?.name}
                </Col>
              </Row>
              <Row className='d-flex align-items-center'>
                <Col md lg="5">
                  <Button
                    variant="outline-secondary"
                    onClick={() => setForestToken(localTerrainDeck.drawForestToken())}
                  >
                    Forest
                  </Button>
                </Col>
                <Col sm lg="1">
                  {displayedForestToken?.number}
                </Col>
                <Col>
                  {displayedForestToken?.name}
                </Col>
              </Row>
              <Row className='d-flex align-items-center'>
                <Col md lg="5">
                  <Button
                    variant="outline-secondary"
                    onClick={() => setWaterToken(localTerrainDeck.drawWaterToken())}
                  >
                    Water
                  </Button>
                </Col>
                <Col sm lg="1">
                  {displayedWaterToken?.number}
                </Col>
                <Col>
                  {displayedWaterToken?.name}
                </Col>
              </Row>
            </Container>
          </Col>
          <Col />
        </Row>
      </Container>
    </Container>
  );
}
