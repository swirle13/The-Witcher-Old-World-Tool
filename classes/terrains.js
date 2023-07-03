"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerrainTokenDeck = exports.WaterTokens = exports.ForestTokens = exports.MountainTokens = exports.WaterToken = exports.ForestToken = exports.MountainToken = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Row_1 = __importDefault(require("react-bootstrap/Row"));
const Col_1 = __importDefault(require("react-bootstrap/Col"));
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Image_1 = __importDefault(require("react-bootstrap/Image"));
const dataClasses_1 = require("./dataClasses");
const MountainBack_png_1 = __importDefault(require("../img/tokens/terrainTokens/MountainBack.png"));
const ForestBack_png_1 = __importDefault(require("../img/tokens/terrainTokens/ForestBack.png"));
const WaterBack_png_1 = __importDefault(require("../img/tokens/terrainTokens/WaterBack.png"));
const Mountain2Hengfors_png_1 = __importDefault(require("../img/tokens/terrainTokens/Mountain2Hengfors.png"));
const Mountain3KaerMorhen_png_1 = __importDefault(require("../img/tokens/terrainTokens/Mountain3KaerMorhen.png"));
const Mountain9Cintra_png_1 = __importDefault(require("../img/tokens/terrainTokens/Mountain9Cintra.png"));
const Mountain11Beauclair_png_1 = __importDefault(require("../img/tokens/terrainTokens/Mountain11Beauclair.png"));
const Mountain13Doldeth_png_1 = __importDefault(require("../img/tokens/terrainTokens/Mountain13Doldeth.png"));
const Mountain18ArdModron_png_1 = __importDefault(require("../img/tokens/terrainTokens/Mountain18ArdModron.png"));
const Forest6Novigrad_png_1 = __importDefault(require("../img/tokens/terrainTokens/Forest6Novigrad.png"));
const Forest7Vizima_png_1 = __importDefault(require("../img/tokens/terrainTokens/Forest7Vizima.png"));
const Forest8Vengerberg_png_1 = __importDefault(require("../img/tokens/terrainTokens/Forest8Vengerberg.png"));
const Forest10HaernCaduch_png_1 = __importDefault(require("../img/tokens/terrainTokens/Forest10HaernCaduch.png"));
const Forest16Dhuwod_png_1 = __importDefault(require("../img/tokens/terrainTokens/Forest16Dhuwod.png"));
const Forest17Stygga_png_1 = __importDefault(require("../img/tokens/terrainTokens/Forest17Stygga.png"));
const Water1KaerSeren_png_1 = __importDefault(require("../img/tokens/terrainTokens/Water1KaerSeren.png"));
const Water4BanArd_png_1 = __importDefault(require("../img/tokens/terrainTokens/Water4BanArd.png"));
const Water5Cidaris_png_1 = __importDefault(require("../img/tokens/terrainTokens/Water5Cidaris.png"));
const Water12Glenmore_png_1 = __importDefault(require("../img/tokens/terrainTokens/Water12Glenmore.png"));
const Water14LocIchaer_png_1 = __importDefault(require("../img/tokens/terrainTokens/Water14LocIchaer.png"));
const Water15GorthurGuaed_png_1 = __importDefault(require("../img/tokens/terrainTokens/Water15GorthurGuaed.png"));
class TerrainTokenClass {
    name = "DefaultTokenName";
    imgStr = "";
    img() {
        return ((0, jsx_runtime_1.jsx)(Container_1.default, { id: 'TokenContainer', className: 'px-4 py-2 m-2', children: (0, jsx_runtime_1.jsx)(Row_1.default, { className: "justify-content-center", children: (0, jsx_runtime_1.jsx)(Col_1.default, { xs: 'auto', children: (0, jsx_runtime_1.jsx)(Image_1.default, { id: `${this.name}IconImage`, src: this.imgStr, width: 150, alt: this.name, roundedCircle: true }) }) }) }));
    }
}
class MountainToken extends TerrainTokenClass {
    name;
    number;
    type;
    imgStr;
    constructor(number = -1, name = "DefaultMountainToken", img = MountainBack_png_1.default) {
        super();
        this.name = name;
        this.number = number;
        this.type = "Mountain";
        this.imgStr = img;
    }
}
exports.MountainToken = MountainToken;
class ForestToken extends TerrainTokenClass {
    name;
    number;
    type;
    imgStr;
    constructor(number = -1, name = "DefaultForestToken", img = ForestBack_png_1.default) {
        super();
        this.name = name;
        this.number = number;
        this.type = "Forest";
        this.imgStr = img;
    }
}
exports.ForestToken = ForestToken;
class WaterToken extends TerrainTokenClass {
    name;
    number;
    type;
    imgStr;
    constructor(number = -1, name = "DefaultWaterToken", img = WaterBack_png_1.default) {
        super();
        this.name = name;
        this.number = number;
        this.type = "Water";
        this.imgStr = img;
    }
}
exports.WaterToken = WaterToken;
const MountainTokens = [
    new MountainToken(2, "Hengfors", Mountain2Hengfors_png_1.default),
    new MountainToken(3, "Kaer Morhen", Mountain3KaerMorhen_png_1.default),
    new MountainToken(9, "Cintra", Mountain9Cintra_png_1.default),
    new MountainToken(11, "Beauclair", Mountain11Beauclair_png_1.default),
    new MountainToken(13, "Doldeth", Mountain13Doldeth_png_1.default),
    new MountainToken(18, "Ard Modron", Mountain18ArdModron_png_1.default),
];
exports.MountainTokens = MountainTokens;
const ForestTokens = [
    new ForestToken(6, "Novigrad", Forest6Novigrad_png_1.default),
    new ForestToken(7, "Vizima", Forest7Vizima_png_1.default),
    new ForestToken(8, "Vengerberg", Forest8Vengerberg_png_1.default),
    new ForestToken(10, "Haern Caduch", Forest10HaernCaduch_png_1.default),
    new ForestToken(16, "Dhuwod", Forest16Dhuwod_png_1.default),
    new ForestToken(17, "Stygga", Forest17Stygga_png_1.default),
];
exports.ForestTokens = ForestTokens;
const WaterTokens = [
    new WaterToken(1, "Kaer Seren", Water1KaerSeren_png_1.default),
    new WaterToken(4, "Ban Ard", Water4BanArd_png_1.default),
    new WaterToken(5, "Cidaris", Water5Cidaris_png_1.default),
    new WaterToken(12, "Glenmore", Water12Glenmore_png_1.default),
    new WaterToken(14, "Loc Ichaer", Water14LocIchaer_png_1.default),
    new WaterToken(15, "Gorthur Guaed", Water15GorthurGuaed_png_1.default),
];
exports.WaterTokens = WaterTokens;
class TerrainTokenDeck {
    mountainDeck;
    forestDeck;
    waterDeck;
    allDeck;
    constructor() {
        this.mountainDeck = new dataClasses_1.ReadonlyDeck(MountainTokens);
        this.forestDeck = new dataClasses_1.ReadonlyDeck(ForestTokens);
        this.waterDeck = new dataClasses_1.ReadonlyDeck(WaterTokens);
        this.allDeck = new dataClasses_1.ReadonlyDeck([...MountainTokens, ...ForestTokens, ...WaterTokens]);
    }
    drawMountainToken() {
        try {
            return this.mountainDeck.draw();
        }
        catch (error) {
            this.mountainDeck.repopulate();
        }
        return this.mountainDeck.draw();
    }
    drawForestToken() {
        try {
            return this.forestDeck.draw();
        }
        catch (error) {
            this.forestDeck.repopulate();
        }
        return this.forestDeck.draw();
    }
    drawWaterToken() {
        try {
            return this.waterDeck.draw();
        }
        catch (error) {
            this.waterDeck.repopulate();
        }
        return this.waterDeck.draw();
    }
    addTokenBackToDeck(token) {
        if (token.type === "Mountain" && token instanceof MountainToken) {
            this.mountainDeck.returnItem(token);
        }
        else if (token.type === "Forest" && token instanceof ForestToken) {
            this.forestDeck.returnItem(token);
        }
        else if (token.type === "Water" && token instanceof WaterToken) {
            this.waterDeck.returnItem(token);
        }
        else {
            throw new Error(`TerrainToken ${token}'s type ${token.type} is not a valid match.` +
                `Can only add "Mountain", "Forest", and "Water".`);
        }
    }
    refillDeck(type) {
        if (type === "Mountain") {
            this.mountainDeck.repopulate();
        }
        else if (type === "Forest") {
            this.forestDeck.repopulate();
        }
        else if (type === "Water") {
            this.waterDeck.repopulate();
        }
        else {
            throw new Error(`TerrainType ${type} is not a valid match. Can only add "Mountain", "Forest", and "Water".`);
        }
    }
    refillAllDecks() {
        this.refillDeck("Mountain");
        this.refillDeck("Forest");
        this.refillDeck("Water");
    }
}
exports.default = TerrainTokenDeck;
exports.TerrainTokenDeck = TerrainTokenDeck;
