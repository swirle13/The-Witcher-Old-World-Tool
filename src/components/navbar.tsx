import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { default as BSNavbar } from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../public/logo192.png';

export default function Navbar() {
    return (
        <BSNavbar collapseOnSelect id='Navbar' bg="dark" expand="xl" className="bg-body-primary" variant="dark">
            <Container>
                <BSNavbar.Brand href="/" className=''>
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    The Witcher: Old World Helper
                </BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#/communityLinks">Community Links</Nav.Link>
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
