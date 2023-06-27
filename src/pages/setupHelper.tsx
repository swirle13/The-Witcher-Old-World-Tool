import { useState } from "react";
import { Accordion, Card, Col, Container, Form, FormCheck, FormGroup, FormLabel, Row, Stack } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const expansions = ["Legendary Hunt", "Mages", "Monster Pack", "Monster Trail", "Skellige", "Stretch Goals"]

export default function SetupHelper() {
    const [players, setPlayers] = useState<number>();

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
                                <Container className="gap-2 mt-3 mx-3 d-flex">
                                    <Stack gap={3}>
                                        <Form>
                                            <FormGroup controlId="PlayerSelect">
                                                {/* <h5>Select players</h5> */}
                                                <Card.Title as="h5">Select Players</Card.Title>
                                                <div key="inlinePlayers" className="mb-3">
                                                    {[1, 2, 3, 4, 5].map((num) => (
                                                        <FormCheck
                                                            inline
                                                            type="radio"
                                                            name="group1"
                                                            id={`${num}Player`}
                                                            label={num}
                                                            key={num}
                                                        />
                                                    ))}
                                                </div>
                                            </FormGroup>
                                            <FormGroup controlId="expansionPicker">
                                                <h5>Select your expansions</h5>
                                                <div key="inlineExpansions" className="mb-3">
                                                    {expansions.map((exp) => (
                                                        <FormCheck
                                                            name="group2"
                                                            id={exp}
                                                            label={exp}
                                                            key={exp}
                                                        />
                                                    ))}
                                                </div>
                                            </FormGroup>
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
                                    {/* TODO: Add Starting Resources field for gold/cards*/}
                                    {/* TODO: Add data structure to store setup steps, use map to create divs dynamically */}
                                    <Accordion defaultActiveKey={["0"]} alwaysOpen>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Stack>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}