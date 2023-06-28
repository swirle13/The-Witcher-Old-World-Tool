import { useEffect, useState } from "react";
import { Accordion, Card, Col, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, Image, Row, Stack } from "react-bootstrap";
import { compileSteps } from "../classes/setup";
import CardHeader from "react-bootstrap/esm/CardHeader";
import legendaryHunt from "../img/expansionHeaders/legendaryHunt.png";
import mages from "../img/expansionHeaders/mages.png";
import monsterPack from "../img/expansionHeaders/monsterPack.png";
import monsterTrail from "../img/expansionHeaders/monsterTrail.png";
import skellige from "../img/expansionHeaders/skellige.png";
import lostMount from "../img/expansionHeaders/lostMount.png";
import wildHunt from "../img/expansionHeaders/wildHunt.png";

const expansions = ["Legendary Hunt", "Mages", "Monster Pack", "Monster Trail", "Skellige", "Lost Mount", "Wild Hunt (Under development!)"];
const expansionsImages = [legendaryHunt, mages, monsterPack, monsterTrail, skellige, lostMount, wildHunt];

export default function SetupHelper() {
    const [players, setPlayers] = useState<number>(1);
    const [expansionsState, setExpansionsState] = useState<Array<boolean>>(
        new Array(expansions.length).fill(false)
    );
    const [steps, setSteps] = useState<Array<string>>(compileSteps());
    const handleExpansionOnChange = (position: number) => {
        const updatedExpansionsState = expansionsState.map((item, index) => index === position ? !item : item);
        setExpansionsState(updatedExpansionsState);
    };

    useEffect(() => {
        const tempArr = [...expansionsState, players] as [boolean, boolean, boolean, boolean, boolean, boolean, boolean, number];
        setSteps(compileSteps(...tempArr));
    }, [players, expansionsState]);

    return (
        <Container>
            <Col>
                <Row md={1} lg={1} className="my-2">
                    <h1 className='text-center'>Setup Helper</h1>
                </Row>
                <Row className="gap-2">
                    <Col id="setupConfiguration" lg="4">
                        <Card>
                            <CardHeader as="h3" className="text-center">Setup Configuration</CardHeader>
                            <Container className="gap-2 pt-3" fluid>
                                <Stack gap={3}>
                                    <Form>
                                        <Row className='justify-content-center' xs={1}>
                                            <Col>
                                                <FormGroup controlId="PlayerSelect">
                                                    <h5 className='text-center'>Select Players</h5>
                                                    <div key="inlinePlayers" className="mb-3 text-center">
                                                        {[1, 2, 3, 4, 5].map((num) => (
                                                            <FormCheck
                                                                defaultChecked={num === 1}
                                                                inline
                                                                type="radio"
                                                                name="group1"
                                                                id={`${num}Player`}
                                                                label={num}
                                                                key={num}
                                                                onChange={() => { setPlayers(num); }}
                                                            />
                                                        ))}
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="auto">
                                                <FormGroup controlId="expansionPicker">
                                                    <h5 className='text-center'>Select your expansions</h5>
                                                    <Col key="inlineExpansions" className="mb-3 text-center" sm="auto">
                                                        {expansions.map((exp, index) => (
                                                            <FormCheck
                                                                name="group2"
                                                                id={exp}
                                                                label={<Image src={expansionsImages[index]} width={150} />}
                                                                key={exp}
                                                                onChange={() => handleExpansionOnChange(index)}
                                                            />
                                                        ))}
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Stack>
                            </Container>
                        </Card>
                    </Col>
                    <div className="vr p-0 mx-2 d-none d-lg-block"></div>
                    <Col id="setupInstructions">
                        <Card>
                            <CardHeader as="h3" className="text-center">Setup Instructions</CardHeader>
                            <Container className="gap-2 my-3 d-flex">
                                <Stack gap={3}>
                                    <Accordion defaultActiveKey={["0"]} alwaysOpen flush>
                                        {steps.map((body, index) => (
                                            <Accordion.Item eventKey={`${index}`}>
                                                <Accordion.Header>Step {index + 1}</Accordion.Header>
                                                <Accordion.Body>{body}</Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </Stack>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}