var a = 0;
var calcularprecio = 0;

a = parseInt(prompt("Digite el precio"));

calcularprecio = calcular(a);

function calcular(nA) {
    const result = nA;
    IVA = 21/10;
    total = (result + IVA);
    console.log("el precio con IVA es:" +total);
    console.log("el precio sin IVA es:" +nA);
    console.log("valor de IVA es:" +IVA);
}