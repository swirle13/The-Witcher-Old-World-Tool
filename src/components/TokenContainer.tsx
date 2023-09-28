import { Container, Row, Col, Image } from 'react-bootstrap';


export default function TokenContainer({ t, src, name, tName }) {

    return (
        <Container id='TokenContainer' className='mx-auto px-4 py-2'>
            <Row id='TokenContainerImageRow' className='justify-content-center'>
                <Col id='TokenContainerImageCol' xs='auto'>
                    <Image
                        id={`${name}IconImage`}
                        src={src}
                        height={150}
                        alt={name}
                        loading='lazy'
                    />
                </Col>
            </Row>
            <Row id='TokenContainerTitleRow' className='justify-content-center'>
                <Col id='TokenContainerTitleCol' className='py-2 mt-2'>
                    <h2 id='TokenContainerTitle' className="text-center" style={{ height: "calc(1.325rem + .9vw)" }}>
                        {name ? t(tName) : ""}
                    </h2>
                </Col>
            </Row>
        </Container>
    );
}