let name;
let text;

function funkyFunc() {
    name = prompt("Please enter your name: ");
    if (name == '' || null) {
        document.getElementById('greeting');
    }
    else {
        text = "Welcome " + name + " to my portfolio!";
        document.getElementById('greeting').innerHTML = text
    }

}
funkyFunc();
// color change function for generating three R G B values then changing the background color randomly

function colorChange() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    var rgbColor = "rgb(" + r + "," + g + "," + b + ")";
    console.log(rgbColor);

    document.body.style.background = rgbColor;
}


// function that reloads the page

function pageRefresh() {
    location.reload();
}
// calls the colorChange function

colorChange();