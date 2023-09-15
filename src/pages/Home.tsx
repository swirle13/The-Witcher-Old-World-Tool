import Container from 'react-bootstrap/Container';
import { Button, Card, Col, Row } from 'react-bootstrap';


export default function Home({ t }): JSX.Element {
    const linkedPages = [
        {
            name: t("Setup Helper"),
            link: "#/setupHelper",
            desc: t("A dynamically updated set of consolidated instructions for any expansion and player combination."),
            btn: t("Wind's howling…")
        },
        {
            name: t("Location Tokens"),
            link: "#/locationTokens",
            desc: t("Easily draw any terrain token type. Always randomized. No shuffling of cardboard tokens."),
            btn: t("Explore the Continent")
        },
        {
            name: t("Monster Roller"),
            link: "#/monsterRoller",
            desc: t("Tired of shuffling your tokens, monster cards, and hunting down the mini?"),
            btn: t("Damn, you're ugly")
        },
        {
            name: t("Community Links"),
            link: "#/communityLinks",
            desc: t("A collection of neat and awesome links from the community. Always growing!"),
            btn: t("Show me")
        },
        {
            name: t("Inventory Checker"),
            link: "#/inventoryChecker",
            desc: t("To help those just receiving their The Witcher: Old World game, here's an in-depth guide on what you (hopefully) received."),
            btn: t("Medallion's humming…")
        },
        {
            name: t("Lost Mount"),
            link: "#/lostMount",
            desc: t("A more specific variant of the Location Token page with two tokens to choose from."),
            btn: t("Come, Roach")
        },
    ];
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
                {linkedPages.map((_, idx) => (
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
