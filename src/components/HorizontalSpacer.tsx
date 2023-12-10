import { Col } from "react-bootstrap";

export enum conditionalRender {
    xs = "",
    sm = "d-sm-none",
    md = "d-md-none",
    lg = "d-lg-none",
    xl = "d-xl-none",
    xxl = "d-xxl-none",
}

export default function HorizontalSpacer(
    {
        HeaderUnderline = true,
        ConditionalRender = conditionalRender.xs,
        Size = 1,
    }: {
        HeaderUnderline?: boolean;
        ConditionalRender?: conditionalRender;
        Size?: number;
    }
) {
    if (Size < 1) Size = 1;
    if (Size > 6) Size = 6;
    /**
     * Horizontal header padding, per side
     * h1 - 10%
     * h2 - 15%
     * h3 - 20%
     * h4 - 25%
     * h5 - 30%
     */
    const xPadding: number = ((Size + 1) * 5);
    const xPaddingStr = `${xPadding}vw`
    const yPadding: number = Math.max(0, 4 - Size);
    const yPaddingStr = `my-${yPadding}`

    return (
        <Col
            id='headerSpacer'
            className={yPaddingStr}
            style={{ paddingLeft: xPaddingStr, paddingRight: xPaddingStr }}
        >
            {HeaderUnderline === true ?
                <hr className={`my-0 ${ConditionalRender}`} />
                : <></>
            }
        </Col>
    )
}