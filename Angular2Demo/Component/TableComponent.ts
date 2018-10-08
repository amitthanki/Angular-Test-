import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit,OnInit} from '@angular/core';
import { Customer } from "../Model/Customer";
import { CustomerComponent } from '../Component/CustomerComponent';
//import { TableModule } from 'primeng/table';
//import { GridOptions } from "ag-grid";

@Component({
    selector: 'table-component',
    templateUrl: "../UI/Table.html"
})

export class TableComponent {
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

    //        ];
    //        this.gridOptions.rowData = [
    //            { id: 5, value: 10 },
    //            { id: 10, value: 15 },
    //            { id: 15, value: 20 }
    //        ]
    //    }

    //}

    //    ngOnInit() {
    //        this.cols = [
    //            { field: 'ID', header: 'ID', width: '25%' },
    //            { field: 'Name', header: 'Name', width: '15%' },
    //        ];

    //        //@ViewChild(CustomerComponent)
    //        //private customerComponent: CustomerComponent;

    //    }

    @Input() customer: Customer;

    @Output() EditCustomer = new EventEmitter<number>();

    editUser(id: number) {
        // this.customerComponent.editUser(id);
        this.EditCustomer.emit(id);
    }
    p: number = 1;
    //}
}