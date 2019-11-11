// the following code assists with users resizing the window and makes the size of the image on the front page consistent
var dynamicHeightIds = [];
function dynamicHeight(id) {
    let element = document.getElementById(id);
    let elementStyle = window.getComputedStyle(element);
    let elementWidth = parseInt(elementStyle.getPropertyValue('width'));
    let elementHeight = elementWidth/2 + "px";
    element.style.height = elementHeight;
    dynamicHeightIds.push(id);
}
window.onload = function() {
    this.dynamicHeight('front-image');
}
window.onresize = function() {
    this.dynamicHeight('front-image');
}