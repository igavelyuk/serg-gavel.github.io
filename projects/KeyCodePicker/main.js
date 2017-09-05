"use strict";
document.addEventListener("keydown", function (event) {
    document.body.innerHTML = "\n&nbsp;&nbsp;&nbsp;&nbsp;\n" +
        "<b>Which: " + event.which + "</b>\n" +
        "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" + "<b> Key code is:</b> " + event.keyCode + "\n" +
        "<br>&nbsp;&nbsp;&nbsp;\n<b>Shift key active:</b> " + event.shiftKey + "\n" +
        "</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<b> Alt key active:</b> " + event.altKey + "\n" +
        "<br>&nbsp;&nbsp;&nbsp;&nbsp;\n<b> Ctrl key active:</b> " + event.ctrlKey + "\n" +
        "<br>&nbsp;&nbsp;&nbsp;\n<b> Meta key active:</b> " + event.metaKey + "\n";
});