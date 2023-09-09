import { Card, Col, Container, Row } from "react-bootstrap";
import PageTitle from '../components/PageTitle';


export default function CommunityLinks({ t }) {
    const links = [
        {
            title: "Official Discord",
            subtitle: "Link",
            desc: "The Go On Board official discord. Discuss rules, share your painted minis, or just chat about the game.",
            link: "https://discord.com/invite/mX8yvYQTuq",
        },
        {
            title: "Official Guide: Organizing All Cards in Big Box",
            subtitle: "Video",
            desc: "A more in-depth guide on how to fit all the cards inside the Big Box.",
            link: "https://youtu.be/Hj7oTXJOFfg",
        },
        {
            title: "Official FAQ: Clarifying ambiguous rules/situations",
            subtitle: "PDF",
            desc: "Answers and clarification for potentially confusing or difficult situations.",
            link: "https://www.dropbox.com/s/6fxx058x76kc9rn/FAQ_ENG_v01.pdf?dl=0",
        },
        {
            title: "BoardGameGeek Old World Files",
            subtitle: "Link",
            desc: "Another corner for the hobby where members upload their own creations, automata, guides, and more.",
            link: "https://boardgamegeek.com/boardgame/331106/witcher-old-world/files",
        },
        {
            title: "Witcher Monster Tray Position",
            subtitle: "Community member created",
            desc: "A detailed guide on locations of all the monster minis and their locations in their respective trays.",
            link: "https://boardgamegeek.com/filepage/259976/witcher-monster-tray-position",
        },
        {
            title: "Card and Token Organizers",
            subtitle: "Community member created",
            desc: "3D printer files for card organizers to better fit in the Big Box, as well as token organizers.",
            link: "https://thingiverse.com/thing:6078120",
        },
    ];

    return (
        <Container id="CommunityLinksBaseContainer">
            <PageTitle HeaderText={t('Community Links')} t={t}/>
            <Row xs={1} md={2} lg={4} className="g-4 p-2">
                {links.map((_, idx) => (
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