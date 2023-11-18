/* 

1) EJERCICIO:
Super ejercicio: Preguntar nombre al usuario y saludarlo por su nombre.

CODIGO:
var nombreUsuario = prompt("Por favor, ingresa tu nombre:");
document.write("Hola " + nombreUsuario + " Bienvenido.");

<---------------------------------------------------------------------------------->

2) EJERCICIO:
Preguntar nombre al usuario y saludarlo por su nombre.
Si el usuario no escribe su nombre saludar: "Hola, desconocido."

CODIGO:
var nombreUsuario = prompt("ingresa tu nombre:");
if (nombreUsuario == "") {
    document.write("Hola desconocido, bienvenido.");
} else {
    document.write("Hola " + nombreUsuario + " bienvenido.");
} 

<---------------------------------------------------------------------------------->

3) EJERCICIO:
Leer nombre y apellido, saludar por nombre y apellido.


CODIGO:
var nombreYapellido = prompt("ingresa tu nombre y apellido")
document.write("Hola " + nombreYapellido + " bienvenido.")

<---------------------------------------------------------------------------------->

4) EJERCICIO:
Pregunte al usuario si desea continuar, responder con hola o adiós.


CODIGO:
var continuar = prompt("desea continuar?")
if (continuar === "si") {
    document.write("Hola");
} else {
    document.write("Adiós");
} 


<---------------------------------------------------------------------------------->

5) EJERCICIO
Leer nombre y edad, Mostrar si es o no mayor de edad.

codigo:
var nombre = prompt("Ingrese su nombre:");
var edad = prompt("Ingrese su edad:");

if (edad >= 18) {
    document.write(nombre + ", eres mayor de edad.");
} else {
    document.write(nombre + ", no eres mayor de edad.");
}


<---------------------------------------------------------------------------------->

6) EJERCICIO:
 Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.

CODIGO:
var rol = prompt("Ingrese su rol (admin, ventas, cliente):");

if (rol === "admin") {
    document.write("Bienvenido, administrador.");
} else if (rol === "ventas") {
    document.write("Bienvenido, empleado de ventas.");
} else if (rol === "cliente") {
    document.write("Bienvenido, cliente.");
} else {
    document.write("Rol no reconocido.");
}

<---------------------------------------------------------------------------------->
7) EJERCICIO:
Leer un número, mostrar el doble de n.

CODIGO:
var numero = prompt("ingrese un numero")
document.write(numero*2)

<---------------------------------------------------------------------------------->
8) EJERCICIO:
Leer un número, mostrar la mitad de n.

CODIGO:
var numero = prompt("ingrese un numero")
document.write(numero/2)


<---------------------------------------------------------------------------------->
9) EJERCICIO:
Leer un número, mostrar si es positivo, negativo o cero.

CODIGO:
var numero = prompt("ingrese un numero")
if (numero > 0) {
    document.write("el " + numero + " es positivo");
} else if (numero < 0) {
    document.write("el " + numero + " es negativo");
} else {
    document.write("el " + numero + " es 0");
}

<---------------------------------------------------------------------------------->
10) EJERCICIO:
Leer un número, mostrar si es par o impar.

CODIGO:
var numero = prompt("ingrese un numero")
if (numero % 2 === 0) {
    document.write("El número ingresado es par.");
} else {
    document.write("El número ingresado es impar.");
}


<---------------------------------------------------------------------------------->
11) EJERCICIO:
Leer dos números, mostrar el mayor.

CODIGO:
var numero1 = prompt("Ingrese el primer número:");
numero1 = parseFloat(numero1);
var numero2 = prompt("Ingrese el primer número:");
numero2 = parseFloat(numero2);

if (numero1 > numero2) {
    document.write("el numero (" + numero1 + ") es mayor que el numero (" + numero2 + ").");
} else if (numero1 < numero2) {
    document.write("el numero (" + numero1 + ") es menor que el numero (" + numero2 + ").");
} else {
    document.write("Ambos números son iguales.");
}


<---------------------------------------------------------------------------------->
12) EJERCICIO:
// Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).


CODIGO:
var numero1 = prompt("Ingrese el primer número:");
numero1 = parseFloat(numero1);
var numero2 = prompt("Ingrese el segundo número:");
numero2 = parseFloat(numero2);

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;
var cuadrado1 = numero1 * numero1;
var cuadrado2 = numero2 * numero2;

document.write("Suma: " + suma + " ");
document.write("Resta: " + resta + " ");
document.write("Multiplicación: " + multiplicacion + " ");
document.write("División: " + division + " ");
document.write("Módulo: " + modulo + " ");
document.write("Cuadrado del primer número: " + cuadrado1 + " ");
document.write("Cuadrado del segundo número: " + cuadrado2 + " ");


<---------------------------------------------------------------------------------->
13) EJERCICIO:
// Leer dos números, mostrar la suma dividido en la resta.



var numero1 = prompt("Ingrese el primer número:");
numero1 = parseInt(numero1);
var numero2 = prompt("Ingrese el segundo número:");
numero2 = parseInt(numero2);

var suma = numero1 + numero2;
document.write("La suma es: " + suma + "<br>");

var resta = numero1 - numero2;
document.write("La resta es: " + resta + "<br>");


if (resta < 0) {
    document.write("No se puede dividir. La resta es negativa.");
} else {
    var resultado = suma / resta;
    document.write("El resultado de la suma dividido por la resta es: " + resultado);
}

*/


function saludar() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");

    if (nombre && apellido) {
        document.write(`Hola ${nombre} ${apellido}`);
    } else {
        document.write('Hola desconocido');
    }
}

saludar();
