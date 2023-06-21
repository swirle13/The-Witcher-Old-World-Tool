import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MonstersDeck, { levelOneMonster, levelTwoMonster, levelThreeMonster } from "../classes/monsters";

// TODO: genericize token picker from terrain_token_picker.tsx and use here for monsters

const localMonsterDeck = new MonstersDeck();

export default function MonsterPicker({
    HeaderText = "Randomly draw a token"
}: {
    HeaderText: string
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
        <Container fluid className="mx-auto">
            <Row className='py-2'>
                <Col className='mx-auto'>
                    <Col className='d-flex justify-content-center'>
                        <h1 className='text-center'>
                            {HeaderText}
                        </h1>
                    </Col>
                    {/* TODO: Update the buttons to images of the respective tokens */}
                    <Row id='TerrainTokenButtons' className='justify-content-center px-1'>
                        <Col xs="auto" className='p-1'>
                            <Button variant="secondary" size="lg"
                                onClick={() => setLevelOneMonster(localMonsterDeck.drawLevelOneMonster())}
                            >
                                Level 1
                            </Button>
                        </Col>
                        <Col xs="auto" className='p-1'>
                            <Button variant="success" size="lg"
                                onClick={() => setLevelTwoMonster(localMonsterDeck.drawLevelTwoMonster())}
                            >
                                Level 2
                            </Button>
                        </Col>
                        <Col xs="auto" className='p-1'>
                            <Button variant="primary" size="lg"
                                onClick={() => setLevelThreeMonster(localMonsterDeck.drawLevelThreeMonster())}
                            >
                                Level 3
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='py-2'>
                <Col className='mx-auto'>
                    <Col className='d-flex justify-content-center'>
                        {displayedToken?.tokenImg()}
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}