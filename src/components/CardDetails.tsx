import ImageContainer from "./ImageContainer";
import { Card as tCard } from "../classes/inventory";
import { useTranslation } from "react-i18next";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

export default function CardDetails(
    { card }: { card: tCard }
) {
    const { t } = useTranslation('translation', { keyPrefix: 'inventoryChecker' });
    return (
        <Card className="h-100" style={{ maxWidth: "540px" }}>
            <Row id="horizontalCardRow" className="g-0 flex-grow-1 overflow-hidden rounded-2">
                <Col id="horizontalCardImgCol" className="px-0 d-flex align-items-center bg-black">
                    <ImageContainer
                        src={card.exampleImage}
                        name={card.exampleImage.substring(card.exampleImage.lastIndexOf('/') + 1)}
                    />
                </Col>
                <Col id="horizontalCardTextCol" className="px-0 d-flex">
                    <Row id="horizontalCardTextRow" className="g-0 flex-grow-1 d-flex" xs={1}>
                        <Card.Body className="p-2 p-sm-3">
                            <Card.Title as="h5">{t(card.type)}</Card.Title>
                            <Card.Text>{t(card.expansion)}</Card.Text>
                            <Card.Text>
                                <small className="text-body-secondary">
                                    {card.note ? t(`notes.${card.note}`) : ''}
                                </small>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush align-self-end flex-grow-1 d-flex pt-auto">
                            {["card.numInPack", "card.numSoFar", "card.numTotal"].map((val, index) => (
                                <ListGroup.Item key={index} className="list-group-item px-2 px-sm-3 py-1 py-sm-2">
                                    {/* Use val to look up translation, but evaluate to get value from 'card' */}
                                    {t(val)}: {eval(val)}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}