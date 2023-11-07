import { SideBySideMagnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from "@vanyapr/react-image-magnifiers";


export default function ImageContainer({ src, name }) {

    return (
        <SideBySideMagnifier
            id={`${name}IconImage`}
            imageSrc={src}
            imageAlt={name}
            mouseActivation={MOUSE_ACTIVATION.CLICK}
            touchActivation={TOUCH_ACTIVATION.TAP}
            alwaysInPlace={true}
            transitionSpeed={0.2}
        />
    );
}