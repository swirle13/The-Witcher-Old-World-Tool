import { Accordion, Container, Row } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';
import { cards } from '../classes/inventory';
import Title from '../components/TitleWithUnderline';
import CardPack from '../components/CardPack';

export default function inventoryChecker({ t }) {
    const cardPacks = cards;

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
                {cardPacks.map((pack) => (
                    <CardPack pack={pack} t={t} key={pack.name} />
                ))}
            </Row>
        </Container>
    );
}