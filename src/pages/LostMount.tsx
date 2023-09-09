import TerrainTokenPicker from "../components/TerrainTokenPicker";
import { Container } from "react-bootstrap";

export default function LostMount({ t }) {
    return (
        <Container id="LostMountLocationTokens">
            <h3 className='text-center'>{t("Under Construction!")}</h3>
            <TerrainTokenPicker HeaderText={t("Lost Mount Locations")} t={t} />
        </Container>
    );
}