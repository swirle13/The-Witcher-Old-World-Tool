import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { default as BSNavbar } from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../src/img/logo192.png';
import useResize from '../util/useResize';
import { myLangs } from "../i18n";
import { ReactNode } from 'react';
import './Navbar.css';

export default function Navbar({ t, i18n }) {
    const size = useResize();

    return (
        <BSNavbar collapseOnSelect id='Navbar' expand="lg" className="bg-body-secondary">
            <Container className="p-6">
                <BSNavbar.Brand href="#/" className='ps-3'>
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    {/* TODO: determine length of title in translated language and adjust accordingly */}
                    {size.width < 401 ? t("navbar.titleShort") : t("navbar.titleLong")}
                </BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#/communityLinks">{t('navbar.communityLinks')}</Nav.Link>
                        <NavDropdown title={t("navbar.gameplayTools")} id="basic-nav-dropdown" className='text-wrap'>
                            <NavDropdown.Item href="#/setupHelper">
                                {t('navbar.setupHelper')}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/locationTokens">
                                {t('navbar.locationTokens')}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/monsterRoller">
                                {t('navbar.monsterRoller')}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/lostMount">
                                {t('navbar.lostMount')}
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#/">
                                {t('navbar.browseAllTools')}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={t("navbar.projectHelp")} id="github-nav-dropdown">
                            <NavDropdown.Item href="https://github.com/swirle13/The-Witcher-Old-World-Tool-Issues/issues">
                                {t('navbar.githubIssues')}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/swirle13/The-Witcher-Old-World-Tool-Issues/discussions">
                                {t('navbar.githubDiscussions')}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/users/swirle13/projects/2/views/3">
                                {t('navbar.projectTimeline')}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={t("navbar.__flag")} id="lang-nav-dropdown" align={"end"}>
                            {Object.entries(myLangs).map(([code, val], index): ReactNode =>
                                <NavDropdown.Item key={index} onClick={() => i18n.changeLanguage(code)}>
                                    {val}
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
}
