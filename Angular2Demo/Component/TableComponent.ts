import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import { Customer } from "../Model/Customer";
import { CustomerComponent } from '../Component/CustomerComponent';




@Component({
    selector: 'table-component',
    templateUrl: "../UI/Table.html"
})

export class TableComponent  {   

    
    
    //@ViewChild(CustomerComponent)
    //private customerComponent: CustomerComponent;
    @Input() customer: Customer;

    @Output() EditCustomer = new EventEmitter<number>();

    editUser(id: number) {
       // this.customerComponent.editUser(id);
       this.EditCustomer.emit(id);
    }

   
}