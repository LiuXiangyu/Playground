var element = document.getElementById("element");
var oldX, oldY;
function drag(event) {
    oldX = oldX || event.clientX;
    oldY = oldY || event.clientY;
    if (oldX != event.clientX || oldY != event.clientY) {
        var posX = element.offsetLeft + (event.clientX - oldX);
        var posY = element.offsetTop + (event.clientY - oldY);
        element.style.left = posX + "px";
        element.style.top = posY + "px";
        oldX = event.clientX;
        oldY = event.clientY;
    }
}

element.onmousedown = function(event) {
    element.onmousemove = drag;
};

element.onmouseup = function(event) {
    element.onmousemove = null;
};
