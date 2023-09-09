import { Container } from "react-bootstrap";
import MonsterPicker from "../components/MonsterPicker";

export default function MonsterRoller({ t }) {
    return (
        <Container id="MonsterRoller">
            <MonsterPicker HeaderText="Roll A New Monster" t={t} />
        </Container>
    );
}