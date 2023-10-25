console.log("Prueba de conexión");

// *** TIPOS DE VARIABLES ***

// const constantes
const pi = 3.1416;
const pu = 2.54;
const name = "Wilder Andrés Duarte Neira";

// var para variables globales
var days = 15;

// let para variables de bloques O locales 
let j = 0;
let count = 1;

// FORMAS DE IMPRESIÓN

// alert
// alert(name);

// log
// console.log(name);
// console.log(days);
console.log("15");

// pantalla - body
// document.write(name);
document.getElementById("box_one").innerHTML = "<h1>Este</h1>"
document.getElementById("box_two").innerText = "<h2>Wilder Duarte</h2>"

// *** Librerias ***

Swal.fire({
    icon:'error',
    title:"Wilder Duarte",
    text: pu.toString(),
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    position: 'center-end'
});

// *** TIPOS DE DATOS ***

// numericos
var number_one = 10;
var number_two = 2.3;

// string
var text = "Soy un texto";

// boolean
var boolean = true;
var boolean_two = false;

// arrays (arreglos) (Listas)
let array_num = [1,2,3,4,5,6];
let array_yex = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
let array_mix = [1, "2", 3, 2.5, "c"];
let array_mul = [
    {name:"A", last_name:"Duarte", age:341},
    {name:"B", last_name:"Duarte", age:331},
    {name:"C", last_name:"Duarte", age:321},
    {name:"D", last_name:"Duarte", age:351}
]

// *** OPERADORES ***

// Suma +
var suma = number_one+number_two;
console.log("La suma es "+suma);
console.log("La concatenación es "+number_one+number_two);

// Resta -
var resta = number_one-number_two;
console.log("La resta es "+resta);

// multiplicacion *
var multiplicacion = number_one*number_two;
console.log("La multiplicacion es "+multiplicacion);

// division /
var division = number_one/number_two;
console.log("La division es "+division);

// modulo %
var modulo = number_one%number_two;
console.log("Es modulo es "+modulo);

console.log(
    "La suma es "+suma+"\n"+
    "La resta es "+resta+"\n"+
    "La multiplicacion es "+multiplicacion+"\n"+
    "La division es "+division+"\n"+
    "Es modulo es "+modulo
);

var respuesta = "La suma es "+suma+"<br>"+
"La resta es "+resta+"<br>"+
"La multiplicacion es "+multiplicacion+"<br>"+
"La division es "+division.toFixed(2)+"<br>"+
"Es modulo es "+modulo.toFixed(2);

Swal.fire({
    showConfirmButton: false,
    background: '#000',
    icon: 'success',
    title: 'Respuesta',
    html: respuesta,
});