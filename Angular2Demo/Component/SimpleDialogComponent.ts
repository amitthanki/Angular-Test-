import { Component , Inject } from '@angular/core';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
    selector: 'app-simple-Dialog',
    templateUrl: "../UI/simple-dialog.component.html",
    styleUrls:[""]
})
export class SimpleDialogComponent {
    style: number;
    title: string;
    message: string;
    information: string;
    button: string;
    allow_outside_click: boolean;
    constructor(
        public dialogReg: MatDialogRef<SimpleDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data : any
    ) {
        console.log(data);
        this.style = data.style || 0;
        this.title = data.title;
        this.message = data.message;
        this.information = data.information;
        this.button = data.button;
        this.dialogReg.disableClose = !data.allow_outside_click || false;
    }
}