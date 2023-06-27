import TerrainTokenPicker from "../components/TerrainTokenPicker";
import { Col, Container, Image, Row } from "react-bootstrap";
import LostMountExpansion from "../img/LostMountExpansion.jpg"
import AdventurePackHeader from "../img/expansionHeaders/adventurePack.png"

export default function LostMount() {

    return (
        <Container id="LostMount">
            <Row className='d-flex justify-content-center'>
                <Col xs={12} md={4} className='d-flex justify-content-center'>
                    <Image src={LostMountExpansion} rounded fluid/>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs={10} md={4} className='d-flex justify-content-center'>
                    <Image src={AdventurePackHeader} rounded fluid/>
                </Col>
            </Row>
            <TerrainTokenPicker HeaderText="Lost Mount Location Randomizer"/>
        </Container>
    )
}