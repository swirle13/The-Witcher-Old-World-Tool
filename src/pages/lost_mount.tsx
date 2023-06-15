import TerrainTokenPicker from "../components/terrain_token_picker";
import { Col, Container, Image, Row } from "react-bootstrap";
import LostMountExpansion from "../img/LostMountExpansion.jpg"
import AdventurePackHeader from "../img/expansionHeaders/adventurePack.png"

export default function LostMount() {

    return (
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col xs={6} md={4} className='d-flex justify-content-center'>
                    <Image src={LostMountExpansion} rounded />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs={6} md={4} className='d-flex justify-content-center'>
                    <Image src={AdventurePackHeader} rounded fluid/>
                </Col>
            </Row>
            <TerrainTokenPicker HeaderText="Lost Mount Location Randomizer"/>
        </Container>
    )
}