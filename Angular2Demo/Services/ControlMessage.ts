import { Component, Input,Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ValidationService } from './ValidationService';

@Component({
    selector: 'control-messages',
   template: `<div class="text-danger" *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
@Injectable()
export class ControlMessages {
    //errorMessage: string;
    //@Input() control: FormControl;
    //@Input() label: string = '';    
    @Input() control: FormControl;
    @Input() label: string = '';    
    constructor() { }

    get errorMessage() {       
        console.log(this.control);
        if (typeof this.control != 'undefined') {            
            for (let propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {                    
                    return ValidationService.getValidatorErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
                }
            }
        }
        return null;
    }

    //get errorMessage() {
    //    console.log(this.control);
    //    if (typeof this.control != 'undefined') {
    //        for (let propertyName in this.control.errors) {
    //            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
    //                return ValidationService.getValidatorErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
    //            }
    //        }
    //    }
    //    return null;
    //}
}