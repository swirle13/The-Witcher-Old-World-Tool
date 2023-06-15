import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

export default function HorizontalButtonAndText(args: {
    ButtonText: string,
    ButtonOnClick: React.SetStateAction<any>,
    Col1Data: number,
    Col2Data: string
} = {
    ButtonText: "Hello",
    ButtonOnClick: {},
    Col1Data: -1,
    Col2Data: "World"
}) {

    return (
        <Row className='d-flex'>
            <Col className='ms-1 me-1' sm="3">
                <Button
                    variant="outline-secondary"
                    onClick={() => {args.ButtonOnClick}}
                >
                    {args.ButtonText}
                </Button>
            </Col>
            {/* TODO: make this return an icon for the terrain token, not raw data */}
            <Col className='ms-1 me-1'>
                {args.Col1Data}
            </Col>
            <Col className='ms-1 me-1'>
                {args.Col2Data}
            </Col>
        </Row>
    )
}
