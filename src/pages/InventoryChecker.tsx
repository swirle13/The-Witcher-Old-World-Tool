import { Accordion, Col, Container, Form, FormCheck, Row } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';
import { simplifiedCards } from '../classes/inventory';
import { useState } from 'react';

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
            <PageTitle HeaderText={t('inventoryChecker.title')} t={t} />
            <Accordion flush defaultActiveKey="0">
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
            <Row id="cardTitleRow" className="gap-2 mb-4 pb-4">
                <Col id="cardTitleCol">
                    <h4 className='text-center mb-3'>{t('inventoryChecker.cardSubtitle')}</h4>
                </Col>
            </Row>
            <Row id="packRow" key="packRow" className="mb-2 justify-content-center" xs={1} md="8">
                {cardPacks.map((pack, index) => (
                    <Col key={index} className="ps-6 ms-4 justify-content-center" md="5">
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
                            <li key={"Expansions"}>
                                {t("common.expansions")}: {t(`inventoryChecker.${pack.expansions}`)}
                            </li>
                            {Object.entries(pack.cards).map((type) => (
                                <li key={type[0]}>{t(`inventoryChecker.${type[0]}`)}: {type[1]}</li>
                            ))}
                            <li key={"cardsInPack"}>
                                {t("inventoryChecker.cardsInPack")}: {pack.cardsInPack}
                            </li>
                        </ul>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}