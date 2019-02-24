let name;
let text;

window.onload = function funkyFunc () {
    name = prompt("Please enter your name: ");
        if (name == '') {
            document.getElementById('greeting');
        }
        else {
            text = "Welcome " + name + " to my portfolio!";
    document.getElementById('greeting').innerHTML = text 
        } 
    
}
