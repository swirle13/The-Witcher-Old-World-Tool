import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { default as BSNavbar } from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../public/logo192.png';
import useResize from '../util/useResize';

export default function Navbar() {
    const size = useResize();
    return (
        <BSNavbar collapseOnSelect id='Navbar' expand="md" className="bg-body-secondary">
            <Container>
                <BSNavbar.Brand href="#/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    {size.width < 401 ? "TW: Old World Helper" : "The Witcher: Old World Helper"}
                </BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#/communityLinks">Community Links</Nav.Link>
                        <NavDropdown title="Gameplay Tools" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/lostMount">
                                Lost Mount Randomizer
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/monsterRoller">
                                Monster Roller
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/setupHelper">
                                Setup Helper
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#/home">
                                Browse All Tools
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Project Help" id="github-nav-dropdown">
                            <NavDropdown.Item href="https://github.com/swirle13/The-Witcher-Old-World-Tool-Issues/issues">
                                Github Issues
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/swirle13/The-Witcher-Old-World-Tool-Issues/discussions">
                                Github Discussions
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/users/swirle13/projects/2/views/3">
                                Project Timeline
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    )
}
