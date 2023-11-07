import { Row, Col, Card } from 'react-bootstrap';
import { CardPack } from '../classes/inventory';
import Title from './TitleWithUnderline';
import CardDetails from './CardDetails';

export default function CardPack(
    { pack, t }: { pack: CardPack, t: any }
) {
    return (
        <>
            <Row key={pack.name} className="ps-6 justify-content-center">
                <Col>
                    <Title HeaderText={pack.name} HeaderSize={3} />
                    <Card className="mb-3">
                        <Card.Body>
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
            <Row className="row-cols-2">
                {pack.cards.map((card, index) => (
                    <Col>
                        <CardDetails card={card} key={index} />
                    </Col>
                ))}
            </Row>
        </>
    );
}