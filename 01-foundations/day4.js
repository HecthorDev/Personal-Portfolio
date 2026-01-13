// Ejercicio 1: OBJETOS (Data Modeling).

const usuario = {
  nombre: "Hector",
  edad: 38,
  esDesarrollador: true
};

console.log("Soy " + usuario.nombre + " y tengo " + usuario.edad + " años.");

// Ejercicio 2: LA ACTUALIZACIÓN DE PERFIL

const usuario = { nombre: "Hector", edad: 38 };

usuario.edad = 39;
usuario.pais = "Guatemala";

console.log(usuario);

// Ejercicio 3: EL CARRITO DE COMPRAS

const carrito = [
    { producto: "Camisa", precio: 20 },
    { producto: "Zapatos", precio: 50 }
];

console.log(carrito[1].precio);

// Ejercicio 4: ☠️ BOSS FIGHT DÍA 4: LA FACTURA (The Bill)

const carrito = [
    { producto: "Camisa", precio: 20 },
    { producto: "Zapatos", precio: 50 },
    { producto: "Pantalones", precio: 30 }
];

let total = 0;

for ( let i = 0; i < carrito.length; i++){
    total += carrito[i].precio;
}

console.log("El total de la factura es: $" + total);

// Ejercicio 5: ⚔️ RETO DE REFUERZO: LA NÓMINA (PAYROLL)

const empleados = [
    { nombre: "Hector", sueldo: 3000 },
    { nombre: "Mynor", sueldo: 3500 },
    { nombre: "Cristy", sueldo: 2800 }
];

let totalNomina = 0;

for (let i = 0; i < empleados.length; i++) {
    totalNomina += empleados[i].sueldo;
}