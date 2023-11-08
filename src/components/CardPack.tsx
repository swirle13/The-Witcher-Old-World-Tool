import { Row, Col, Card } from 'react-bootstrap';
import { CardPack } from '../classes/inventory';
import CardDetails from './CardDetails';

export default function CardPack(
    { pack, t }: { pack: CardPack, t: any }
) {
    return (
        <>
            <Row id={`${pack.name}TitleCardRow`} key={pack.name} className="ps-6 justify-content-center" xs={1} >
                <Col xs={11} md={6}>
                    <Card className="mx-auto" style={{ border: "none" }}>
                        <Card.Header as="h3" className="text-center">{pack.name}</Card.Header>
                        <Card.Body className="mx-auto text-center">
                            <Card.Title>{t("common.expansions")}</Card.Title>
                            <Card.Text>
                                {pack.expansions.map((exp, index) => (
                                    (index ? ', ' : '') + t(`inventoryChecker.${exp}`)
                                ))}
                            </Card.Text>
                            <Card.Title>{t("inventoryChecker.cardsInPack") + `: ${pack.cardsInPack}`}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row id={`${pack.name}ChildrenCardsRow`} className="row-cols-md-2 row-cols-1 g-4 g-lg-6 mt-0 mb-4">
                {pack.cards.map((card, index) => (
                    <Col key={index} className="d-flex justify-content-center">
                        <CardDetails card={card} key={index} />
                    </Col>
                ))}
            </Row>
        </>
    );
}