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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var SimpleDialogComponent = (function () {
    function SimpleDialogComponent(dialogReg, data) {
        this.dialogReg = dialogReg;
        this.data = data;
        console.log(data);
        this.style = data.style || 0;
        this.title = data.title;
        this.message = data.message;
        this.information = data.information;
        this.button = data.button;
        this.dialogReg.disableClose = !data.allow_outside_click || false;
    }
    return SimpleDialogComponent;
}());
SimpleDialogComponent = __decorate([
    core_1.Component({
        selector: 'app-simple-Dialog',
        templateUrl: "../UI/simple-dialog.component.html",
        styleUrls: [""]
    }),
    __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
], SimpleDialogComponent);
exports.SimpleDialogComponent = SimpleDialogComponent;
//# sourceMappingURL=SimpleDialogComponent.js.map