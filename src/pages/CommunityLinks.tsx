import { Card, Col, Container, Row } from "react-bootstrap";
import PageTitle from '../components/PageTitle';


export default function CommunityLinks({ t }) {
    return (
        <Container id="CommunityLinksBaseContainer">
            <PageTitle HeaderText={t('communityLinks.title')} t={t}/>
            <Row xs={1} md={2} lg={4} className="g-4 p-2">
                {t("communityLinks.links").map((_, idx) => (
                    <Col key={idx}>
                        <Card className="min-h-1000">
                            <Card.Body className="min-h-1000">
                                <Card.Title>{_.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{_.subtitle}</Card.Subtitle>
                                <Card.Text>{_.desc}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href={_.link}>{_.title}</Card.Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}