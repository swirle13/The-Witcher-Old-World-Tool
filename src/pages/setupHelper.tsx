import { useState } from "react";
import { Col, Container, Form, FormCheck, FormGroup, FormLabel, Row, Stack } from "react-bootstrap";

const expansions = ["Legendary Hunt", "Mages", "Monster Pack", "Monster Trail", "Skellige", "Stretch Goals"]

export default function SetupHelper() {
    const [players, setPlayers] = useState<number>();

    return (
        <Container>
            <Col className="justify-content-center">
                <Row xs={1} md={1} lg={1} className="border-4 my-2">
                    <h1 className='text-center'>Setup Helper</h1>
                </Row>
                <Row xs={1} md={2} lg={2} className="border-4">
                    <Col id="setupChoices">
                        <Container className="gap-2 tw-bg-slate-700 rounded-lg drop-shadow">
                            <Stack gap={3}>
                                <Form>
                                    <FormGroup controlId="PlayerSelect">
                                        <h5>Select players</h5>
                                        <div key="inlinePlayers" className="mb-3">
                                            {[1, 2, 3, 4, 5].map((num) => (
                                                <FormCheck
                                                    inline
                                                    type="radio"
                                                    name="group1"
                                                    id={`${num}Player`}
                                                    label={num}
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
                                                />
                                            ))}
                                        </div>
                                    </FormGroup>
                                </Form>
                            </Stack>
                        </Container>
                    </Col>
                    <Col id="setupResults">
                        <Container>
                            <Stack gap={3}>
                                {/* TODO: Add data structure to store setup steps, use map to create divs dynamically */}
                                <div>item 1</div>
                                <div>item 2</div>
                                <div>item 3</div>
                            </Stack>
                        </Container>
                    </Col>
                </Row>
            </Col >
        </Container >
    )
}