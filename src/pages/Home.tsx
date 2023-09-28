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
                        <Card>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>{_.name}</Card.Title>
                                <Card.Text>{_.desc}</Card.Text>
                                <Row className='self-end m-1'>
                                    <Button variant="secondary" href={_.link} className='align-bottom'>
                                        {_.btn}
                                    </Button>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
