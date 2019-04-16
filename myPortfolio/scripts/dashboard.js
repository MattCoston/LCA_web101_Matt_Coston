function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
function subtractNumber() {
  document.querySelector("#results").value += "-";
}
function multiplyNumber() {
  document.querySelector("#results").value += "*";
}
function divideNumber() {
  document.querySelector("#results").value += "/";
}
function plusMinus() {
  document.querySelector("#results").value = document.querySelector("#results").value * -1;
}

var myLocation = document.getElementById("geoloc")

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
   myLocation.innerHTML = "Not available"
  }
}

function displayPosition(position) {
  myLocation.innerHTML = "Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
}




// // color change function for generating three R G B values then changing the background color randomly

// function colorChange() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     var rgbColor = "rgb(" + r + "," + g + "," + b + ")";
//     console.log(rgbColor);

//     document.body.style.background = rgbColor;
// }


// // function that reloads the page

// function pageRefresh() {
//     location.reload();
// }
// // calls the colorChange function

// colorChange();
