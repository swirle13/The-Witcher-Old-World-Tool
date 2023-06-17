import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {default as BSNavbar} from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/logo192.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <BSNavbar collapseOnSelect id='Navbar' bg="light" expand="lg" className="bg-body-tertiary">
            <Container>
                <BSNavbar.Brand href="#home" className=''>
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    TW: OW Helper
                </BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={`communityLinks`}>Community Links!</Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Gameplay Tools" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to={`lostMount`}>Lost Mount Randomizer</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Browse All Tools
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    )
}