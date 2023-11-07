import ImageContainer from "./ImageContainer";
import { Card } from "../classes/inventory";
import { useTranslation } from "react-i18next";

export default function CardDetails(
    { card }: { card: Card }
) {
    const { t } = useTranslation('translation', { keyPrefix: 'inventoryChecker' });
    return (
        <div className="card mb-3" style={{ maxWidth: "540px"}}>
            <div id="horizontalCardRow" className="row g-0">
                <div id="horizontalCardCol" className="col px-sm-0 d-flex">
                    <ImageContainer src={card.exampleImage} name={"adventurePackExample"} />
                </div>
                <div className="col px-0">
                    <div className="card-body p-2 p-sm-3">
                        <h5 className="card-title">{t(card.type)}</h5>
                        <p className="card-text">{t(card.expansion)}</p>
                        <p className="card-text"><small className="text-muted">{card.note}</small></p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item px-2 px-sm-3 py-1 py-sm-2"># in this pack: {card.numInPack}</li>
                        <li className="list-group-item px-2 px-sm-3 py-1 py-sm-2"># so far: {card.numSoFar}</li>
                        <li className="list-group-item px-2 px-sm-3 py-1 py-sm-2"># total: {card.numTotal}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}