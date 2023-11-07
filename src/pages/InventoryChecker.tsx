import { Accordion, Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';
import { simplifiedCards, cards } from '../classes/inventory';
import { useState } from 'react';
import img = require("../img/inventory/adventurePackExample.png");
import CardDetails from '../components/CardDetails';
import HorizontalSpacer from '../components/HorizontalSpacer';
import Title from '../components/TitleWithUnderline';

export default function inventoryChecker({ t }) {
    const cardPacks = simplifiedCards;
    const [packsState, setPacksState] = useState<Array<boolean>>(
        new Array(cardPacks.length).fill(false)
    );
    // const [cardsState, setCardsState] = useState<Array<boolean>>(
    //     new Array(simplifiedCards.length).fill(false)
    // );

    const handlePacksChange = (position: number) => {
        const updatedPacksState = packsState.map((item, index) => index === position ? !item : item);
        setPacksState(updatedPacksState);
    };
    // const handleCardsChange = (position: number) => {
    //     const updatedCardsState = cardsState.map((item, index) => index === position ? !item : item);
    //     setCardsState(updatedCardsState);
    // };

    return (
        <Container>
            <PageTitle HeaderText={t('inventoryChecker.title')} />
            <Accordion id="NotesAccordion" flush defaultActiveKey="0">
                <Accordion.Item eventKey="0" key={0}>
                    <Accordion.Header>
                        {t('inventoryChecker.noteTitle')}
                    </Accordion.Header>
                    <Accordion.Body className='lh-md'>
                        {t('inventoryChecker.noteText.0')}
                        <br /><br />
                        {t('inventoryChecker.noteText.1')}
                        <br /><br />
                        {t('inventoryChecker.noteText.2')}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" key={1}>
                    <Accordion.Header>
                        {t('inventoryChecker.legendHeader')}
                    </Accordion.Header>
                    <Accordion.Body className='lh-md'>
                        {t('inventoryChecker.legendBody.header')}
                        <br key={0} /><br key={1} />
                        <dl key={2}>
                            {t('inventoryChecker.legendBody.body').map((item, index) => (
                                <div key={index}>
                                    <dt key={index + 10}>{item.title}</dt>
                                    {item.details.map((desc, idx) => (
                                        <dd key={idx + 50}>{desc}</dd>
                                    ))}
                                </div>
                            ))}
                        </dl>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Title
                HeaderText={t('inventoryChecker.cardSubtitle')}
                HeaderSize={2}
            />
            <Row id="packRow" key="packRow" className="mb-2 justify-content-center" md="8">
                {cardPacks.map((pack, index) => (
                    <Row key={index} className="ps-6 justify-content-center">
                        <h4 className='text-center'>{pack.name}</h4>
                        <Row className='g-0'>
                            {/* TODO: Update all of this ul/li crap with a new class for displaying data */}
                            <CardDetails card={cards[0].cards[0]} />
                            <ul className='ms-4'>
                                <li key={"Expansions"}>
                                    {/* TODO: expand pack.expansions array; no longer a single string */}
                                    {t("common.expansions")}: {t(`inventoryChecker.${pack.expansions}`)}
                                </li>
                                {/* TODO: make these small, reusable components and not ul items
                                          No longer necessary to use Object.entries now that we have a
                                          standardized object structure, Card.
                                */}
                                {Object.entries(pack.cards).map((type, idx) => (
                                    <Row key={idx}>
                                        <Col>
                                            <li key={type[0]}>{t(`inventoryChecker.${type[0]}`)}: {type[1]}</li>
                                        </Col>
                                        <Col>
                                            {/* TODO: loop through all pack.cards.exampleImages images*/}
                                            {/* <ImageContainer t={t} src={img} name={"adventurePackExample"} tName={"adventurePackExample"} /> */}
                                        </Col>
                                    </Row>
                                ))}
                                <li key={"cardsInPack"}>
                                    {t("inventoryChecker.cardsInPack")}: {pack.cardsInPack}
                                </li>
                            </ul>
                        </Row>
                    </Row>
                ))}
            </Row>
        </Container>
    );
}