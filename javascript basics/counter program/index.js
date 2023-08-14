let count = 0;

document.getElementById("decbutton").onclick = function() {
    count -=1;
    document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("incbutton").onclick = function() {
    count +=1;
    document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("resetbutton").onclick = function() {
    count = 0;
    document.getElementById("countlabel").innerHTML = count;
}

