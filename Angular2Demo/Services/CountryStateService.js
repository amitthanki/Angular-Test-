"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Country_1 = require("../Model/Country");
var CountryStateService = (function () {
    function CountryStateService() {
    }
    CountryStateService.prototype.getCountries = function () {
        return [
            new Country_1.Country(1, 'India'),
            new Country_1.Country(2, 'Us'),
            new Country_1.Country(3, 'England')
        ];
    };
    return CountryStateService;
}());
CountryStateService = __decorate([
    core_1.Injectable()
], CountryStateService);
exports.CountryStateService = CountryStateService;
//# sourceMappingURL=CountryStateService.js.map