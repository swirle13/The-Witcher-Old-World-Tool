import TerrainTokenPicker from "../components/TerrainTokenPicker";
import { Container } from "react-bootstrap";

export default function LocationTokens({t}) {
    return (
        <Container id="LocationTokens">
            <TerrainTokenPicker HeaderText={t("locationTokens.title")} t={t}/>
        </Container>
    )
}