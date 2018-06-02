import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { SimpleDialogComponent } from '../Component/SimpleDialogComponent';

export class MessageBox {
    static show(dialog: MatDialog, message, title = "alert", information = "", button = 0, allow_outside_click = false, style = 0, width = "200px") {
        const dialogRef = dialog.open(SimpleDialogComponent, {
            data: {
                title: title || "Alert",
                message: message,
                information: information,
                button: button || 0,
                style: style || 0,
                allow_outside_click: allow_outside_click || false
            },
            width: width
        });
        return dialogRef.afterClosed();
    }
}

export enum MessageBoxButton {
    ok = 0,
    okCancel=1
}

export enum MessageBoxStyle {
    simple = 0,
    Full = 1
}