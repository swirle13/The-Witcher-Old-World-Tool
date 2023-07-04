import { Container } from "react-bootstrap";
import MonsterPicker from "../components/MonsterPicker";

export default function MonsterRoller() {
    return (
        <Container id="MonsterRoller">
            <MonsterPicker HeaderText="Roll A New Monster"/>
        </Container>
    )
}