// Use components from https://react-bootstrap.netlify.app/docs/getting-started/introduction

import Container from 'react-bootstrap/Container';
import { Button, Card, Col, Row } from 'react-bootstrap';

const linkedPages = [
    {
        name: "Lost Mount",
        link: "#/lostMount",
        desc: "Tired of picking two random tokens, choosing one, and having to shuffle them up every time?",
        btn: "Come, Roach"
    },
    {
        name: "Monster Roller",
        link: "#/monsterRoller",
        desc: "Tired of shuffling your tokens, monster cards, and hunting down the mini?",
        btn: "Damn, you're ugly"
    },
    {
        name: "Setup Helper",
        link: "#/setupHelper",
        desc: "A convenient place to help you get your game started.",
        btn: "Wind's howling"
    },
    {
        name: "Inventory Checker",
        link: "#/inventoryChecker",
        desc: "To help those just receiving their The Witcher: Old World game, here's an in-depth guide on what " +
        "you (probably) received.",
        btn: "Medallion's humming.."
    },
    {
        name: "Community Links",
        link: "#/communityLinks",
        desc: "A collection of neat and awesome links from the community. Always growing!",
        btn: "Show me"
    },
]

export default function Home() {

    /*
    TODO: Create simplified home page for generic actions, e.g.
    Setup:
        1. Roll the proper amount of monster cards, subsequent terrain tokens, and randomly assign one to each.
        2. Randomly assign player boards
        3. Generate player cards and gold setup
        All based on provided number of players to adjust, and selected expansions.
    Three monsters pictures, each with three buttons underneath:
        1. Defeated monster
        2. Chased away monster
        3. Complete loss to monster
        Automatically rolls new monster of new appropriate level for situation
    Home screen will have two columns of cards for each tool
        * will collapse to a single column of cards on mobile
        1. Lost Mount/Terrain picker
        2. Monster roller
        3. Setup helper
        4. Inventory checker
    */

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
