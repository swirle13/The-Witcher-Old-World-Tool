import TerrainTokenPicker from "../components/TerrainTokenPicker";
import { Container } from "react-bootstrap";

export default function LocationTokens() {
    return (
        <Container id="LocationTokens">
            <TerrainTokenPicker HeaderText="Location Tokens"/>
        </Container>
    )
}