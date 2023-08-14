let x;
let y;
let z;

document.getElementById("rollbutton").onclick = function() {
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 8) + 1;
    z = Math.floor(Math.random() * 10) + 1;

    document.getElementById("x").innerHTML = x;
    document.getElementById("y").innerHTML = y;
    document.getElementById("z").innerHTML = z;

}



