import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import TerrainTokenDeck, { MountainToken, ForestToken, WaterToken } from '../classes/terrains';
import { useEffect, useState } from 'react';
import PageTitle from './PageTitle';

const localTerrainDeck = new TerrainTokenDeck();

export default function TerrainTokenPicker({
    HeaderText = "Draw a token"
}: {
    HeaderText: string;
}) {
    const [displayedMountainToken, setMountainToken] = useState<MountainToken>(new MountainToken());
    const [displayedForestToken, setForestToken] = useState<ForestToken>(new ForestToken());
    const [displayedWaterToken, setWaterToken] = useState<WaterToken>(new WaterToken());
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
        <Container fluid className="mx-auto min-h-screen">
            <PageTitle HeaderText={HeaderText} />
            <Row id='tokensRow' className='py-2 mb-2'>
                <Col className='d-flex justify-content-center'>
                    {displayedToken?.img()}
                </Col>
            </Row>
            <Row id='TerrainTokenButtons' className='justify-content-center px-1 py-2 mb-4'>
                <Col xs="auto" className='p-1'>
                    <Button variant="secondary" size="lg" className='px-1'
                        onClick={() => setMountainToken(localTerrainDeck.drawMountainToken())}
                    >
                        Mountain
                    </Button>
                </Col>
                <Col xs="auto" className='p-1'>
                    <Button variant="success" size="lg"
                        onClick={() => setForestToken(localTerrainDeck.drawForestToken())}
                    >
                        Forest
                    </Button>
                </Col>
                <Col xs="auto" className='p-1'>
                    <Button variant="primary" size="lg" className='px-3'
                        onClick={() => setWaterToken(localTerrainDeck.drawWaterToken())}
                    >
                        Water
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
