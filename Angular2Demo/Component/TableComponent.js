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
var Customer_1 = require("../Model/Customer");
//import { TableModule } from 'primeng/table';
//import { GridOptions } from "ag-grid";
var TableComponent = (function () {
    function TableComponent() {
        //    cols: any[];
        //    private gridOptions: GridOptions;
        //    constructor() {
        //        this.gridOptions = <GridOptions>{};
        //        this.gridOptions.columnDefs = [
        //            {
        //                headerName: "ID",
        //                field: "id",
        //                width: 100
        //            },
        //            {
        //                headerName: "Value",
        //                field: "value",
        //                width: 100
        //            },
        this.EditCustomer = new core_1.EventEmitter();
        this.p = 1;
        //}
    }
    TableComponent.prototype.editUser = function (id) {
        // this.customerComponent.editUser(id);
        this.EditCustomer.emit(id);
    };
    return TableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Customer_1.Customer)
], TableComponent.prototype, "customer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TableComponent.prototype, "EditCustomer", void 0);
TableComponent = __decorate([
    core_1.Component({
        selector: 'table-component',
        templateUrl: "../UI/Table.html"
    })
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=TableComponent.js.map