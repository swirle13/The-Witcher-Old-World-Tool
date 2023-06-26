"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
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
/*
I need to be able to:
1. keep track of window size
2. compare current window size against breakpoints
3. have booleans for reference in conditionals
    * "if window breakpoint is at least xxs..."
*/
const getSize = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
};
function useResize() {
    const [size, setSize] = (0, react_1.useState)(getSize());
    const handleResize = (0, react_1.useCallback)(() => {
        let ticking = false;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                setSize(getSize());
                ticking = false;
            });
            ticking = true;
        }
    }, []);
    (0, react_1.useEffect)(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return size;
}
exports.default = useResize;
