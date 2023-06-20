"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// Use components from https://react-bootstrap.netlify.app/docs/getting-started/introduction
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const navbar_1 = __importDefault(require("./components/navbar"));
const react_router_dom_1 = require("react-router-dom");
function Home() {
    /*
      TODO: Create simplified home page for generic actions, e.g.
      Setup:
          1. Roll the proper amount of monster cards, subsequent terrain tokens, and randomly assign one to each.
          2. Randomly assign player boards
          3. Generate player cards and gold setup
          All based on provided number of players to adjust, and selected expansions.
      Three monsters pictures, each with three buttons underneath:
          1. Defeated monster
          2. Chased away monster
          3. Complete loss to monster
          Automatically rolls new monster of new appropriate level for situation
    */
    /*
        Breakpoints
        ============================
        X-Small		 None	<576px
        Small		 sm		≥576px
        Medium		 md		≥768px
        Large		 lg		≥992px
        Extra large	 xl		≥1200px
        Extra extra  large	xxl	≥1400px
    */
    return ((0, jsx_runtime_1.jsxs)(Container_1.default, { className: 'BaseContainer px-0', children: [(0, jsx_runtime_1.jsx)(navbar_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] }));
}
exports.default = Home;
