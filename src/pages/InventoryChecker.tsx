import { Accordion, Container, Row } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';
import { cards } from '../classes/inventory';
import Title from '../components/TitleWithUnderline';
import CardPack from '../components/CardPack';

export default function inventoryChecker({ t }) {
    const cardPacks = cards;

    return (
        <Container id="inventoryCheckerContainer" fluid="lg">
            <PageTitle HeaderText={t('inventoryChecker.title')} />
            <Title
                HeaderText={t('inventoryChecker.cardSubtitle')}
                HeaderSize={2}
            />
            <Row id="packRow" key="packRow" className="mb-2 justify-content-center">
                {cardPacks.map((pack) => (
                    <CardPack pack={pack} t={t} key={pack.name} />
                ))}
            </Row>
        </Container>
    );
}