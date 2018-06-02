import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { MainModule } from "../Module/MainModule";
import { ROUTER_INITIALIZER } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const platform = platformBrowserDynamic();
////platform.bootstrapModule(MainModule, [
////    ROUTER_INITIALIZER,
////    { provide: LocationStrategy, useClass: HashLocationStrategy }
////]);
platform.bootstrapModule(MainModule);
