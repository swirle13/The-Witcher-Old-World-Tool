import TerrainTokenPicker from "../components/TerrainTokenPicker";
import { Container } from "react-bootstrap";

export default function LostMount({ t }) {
    return (
        <Container id="LostMountLocationTokens">
            <h3 className='text-center'>Under construction!</h3>
            <TerrainTokenPicker HeaderText="Lost Mount Token Roller" t={t} />
        </Container>
    );
}