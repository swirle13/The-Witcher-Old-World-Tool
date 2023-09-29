import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import MonstersDeck, { levelOneMonster, levelTwoMonster, levelThreeMonster } from "../classes/monsters";
import PageTitle from './PageTitle';
import "../css/MonsterPicker.css";


export default function MonsterPicker({
    HeaderText = "Randomly draw a token",
    t
}: {
    HeaderText: string;
    t;
}) {
    const expansionsNames = ["legendaryHunt", "wildHunt", "monsterPack", "mountedEredin"];
    const [localMonsterDeck, setLocalMonsterDeck] = useState(new MonstersDeck());
    const [displayedToken, setToken] = useState<levelOneMonster | levelTwoMonster | levelThreeMonster>(
        new levelOneMonster("")
    );
    const [expansions, setExpansions] = useState(new Array(expansionsNames.length).fill(false));

    const handleToggleExpansions = (position: number) => {
        let updatedExpansions = expansions.map((item, index) => index === position ? !item : item);
        if (position === 0 && !expansions[0] && expansions[1]) {
            // if turning on Legendary Hunt and Wild Hunt is already on
            updatedExpansions = updatedExpansions.map((item, index) => index === 1 ? !item : item);
        } else if (position === 1 && !expansions[1] && expansions[0]) {
            // if turning on Wild Hunt and Legendary Hunt is already on
            updatedExpansions = updatedExpansions.map((item, index) => index === 0 ? !item : item);
        }
        setExpansions(updatedExpansions);
    };
    
    useEffect(() => {
        setLocalMonsterDeck(new MonstersDeck(...expansions));
    }, [expansions]);

    return (
        <Container fluid className="mx-auto min-h-screen">
            <PageTitle HeaderText={HeaderText} t={t}/>
            <Row id='tokensRow' className='py-2'>
                <Col className='justify-content-center'>
                    {displayedToken?.tokenImg(t)}
                </Col>
            </Row>
            <Row id='MonsterButtons' className='justify-content-center px-1 py-2 mb-4'>
                <Col xs="auto" className='p-1'>
                    <Button variant="secondary" size="lg" style={{ width: 75 }}
                        onClick={() => setToken(localMonsterDeck.drawLevelOneMonster())}
                    >
                        I
                    </Button>
                </Col>
                <Col xs="auto" className='p-1'>
                    <Button variant="warning" size="lg" style={{ width: 75 }}
                        onClick={() => setToken(localMonsterDeck.drawLevelTwoMonster())}
                    >
                        II
                    </Button>
                </Col>
                <Col xs="auto" className='p-1'>
                    <Button variant="danger" size="lg" style={{ width: 75 }}
                        onClick={() => setToken(localMonsterDeck.drawLevelThreeMonster())}
                    >
                        III
                    </Button>
                </Col>
                {expansions[0] || expansions[1] ?
                    <Col xs="auto" className='p-1'>
                        <Button
                            size="lg"
                            variant="custom"
                            style={{
                                backgroundColor:"#960a0a",
                                color:"#ffffff", /* tint on cursor hover: "#640a0a" */
                            }}
                            onClick={() => setToken(localMonsterDeck.drawLegendaryMonster())}
                        >
                            {expansions[0] ? t("monsterPicker.legendary") : t("exps.wildHunt")}
                        </Button>
                    </Col>
                    : <></>}
            </Row>
            <Row id='expansionToggleRow' className='justify-content-center p-2'>
                {expansionsNames.map((name, index) => (
                    <Form.Switch
                        checked={expansions[index]}
                        onChange={() => handleToggleExpansions(index)}
                        id={t(`exps.${name}`)}
                        label={t(`exps.${name}`)}
                        key={name}
                    />
                ))}
            </Row>
            <Row className='justify-content-center p-2 m-4' id="ToggleTooltip">
                <Col className='mx-3' style={{ maxWidth: "550px" }}>
                    <strong className="fw-light text-center">{t("monsterPicker.toggle")}</strong>
                    <ul className='fw-lighter'>
                        <li>{t("exps.legendaryHunt") + ": " + t("monsters.legendaryHunt", { joinArrays: ', ' }) + " (" + t("monsterPicker.allLegendary") + ")"}</li>
                        <li>{t("exps.wildHunt")}: {t("monsters.Eredin")}, {t("monsters.Nithral")}, {t("monsters.Imlerith")}, {t("monsters.Caranthir")} ({t("monsterPicker.allLegendary")})</li>
                        <li>{t("exps.monsterPack")}: {t("monsters.Koshchey")} ({t("monsters.lvl3")}), {t("monsters.Kayran")} ({t("monsterPicker.legendary")}). {t("monsterPicker.sirenExplain")}.
                        </li>
                        <li>{t("exps.mountedEredin")}: {t("exps.mountedEredin")} ({t("monsters.lvl3")})</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}