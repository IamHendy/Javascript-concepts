//callback are used as an argument in another function



function thesum (x, y, callback) {
    result = x + y;
    callback(result);
}

function printresult(result){
    console.log(result);
}

thesum(2, 6, printresult);
