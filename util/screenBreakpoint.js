"use strict";
/*
    Breakpoints
    ============================
    X-Small		 None	<576px
    Small		 sm		≥576px
    Medium		 md		≥768px
    Large		 lg		≥992px
    Extra large	 xl		≥1200px
    XX large	xxl		≥1400px
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
I need to be able to:
1. keep track of window size
2. compare current window size against breakpoints
3. have booleans for reference in conditionals
    * "if window breakpoint is at least xxs..."
*/
const react_1 = require("react");
function getWindowWidth() {
    const width = window.screen.width;
    return width;
}
class screenBreakpoints {
    windowWidth;
    xxs = window.screen.width < 401;
    xs = window.screen.width >= 401;
    sm = window.screen.width >= 576;
    md = window.screen.width >= 768;
    lg = window.screen.width >= 992;
    xl = window.screen.width >= 1200;
    xxl = window.screen.width >= 1400;
    constructor() {
        this.windowWidth = getWindowWidth();
    }
}
function trackWindowWidth() {
    const [windowWidth, setWindowWidth] = (0, react_1.useState)(getWindowWidth());
    (0, react_1.useEffect)(() => {
        function handleWindowResize() {
            setWindowWidth(getWindowWidth);
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return;
}
