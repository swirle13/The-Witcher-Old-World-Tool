import { Row, Col } from "react-bootstrap";
import HorizontalSpacer, { conditionalRender } from "./HorizontalSpacer";
import { ElementType, HTMLAttributes } from "react";

/**
 * Custom title class with a minimalist horizontal rule below that adjusts according to tag.
 * Supports h1 through h6. Contains a default margin above the header, regardless of HeaderSize, of 1.5rem.
 * 
 * @param {string} [obj.HeaderText] - Text to display in header.
 * @param {boolean} [obj.HeaderUnderline] - (optional) Toggle for underline or not. Default: true
 * @param {number} [obj.HeaderSize] - (optional) Header size; corresponds to html tag, e.g. h1.
 *                                    Allowed values: [1, 2, 3, 4, 5, 6]. Default: 1.
 * @param {conditionalRender} [obj.ConditionalRender] - (optional) Sets HeaderUnderline to conditionally
 *                              render up until the chosen size. Allowed values: conditionalRender enum containing
 *                              [xs, sm, md, lg, xl, xxl]
 * @returns Row containing title with horizontal rule below, if enabled.
 */
export default function Title(
    {
        HeaderText,
        HeaderUnderline = true,
        HeaderSize = 1,
        ConditionalRender = conditionalRender.xs,
    }: {
        HeaderText: string;
        HeaderUnderline?: boolean;
        HeaderSize?: number;
        ConditionalRender?: conditionalRender;
    }
) {
    if (HeaderSize < 1) HeaderSize = 1;
    if (HeaderSize > 6) HeaderSize = 6;

    const Tag: ElementType<HTMLAttributes<HTMLElement>> = `h${HeaderSize}` as ElementType<HTMLAttributes<HTMLElement>>;
    return (
        // TODO: Assess if mt-4 is still the right size for smaller headers
        <Row className='py-2 mt-4 justify-content-center' id={`${HeaderText}TitleRow`} xs={1}>
            <Col className='mx-auto d-flex justify-content-center' id={`${HeaderText}TitleCol`} xs={12}>
                <Tag className='text-center'>{HeaderText}</Tag>
            </Col>
            <HorizontalSpacer
                HeaderUnderline={HeaderUnderline}
                ConditionalRender={ConditionalRender}
                Size={HeaderSize}
            />
        </Row>
    );
}