import TerrainTokenPicker from "../components/TerrainTokenPicker";
import { Container } from "react-bootstrap";

export default function LocationTokens({t}) {
    return (
        <Container id="LocationTokens">
            <TerrainTokenPicker HeaderText="Location Tokens" t={t}/>
        </Container>
    )
}