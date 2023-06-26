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
class screenBreakpoint {
    xxs = window.screen.width < 401;
    xs = window.screen.width >= 401;
    sm = window.screen.width >= 576;
    md = window.screen.width >= 768;
    lg = window.screen.width >= 992;
    xl = window.screen.width >= 1200;
    xxl = window.screen.width >= 1400;
}
exports.default = screenBreakpoint;
