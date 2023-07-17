import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import MonstersDeck, { levelOneMonster, levelTwoMonster, levelThreeMonster } from "../classes/monsters";
import PageTitle from './PageTitle';
import "../css/MonsterPicker.css";


export default function MonsterPicker({
    HeaderText = "Randomly draw a token"
}: {
    HeaderText: string;
}) {
    const expansionsNames = ["Legendary Hunt", "Wild Hunt", "Monster Pack", "Mages"];
    const [localMonsterDeck, setLocalMonsterDeck] = useState(new MonstersDeck());
    const [displayedToken, setToken] = useState<levelOneMonster | levelTwoMonster | levelThreeMonster>(new levelOneMonster(" "));
    const [expansions, setExpansions] = useState(new Array(expansionsNames.length).fill(false));

    const handleToggleExpansions = (position: number) => {
        let updatedExpansions = expansions.map((item, index) => index === position ? !item : item);
        if (position === 0 && !expansions[0] && expansions[1]) {
            // if turning on Legendary Hunt and Wild Hunt is already on
            updatedExpansions = updatedExpansions.map((item, index) => index === 1 ? !item : item);
        } else if (position === 1 && !expansions[1] && expansions[0]) {
            // if turning on Wild Hunt and Legendary Hunt is already on
            updatedExpansions = updatedExpansions.map((item, index) => index === 0 ? !item : item);
        }
        setExpansions(updatedExpansions);
    };
    
    useEffect(() => {
        setLocalMonsterDeck(new MonstersDeck(...expansions));
    }, [expansions]);

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
                        onClick={() => setToken(localMonsterDeck.drawLevelOneMonster())}
                    >
                        Level I
                    </Button>
                </Col>
                <Col xs="auto" className='p-1'>
                    <Button variant="warning" size="lg"
                        onClick={() => setToken(localMonsterDeck.drawLevelTwoMonster())}
                    >
                        Level II
                    </Button>
                </Col>
                <Col xs="auto" className='p-1'>
                    <Button variant="danger" size="lg"
                        onClick={() => setToken(localMonsterDeck.drawLevelThreeMonster())}
                    >
                        Level III
                    </Button>
                </Col>
                {expansions[0] || expansions[1] ?
                    <Col xs="auto" className='p-1'>
                        <Button variant="danger" size="lg"
                            onClick={() => setToken(localMonsterDeck.drawLegendaryMonster())}
                        >
                            Legendary
                        </Button>
                    </Col>
                    : <></>}
            </Row>
            <Row id='expansionToggleRow' className='justify-content-center p-2'>
                {expansionsNames.map((name, index) => (
                    <Form.Switch
                        checked={expansions[index]}
                        onChange={() => handleToggleExpansions(index)}
                        label={name}
                        key={name}
                    />
                ))}
            </Row>
        </Container>
    );
}