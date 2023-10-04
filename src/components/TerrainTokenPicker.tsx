import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import TerrainTokenDeck, { MountainToken, ForestToken, WaterToken } from '../classes/terrains';
import { useState } from 'react';
import PageTitle from './PageTitle';
import { Form } from 'react-bootstrap';


export default function TerrainTokenPicker({
    HeaderText = "Draw a token",
    NumTokens = 1,
    t
}: {
    HeaderText?: string;
    NumTokens?: number;
    t;
}) {
    const [skellige, setSkellige] = useState(false);
    const [localTerrainDeck, setLocalTerrainDeck] = useState(new TerrainTokenDeck());
    const [displayedToken, setToken] = useState<MountainToken | ForestToken | WaterToken>(new ForestToken());
    if (NumTokens > 1) {
        print()
    }

    const handleSkellige = () => {
        setSkellige(!skellige);
        setLocalTerrainDeck(new TerrainTokenDeck(!skellige));
    };

    return (
        <Container fluid className="mx-auto min-h-screen">
            <PageTitle HeaderText={HeaderText} t={t}/>
            <Row id='tokensRow' className='p-2 mb-2'>
                <Col className='d-flex justify-content-center'>
                    {displayedToken?.img()}
                </Col>
            </Row>
            <Row id='TerrainTokenButtons' className='justify-content-center p-2 mb-2'>
                <Col xs="auto" className='p-1'>
                    <Button variant="secondary" size="lg" className='px-1'
                        onClick={() => setToken(localTerrainDeck.drawMountainToken())}
                    >
                        {t('locationTokens.mountain')}
                    </Button>
                </Col>
                <Col xs="auto" className='p-1'>
                    <Button variant="success" size="lg"
                        onClick={() => setToken(localTerrainDeck.drawForestToken())}
                    >
                        {t('locationTokens.forest')}
                    </Button>
                </Col>
                <Col xs="auto" className='p-1'>
                    <Button variant="primary" size="lg" className='px-3'
                        onClick={() => setToken(localTerrainDeck.drawWaterToken())}
                    >
                        {t('locationTokens.water')}
                    </Button>
                </Col>
            </Row>
            <Row id='skelligeToggleRow' className='justify-content-center p-2'>
                <Form.Switch
                    checked={skellige}
                    onChange={() => handleSkellige()}
                    id={t("exps.skellige")}
                    label={t("exps.skellige")}
                />
            </Row>
        </Container>
    );
}
