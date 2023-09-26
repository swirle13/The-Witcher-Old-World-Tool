import TerrainTokenPicker from "../components/TerrainTokenPicker";
import { Container } from "react-bootstrap";

export default function LostMount({ t }) {
    return (
        <Container id="LostMountLocationTokens">
            <h3 className='text-center'>{t("common.underConstruction")}</h3>
            <TerrainTokenPicker HeaderText={t("lostMount.title")} t={t} />
        </Container>
    );
}