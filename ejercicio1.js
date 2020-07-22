var a = 0;
var b = 0;

var calcularmultitplicación = 0;

a = prompt("Digite un numero a");
b = prompt("Digite un número b");
calcularmultitplicación = multiplicación(a,b);

function multiplicación(nA, nB) {
    const result = nA * nB;
    console.log("El resultado de la multiplicación:" +result);
}
