"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleDialogComponent_1 = require("../Component/SimpleDialogComponent");
var MessageBox = (function () {
    function MessageBox() {
    }
    MessageBox.show = function (dialog, message, title, information, button, allow_outside_click, style, width) {
        if (title === void 0) { title = "alert"; }
        if (information === void 0) { information = ""; }
        if (button === void 0) { button = 0; }
        if (allow_outside_click === void 0) { allow_outside_click = false; }
        if (style === void 0) { style = 0; }
        if (width === void 0) { width = "200px"; }
        var dialogRef = dialog.open(SimpleDialogComponent_1.SimpleDialogComponent, {
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
    };
    return MessageBox;
}());
exports.MessageBox = MessageBox;
var MessageBoxButton;
(function (MessageBoxButton) {
    MessageBoxButton[MessageBoxButton["ok"] = 0] = "ok";
    MessageBoxButton[MessageBoxButton["okCancel"] = 1] = "okCancel";
})(MessageBoxButton = exports.MessageBoxButton || (exports.MessageBoxButton = {}));
var MessageBoxStyle;
(function (MessageBoxStyle) {
    MessageBoxStyle[MessageBoxStyle["simple"] = 0] = "simple";
    MessageBoxStyle[MessageBoxStyle["Full"] = 1] = "Full";
})(MessageBoxStyle = exports.MessageBoxStyle || (exports.MessageBoxStyle = {}));
//# sourceMappingURL=MessageBox.js.map