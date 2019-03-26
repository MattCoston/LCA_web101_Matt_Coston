console.log('hey there');


var gameMarker = "X";
var gameMarker = "O";

function changeMarkerToX() {
    console.log("The x button was clicked!");

}
function changeMarkerToO() {
    console.log("The O button was clicked!");
}
function placeMark(id) {
    var place = document.getElementById(id);
    place.innerHTML = gameMarker;
}