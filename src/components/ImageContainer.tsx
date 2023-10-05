import { Container, Row, Col } from 'react-bootstrap';
import { SideBySideMagnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from "@vanyapr/react-image-magnifiers";
import "./ImageContainer.css";


export default function ImageContainer({ t, src, name, tName }) {

    return (

        <Container id='ImageContainer' className='mx-auto px-4 py-2'>
            <Row id='ImageContainerImageRow' className='justify-content-center'>
                <SideBySideMagnifier
                    className="input-position"
                    id={`${name}IconImage`}
                    imageSrc={src}
                    imageAlt={name}
                    mouseActivation={MOUSE_ACTIVATION.CLICK}
                    touchActivation={TOUCH_ACTIVATION.TAP}
                    alwaysInPlace={true}
                    transitionSpeed={0.2}
                />
            </Row>
            <Row id='ImageContainerTitleRow' className='justify-content-center'>
                <Col id='ImageContainerTitleCol' className='py-2 mt-2' xs="auto">
                    <h2 id='ImageContainerTitle' className="text-center" style={{ height: "calc(1.325rem + .9vw)" }}>
                        {name ? t(tName) : ""}
                    </h2>
                </Col>
            </Row>
        </Container>
    );
}