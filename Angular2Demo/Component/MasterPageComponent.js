"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SpinnerServices_1 = require("../Services/SpinnerServices");
//import { AgGridModule } from 'ag-grid-angular/main';
var MasterPageComponent = (function () {
    function MasterPageComponent(loaderService) {
        this.loaderService = loaderService;
        // this._compiler.clearCache();
    }
    MasterPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.status.subscribe(function (val) {
            _this.showLoader = val;
        });
    };
    return MasterPageComponent;
}());
MasterPageComponent = __decorate([
    core_1.Component({
        selector: "main-ui",
        templateUrl: "../UI/MasterPage.html",
        styleUrls: ['../UI/Spinner.css']
    }),
    __metadata("design:paramtypes", [SpinnerServices_1.LoaderService])
], MasterPageComponent);
exports.MasterPageComponent = MasterPageComponent;
//# sourceMappingURL=MasterPageComponent.js.map