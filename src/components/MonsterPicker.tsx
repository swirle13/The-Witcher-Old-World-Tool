import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MonstersDeck, { levelOneMonster, levelTwoMonster, levelThreeMonster } from "../classes/monsters";
import PageTitle from './PageTitle';
import "../css/MonsterPicker.css";

const localMonsterDeck = new MonstersDeck();

export default function MonsterPicker({
    HeaderText = "Randomly draw a token"
}: {
    HeaderText: string;
}) {
    const [displayedLevelOneMonster, setLevelOneMonster] = useState<levelOneMonster>(new levelOneMonster(" "));
    const [displayedLevelTwoMonster, setLevelTwoMonster] = useState<levelTwoMonster>(new levelTwoMonster(" "));
    const [displayedLevelThreeMonster, setLevelThreeMonster] = useState<levelThreeMonster>(new levelThreeMonster(" "));
    const [displayedToken, setToken] = useState<levelOneMonster | levelTwoMonster | levelThreeMonster>();

    useEffect(() => {
        setToken(displayedLevelOneMonster);
    }, [displayedLevelOneMonster]);
    useEffect(() => {
        setToken(displayedLevelTwoMonster);
    }, [displayedLevelTwoMonster]);
    useEffect(() => {
        setToken(displayedLevelThreeMonster);
    }, [displayedLevelThreeMonster]);

    return (
        <Container fluid className="mx-auto min-h-screen">
            <PageTitle HeaderText={HeaderText} />
            <Row id='tokensRow' className='py-2 mb-2'>
                <Col className='d-flex justify-content-center'>
                    {displayedToken?.tokenImg()}
                </Col>
            </Row>
            <Row id='MonsterButtons' className='justify-content-center px-1 py-2 mb-4'>
                <Col xs="auto" className='p-1'>
                    <Button variant="secondary" size="lg"
                        onClick={() => setLevelOneMonster(localMonsterDeck.drawLevelOneMonster())}
                    >
                        Level I
                    </Button>
                </Col>
                <Col xs="auto" className='p-1'>
                    <Button variant="warning" size="lg"
                        onClick={() => setLevelTwoMonster(localMonsterDeck.drawLevelTwoMonster())}
                    >
                        Level II
                    </Button>
                </Col>
                <Col xs="auto" className='p-1'>
                    <Button variant="danger" size="lg"
                        onClick={() => setLevelThreeMonster(localMonsterDeck.drawLevelThreeMonster())}
                    >
                        Level III
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}