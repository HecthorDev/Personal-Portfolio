// Ejercicio 1: FUNCIONES

function iniciarSistema() {
  console.log("Sistema Operativo v2.0 Cargado");
}

iniciarSistema();
iniciarSistema();
iniciarSistema();

// Ejercicio 2: EL SISTEMA DE ACCESO

function verificarAcceso(usuario) {
  console.log("Acceso concedido a: " + usuario );
}

verificarAcceso("Batman");
verificarAcceso("Robin");

// Ejercicio 3: LA CALCULADORA DE ÁREAS

const ladoDelTerreno = 10; 
const areaTotal = calcularArea(ladoDelTerreno);

function calcularArea (lado) {
    return lado * lado;
}

console.log("El costo es: " + (areaTotal * 5));

// Ejercicio 4: ☠️ BOSS FIGHT DÍA 3: EL CEREBRO DEL SISTEMA

function esSegura(password) {
    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

const resultado1 = esSegura("patito"); 
const resultado2 = esSegura("SuperSecret123"); 

console.log(resultado1); 
console.log(resultado2);