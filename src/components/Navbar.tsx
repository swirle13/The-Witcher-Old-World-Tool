import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { default as BSNavbar } from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../public/logo192.png';
import useResize from '../util/useResize';
import { myLangs } from "../i18n";
import { ReactNode } from 'react';

export default function Navbar({ t, i18n }) {
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
                    {size.width < 401 ? t("Old World Helper") : t("The Witcher: Old World Helper")}
                </BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#/communityLinks">{t('Community Links')}</Nav.Link>
                        <NavDropdown title={t("Gameplay Tools")} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/setupHelper">
                                {t('Setup Helper')}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/locationTokens">
                                {t('Location Tokens')}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/monsterRoller">
                                {t('Monster Roller')}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/lostMount">
                                {t('Lost Mount Locations')}
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#/">
                                {t('Browse All Tools')}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={t("Project Help")} id="github-nav-dropdown">
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
                        <NavDropdown title={t("__flag")} id="lang-nav-dropdown">
                            {Object.entries(myLangs).map(([code, val]): ReactNode =>
                                (<NavDropdown.Item onClick={() => i18n.changeLanguage(code)}>{val}</NavDropdown.Item>)
                            )}
                        </NavDropdown>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
}
