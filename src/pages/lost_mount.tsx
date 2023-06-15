import TerrainTokenPicker from "../components/terrain_token_picker";
import { Col, Container, Image, Row } from "react-bootstrap";
import img from "../img/LostMountExpansion.jpg"

export default function LostMount() {

    return (
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col xs={6} md={4} className='d-flex justify-content-center'>
                    <Image src={img} rounded />
                </Col>
            </Row>
            <TerrainTokenPicker />
        </Container>
    )
}