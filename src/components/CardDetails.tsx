import ImageContainer from "./ImageContainer";
import { Cards } from "../classes/inventory";
import img = require("../img/inventory/adventurePackExample.png");
import { useTranslation } from "react-i18next";

export default function CardDetails(
    { card }: { card: Cards }
) {
    const { t } = useTranslation('translation', { keyPrefix: 'inventoryChecker' });
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row no-gutters">
                <div className="col-md-4 pe-0">
                    <ImageContainer t={t} src={img} name={"adventurePackExample"} tName={"adventurePackExample"} />
                </div>
                <div className="col-md-8 ps-0">
                    <div className="card-body">
                        <h5 className="card-title">{t(card.type)}</h5>
                        <p className="card-text">{t(card.expansion)}</p>
                        <p className="card-text"><small className="text-muted">{card.note}</small></p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"># in this pack: {card.numInPack}</li>
                        <li className="list-group-item"># so far: {card.numSoFar}</li>
                        <li className="list-group-item"># total: {card.numTotal}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}