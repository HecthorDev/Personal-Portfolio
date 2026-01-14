// Ejercicio 1: 🔧 HERRAMIENTA 1: EL GANCHO (document.querySelector)

/*
function cambiarTexto() {
    const miTitulo = document.querySelector('#noticia-urgente');
    miTitulo.innerText = "¡Soy un Frontend Developer!";
    miTitulo.style.color = 'red';
}
*/

// Ejercicio 2: ☠️ BOSS FIGHT FASE 2: EL SALUDADOR (THE GREETER)
/*
function saludar() {
    const nombreUsuario = document.querySelector('#input-nombre').value;
    const mensajeSaludo = document.querySelector('#mensaje');
    mensajeSaludo.innerText = `Hola, ${nombreUsuario}!.`;
}
*/

// Ejercicio 3: ⚔️ RETO DE REFUERZO: EL VALIDADOR (LOGIC + DOM)
/*
function saludar() {

    const nombreUsuario = document.querySelector('#input-nombre').value;
    const mensajeSaludo = document.querySelector('#mensaje');

    if (nombreUsuario === '') {
        mensajeSaludo.innerText = 'Por favor, escribe un nombre';
        mensajeSaludo.style.color = 'red';
    } else {
        mensajeSaludo.innerText = `Hola, ${nombreUsuario}!.`;
        mensajeSaludo.style.color = 'green';
    }

}
*/

// Ejercicio 4: ☠️ BOSS FIGHT FINAL FASE 2: LA CALCULADORA REAL

function sumar() {
    const num1 = document.querySelector('#num1').value;
    const num2 = document.querySelector('#num2').value;
    const resultado = document.querySelector('#resultado');
    const resultadoSuma = Number(num1) + Number(num2);

    resultado.innerText = `El resultado es: ${resultadoSuma}`;
}