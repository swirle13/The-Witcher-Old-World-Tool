import { Row, Col } from "react-bootstrap";

export default function PageTitle({
    HeaderText = "Page Title",
    HeaderUnderline = true,
}: {
    HeaderText: string;
    HeaderUnderline?: boolean;
}) {
    return (
        <Row className='py-2 mt-4 justify-content-center' id="headerRow" xs={1}>
            <Col className='mx-auto d-flex justify-content-center' xs={12}>
                <h1 className='text-center'>{HeaderText}</h1>
            </Col>
                <Col className="my-4" id='headerSpacer' xs={10} md={4}>
                    {HeaderUnderline === true ?
                    // Add d-lg-none based on some condition for SetupHelper to add line under lg
                    <hr className='my-0' />
                    : <></>}
                </Col>
        </Row>
    );
}