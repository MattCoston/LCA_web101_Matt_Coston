


var gameMarker = "";


function changeMarkerToX() {
    gameMarker = "X"
    console.log("The X button was clicked!");
    
}
function changeMarkerToO() {
    gameMarker = "O"
    console.log("The O button was clicked!");
    
}
function placeMark(id) {
    var place = document.getElementById(id);
    place.innerHTML = gameMarker;
}

function clearBoard(id){
    if (document.getElementById('container') == "X" || document.getElementById('container') == "O"){
        var clear = document.getElementById(id);
        clear.innerHTML = " "; 
        
    }
}
