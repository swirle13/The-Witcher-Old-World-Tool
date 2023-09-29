import { Col, Container, Row } from "react-bootstrap";

export default function Footer({ t }) {
    return (
        <footer className='footer bg-body-tertiary mt-auto' style={{ padding: '2rem' }}>
            <Container fluid className='text-md-left'>
                <Row className='footerLinks'>
                    <Col className='col-md-6 mt-md-0 mt-3'>
                        <h5 className="text-uppercase">{t("footer.aboutTitle")}</h5>
                        {t("footer.aboutBody").map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </Col>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <Col className='col-md-3 mb-md-0 mb-3'>
                        <h5 className="text-uppercase">{t("footer.github")}</h5>
                        <ul className="list-unstyled">
                            {t("footer.githubLinks").map((obj, index) => (
                                <li key={index}><a href={obj.link}>{obj.text}</a></li>
                            ))}
                        </ul>
                    </Col>

                    <Col className='col-md-3 mb-md-0 mb-3'>
                        <h5 className="text-uppercase">{t("footer.communities")}</h5>
                        <ul className="list-unstyled">
                            {t("footer.communitiesLinks").map((obj, index) => (
                                <li key={index}><a href={obj.link}>{obj.text}</a></li>
                            ))}
                        </ul>
                        <h5 className="text-uppercase">{t("footer.supportTitle")}</h5>
                        <ul className="list-unstyled">
                            {t("footer.supportLinks").map((obj, index) => (
                                <li key={index}><a href={obj.link}>{obj.text}</a></li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row className='footerBottom text-center py-3'>
                    {/* insert some text here, copyright, etc */}
                </Row>
            </Container>
        </footer>
    );
}