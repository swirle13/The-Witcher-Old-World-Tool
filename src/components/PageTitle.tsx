import { Row, Col } from "react-bootstrap";

export default function PageTitle({
    HeaderText = "Page Title",
    HeaderUnderline = true,
    ConditionalRender = "",
    t
}: {
    HeaderText: string;
    HeaderUnderline?: boolean;
    ConditionalRender?: string;
    t
}) {
    return (
        <Row className='py-2 mt-4 justify-content-center' id="headerRow" xs={1}>
            <Col className='mx-auto d-flex justify-content-center' xs={12}>
                <h1 className='text-center'>{HeaderText}</h1>
            </Col>
            <Col className="my-3 px-5" id='headerSpacer'>
                {HeaderUnderline === true ?
                    <hr className={`my-0 ${ConditionalRender}`} />
                    : <></>
                }
            </Col>
        </Row>
    );
}