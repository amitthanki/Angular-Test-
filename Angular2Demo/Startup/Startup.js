"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var MainModule_1 = require("../Module/MainModule");
//const platform = platformBrowserDynamic();
//////platform.bootstrapModule(MainModule, [
//////    ROUTER_INITIALIZER,
//////    { provide: LocationStrategy, useClass: HashLocationStrategy }
//////]);
//platform.bootstrapModule(MainModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(MainModule_1.MainModule);
//# sourceMappingURL=Startup.js.map