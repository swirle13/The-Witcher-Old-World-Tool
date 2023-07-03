import { useEffect, useState } from "react";
import { Accordion, Col, Container, Form, FormCheck, Image, Row, Stack } from "react-bootstrap";
import { compileSteps } from "../classes/setup";
import legendaryHunt from "../img/expansionHeaders/legendaryHunt.png";
import mages from "../img/expansionHeaders/mages.png";
import monsterPack from "../img/expansionHeaders/monsterPack.png";
import monsterTrail from "../img/expansionHeaders/monsterTrail.png";
import skellige from "../img/expansionHeaders/skellige.png";
import adventurePack from "../img/expansionHeaders/adventurePack.png";
import wildHunt from "../img/expansionHeaders/wildHunt.png";
import "../css/SetupHelper.css";
import PageTitle from '../components/PageTitle';

const expansions = ["Legendary Hunt", "Mages", "Monster Pack", "Monster Trail", "Skellige", "Adventure Pack", "Wild Hunt"];
const expansionsImages = [legendaryHunt, mages, monsterPack, monsterTrail, skellige, adventurePack, wildHunt];

export default function SetupHelper() {
    const [players, setPlayers] = useState<number>(1);
    const [expansionsState, setExpansionsState] = useState<Array<boolean>>(
        new Array(expansions.length).fill(false)
    );
    const [steps, setSteps] = useState<Array<string>>(compileSteps());
    const handleExpansionOnChange = (position: number) => {
        const updatedExpansionsState = expansionsState.map((item, index) => index === position ? !item : item);
        if (position === 6) {
            // if Wild Hunt is toggled
            updatedExpansionsState[0] = !updatedExpansionsState[0];  // Legendary Hunt
            updatedExpansionsState[2] = !updatedExpansionsState[2];  // Monster Pack
            updatedExpansionsState[5] = !updatedExpansionsState[5];  // Adventure Pack
        }
        setExpansionsState(updatedExpansionsState);
    };

    useEffect(() => {
        const tempArr = [...expansionsState, players] as [boolean, boolean, boolean, boolean, boolean, boolean, boolean, number];
        setSteps(compileSteps(...tempArr));
    }, [players, expansionsState]);

    return (
        <Container>
            <Col>
                <PageTitle HeaderText='Setup Helper' ConditionalRender='d-lg-none' />
                <Row className="gap-2 mb-4 pb-4">
                    <Col id="setupConfiguration" lg="4">
                        <Form>
                            <Row className='justify-content-center' lg={1}>
                                <Col id="playersCol">
                                    <h4 className='text-center mb-3'>Players</h4>
                                    <div key="inlinePlayers" className="mb-3 pl-1 text-center">
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
                                                className={'align-items-center ' + (num === 5 ? 'mr-0 !important' : '')}
                                                style={{textAlign: 'center'}}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row className='justify-content-center' lg={1}>
                                <Col id="expansionsCol">
                                    <h4 className='text-center mb-3'>Expansions</h4>
                                    <Row key="inlineExpansions" className="text-center justify-content-center" xl={1}>
                                        {expansions.map((exp, index) => (
                                            <Col className={"d-flex justify-content-center " + (index === 6 ? '' : 'mb-2')} xs="auto">
                                                <FormCheck
                                                    name="group2"
                                                    id={exp}
                                                    label={<Image src={expansionsImages[index]} width={150} />}
                                                    key={exp}
                                                    onChange={() => handleExpansionOnChange(index)}
                                                    className='d-flex align-items-center'
                                                    disabled={expansionsState[6] && ["Legendary Hunt", "Monster Pack", "Adventure Pack"].includes(exp)}
                                                />
                                            </Col>
                                        ))}
                                        Under development!
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <div className="vr p-0 mx-2 d-none d-lg-block" />
                    <div className="d-lg-none my-3 px-5"><hr className='my-0' /></div>
                    <Col id="setupInstructions">
                        <Stack gap={3}>
                            <Accordion
                                defaultActiveKey={[...Array(steps.length).keys()].map(a => String(a))}
                                alwaysOpen
                                flush
                            >
                                {steps.map((body, index) => (
                                    <Accordion.Item eventKey={`${index}`}>
                                        <Accordion.Header>
                                            Step {index + 1}
                                        </Accordion.Header>
                                        <Accordion.Body className='lh-lg'>{body}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                            <p className="fw-lighter">
                                Credit to <a href='https://boardgamegeek.com/user/pkitty'>pkitty</a> from BoardGameGeek
                                Forums for their work on <a
                                    href='https://boardgamegeek.com/filepage/254182/witcher-old-world-setup-summary-combined'>
                                    Witcher: Old World - Setup Summary (combined)
                                </a> which provided the foundation for this page.
                            </p>
                        </Stack>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}