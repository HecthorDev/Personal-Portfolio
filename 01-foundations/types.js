//Ejercicio 1: If Nesting

const identificacion = true;
const edad = 18;

if (edad >= 18) {
    if (identificacion) {
    console.log("Puedes entrar a la fiesta");
    } else {
    console.log("No puedes entrar a la fiesta");
    }
} else {
    console.log("No puedes entrar a la fiesta");
}

//Ejercicio 2: &&

const identificacion = true;
const edad = 18;

if (edad >= 18 && identificacion) {
    console.log("Puedes entrar a la fiesta");
} else {
    console.log("No puedes entrar a la fiesta");
}

// Ejercicio 3: ||

const isStudent = false;
const isSenior = true;


if (isStudent || isSenior) {
    console.log("No pagas el boleto");
} else {
    console.log("Pagas el boleto");
}
