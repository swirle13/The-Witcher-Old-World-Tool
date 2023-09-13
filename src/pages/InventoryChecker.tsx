import { Col, Container, Form, FormCheck, Row } from 'react-bootstrap';
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

    return (
        <Container>
            <PageTitle HeaderText='Inventory Checklist' t={t} />
            <Form>
                <Row id="cardRow" className="gap-2 mb-4 pb-4">
                    <Col id="cardCol">
                        <h4 className='text-center mb-3'>{t('Cards')}</h4>
                        {cardPacks.map((pack, index) => (
                            <Row id={pack.name} key="inlineExpansions" className="mb-2" lg={2}>
                                <Col>
                                    <FormCheck
                                        name="packFormCheck"
                                        id={pack.name}
                                        checked={packsState[index]}
                                        label={pack.name}
                                        key={pack.name}
                                        onChange={() => handlePacksChange(index)}
                                        className='d-flex align-items-center'
                                    />
                                    <ul>
                                        <li>{t("Expansions")}: {pack.expansions}</li>
                                        {Object.keys(pack.cards).map((card, val) => (
                                            // <FormCheck
                                            //     name="cardFormCheck"
                                            //     id={card}
                                            //     checked={cardsState[index]}
                                            //     label={card}
                                            //     key={card}
                                            //     onChange={() => handleCardsChange(index)}
                                            //     className='d-flex align-items-center'
                                            // />
                                            <li>{card}: ???</li>
                                        ))}
                                    </ul>
                                    {/* </FormCheck> */}
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}