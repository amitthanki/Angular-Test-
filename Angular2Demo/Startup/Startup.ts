import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { MainModule } from "../Module/MainModule";

const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);