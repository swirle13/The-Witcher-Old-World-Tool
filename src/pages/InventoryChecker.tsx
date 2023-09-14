import { Accordion, Col, Container, Form, FormCheck, Row } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';
import { simplifiedCards } from '../classes/inventory';
import { useState } from 'react';

export default function inventoryChecker({ t }) {
    const cardPacks = simplifiedCards;
    const [packsState, setPacksState] = useState<Array<boolean>>(
        new Array(cardPacks.length).fill(false)
    );
    const [cardsState, setCardsState] = useState<Array<boolean>>(
        new Array(simplifiedCards.length).fill(false)
    );

    const handlePacksChange = (position: number) => {
        const updatedPacksState = packsState.map((item, index) => index === position ? !item : item);
        setPacksState(updatedPacksState);
    };
    const handleCardsChange = (position: number) => {
        const updatedCardsState = cardsState.map((item, index) => index === position ? !item : item);
        setCardsState(updatedCardsState);
    };

    // TODO: delete this after successfully finishing the formcheck element for children
    // const pack = cardPacks[0];
    // const index = 0;

    return (
        <Container>
            <PageTitle HeaderText='Inventory Checklist' t={t} />
            <Accordion flush defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        {t('Notes')}
                    </Accordion.Header>
                    <Accordion.Body className='lh-md'>
                        This is currently a first pass to get this inventory checker into the hands of the second wave
                        of shipments as fast as possible, and as such, will be minimal and (probably) lacking translation.
                        <br /><br />
                        I aim to add different sections for the tokens and miniatures shortly after this goes live.
                        <br /><br />
                        Currently, the check boxes are not persistent. If you refresh or navigate away from this page,
                        you will lose your progress. Apologies for the inconvenience while I sort this out.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        {t('Legend')}
                    </Accordion.Header>
                    <Accordion.Body className='lh-md'>
                        If two columns: read left to right, top to bottom. This will ensure the running totals of cards
                        spread across multiple packs (e.g. "Monster cards: 11 (11/29)") are read properly.
                        <br /><br />
                        <dl>
                            <dt>TWOW(XX) Y/Z</dt>
                            <dd>This is the title of the gray card for each pack of cards. This is how I refer to each pack.</dd>
                            <dd>XX is the arbitrary code that the supplier used to identify the groups of cards.</dd>
                            <dd>Y is the current number of the pack out of total packs for code XX.</dd>
                            <dd>Z is the total number of packs for value XX</dd>
                            <dt>Expansions</dt>
                            <dd>These are the expansions that the cards belong to in this pack.</dd>
                            <dt>Example Type Cards: X (Y/Z) OR X/Z</dt>
                            <dd>Example Type is the type of card, as referred to in Go On Board's "Components" lists.</dd>
                            <dd>X is how many of the cards are found in this pack.</dd>
                            <dd>Y is the current running total of this type of card across all packs. If excluded, all cards of this type were included in this pack</dd>
                            <dd>Z is the total number of these cards you should have.</dd>
                            <dt>(AP)</dt>
                            <dd>This is a disambiguation for Adventure Pack cards. These are distinguished by the star symbol in the top center of the card face.</dd>
                        </dl>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Form>
                <Row id="cardRow" className="gap-2 mb-4 pb-4">
                    <Col id="cardCol">
                        <h4 className='text-center mb-3'>{t('Cards')}</h4>
                        <Row id="packRow" key="packRow" className="mb-2 justify-content-center" xs="1" md={2}>
                            {cardPacks.map((pack, index) => (
                                <Col className="lg-ps-6 px-4" xs={10} md={6}>
                                    <FormCheck
                                        name="packFormCheck"
                                        id={pack.name}
                                        checked={packsState[index]}
                                        label={pack.name}
                                        key={pack.name}
                                        onChange={() => handlePacksChange(index)}
                                        className='d-flex align-items-center'
                                    />
                                    <ul className='ms-4'>
                                        <li>{t("Expansions")}: {pack.expansions}</li>
                                        {Object.entries(pack.cards).map((type) => (
                                            // <FormCheck
                                            //     name="cardFormCheck"
                                            //     id={card}
                                            //     checked={cardsState[index]}
                                            //     label={card}
                                            //     key={card}
                                            //     onChange={() => handleCardsChange(index)}
                                            //     className='d-flex align-items-center'
                                            // />
                                            <li>{type[0]}: {type[1]}</li>
                                        ))}
                                        <li>{t("Cards in pack")}: {pack.cardsInPack}</li>
                                    </ul>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}