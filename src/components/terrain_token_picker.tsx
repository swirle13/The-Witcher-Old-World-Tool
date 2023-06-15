import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import TerrainTokenDeck, { MountainToken, type ForestToken, type WaterToken } from '../classes/terrains';
import { useEffect, useState } from 'react';

const localTerrainDeck = new TerrainTokenDeck();

export default function TerrainTokenPicker({
    HeaderText = "Randomly draw a token"
}: {
    HeaderText: string
}) {
    const [displayedMountainToken, setMountainToken] = useState<MountainToken>();
    const [displayedForestToken, setForestToken] = useState<ForestToken>();
    const [displayedWaterToken, setWaterToken] = useState<WaterToken>();
    const [displayedToken, setToken] = useState<MountainToken | ForestToken | WaterToken>();

    useEffect(() => {
        setToken(displayedMountainToken);
    }, [displayedMountainToken]);
    useEffect(() => {
        setToken(displayedForestToken);
    }, [displayedForestToken]);
    useEffect(() => {
        setToken(displayedWaterToken);
    }, [displayedWaterToken]);

    return (
        <Container fluid className="mx-auto">
            <Row>
                <Col className='gap-3 p-3 mx-auto' lg="auto">
                    <Col className='d-flex justify-content-center'>
                        <h1 >
                            {HeaderText}
                        </h1>
                    </Col>
                    {/* https://mdbootstrap.com/docs/react/utilities/spacing/ */}
                    <div className="d-grid gap-2 justify-content-center">
                        <Row>
                            <Col md>
                                <Button variant="secondary" size="lg"
                                    onClick={() => setMountainToken(localTerrainDeck.drawMountainToken())}
                                >
                                    Mountain
                                </Button>
                            </Col>
                            <Col md>
                                <Button variant="success" size="lg"
                                    onClick={() => setForestToken(localTerrainDeck.drawForestToken())}
                                >
                                    Forest
                                </Button>
                            </Col>
                            <Col md>
                                <Button variant="primary" size="lg"
                                    onClick={() => setWaterToken(localTerrainDeck.drawWaterToken())}
                                >
                                    Water
                                </Button>
                            </Col>
                        </Row>
                        <Row className='justify-content-center' s>
                            <Col md className='justify-content-center'>
                                <Row md="auto" className='justify-content-center'>
                                    <Col className='ms-1 me-1 ' xs="2">
                                        <h2>
                                            {displayedToken?.number}{" "}{displayedToken?.name}
                                        </h2>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}