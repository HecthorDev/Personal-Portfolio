// Ejercicio 1: ARRAYS

const inventario = ["Espada", "Escudo", "Poción"];

console.log(inventario[0]);
console.log(inventario[2]);

// Ejercicio 2: MUTACIÓN Y EXPANSIÓN

const inventario = ["Espada", "Escudo", "Poción"];
inventario[2] = "Botella Vacia";
inventario.push("Mapa");

console.log(inventario[2]); //Antes Posion ahora Botella Vacia
//El comando .push agrego "Mapa" al final del array
console.log(inventario.length);

