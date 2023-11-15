import Container from 'react-bootstrap/Container';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function Home({ t }): JSX.Element {
    /*
        Breakpoints
        ============================
        X-Small		 None	<576px
        Small		 sm		≥576px
        Medium		 md		≥768px
        Large		 lg		≥992px
        Extra large	 xl		≥1200px
        XX large	xxl		≥1400px
    */

    return (
        <Container className="p-6">
            <Row xs={1} md={2} lg={3} className="g-4 p-3">
                {t("home.linkedPages").map((_, idx) => (
                    <Col key={idx}>
                        <Card className="h-100">
                            <Card.Img variant="top" src="" />
                            <Col id="horizontalCardTextCol" className="px-0 d-flex">
                                <Row id="horizontalCardTextRow" className="g-0 flex-grow-1 d-flex" /* xs={1} */>
                                    <Card.Body>
                                        <Card.Title>{_.name}</Card.Title>
                                        <Card.Text>{_.desc}</Card.Text>
                                    </Card.Body>
                                    <Button variant="secondary" className='align-self-end pt-auto m-3 flex-shrink-1'
                                        href={_.link}>
                                        {_.btn}
                                    </Button>
                                </Row>
                            </Col>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
