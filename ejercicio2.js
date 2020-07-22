var a = 0;
var b = 0;
var c = 0;
var d = 0;

var calcularmitad = 0;

a = parseInt(prompt("Digite número a"));
b = parseInt(prompt("Digite número b"));
c = parseInt(prompt("Digite número c"));
d = parseInt(prompt("Digite número d"));


calcularmitad = calcular(a,b,c,d);

function calcular(nA,nB,nC,nD) {
    const result = (nA + nB + nC + nD)
    media = (result /4);
    console.log("La media de todos los valores es la siguiente:" +media);
}