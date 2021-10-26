

function checkfun() {
    let binary = document.getElementById("number-input").value;
    let decimal = parseInt(binary, 2);
    document.getElementById("result-block").innerHTML = decimal;
}

