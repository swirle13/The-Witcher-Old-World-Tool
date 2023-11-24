import { conditionalRender } from "./HorizontalSpacer";
import Title from "./TitleWithUnderline";

export default function PageTitle(
    {
        HeaderText = "Page Title",
        HeaderUnderline = true,
        ConditionalRender = conditionalRender.xs,
    }: {
        HeaderText: string;
        HeaderUnderline?: boolean;
        ConditionalRender?: conditionalRender;
    }
) {
    return (
        <Title
            HeaderText={HeaderText}
            HeaderUnderline={HeaderUnderline}
            ConditionalRender={ConditionalRender}
            HeaderSize={1}
        />
    );
}