/*
 * 1. Variables
 * 2. Funciones
 * 3. Clases
 */

//* VARIABLES
let variable_one = 1;
const variable_two = 'a';
var variable_three = true; //* No recomendado usar var a estas instancias de JS

//* Cambio de tipo
variable_one = 'abc'; //* -> Prev: 1
//* variable_two = false; //* -> Prev: 'a' //! AQUI INCLUSO HAY UN ERROR
variable_three = 1000; //* -> Prev: true

//* console.log(variableOne); //! Es un error - Variable no declarada (Variable not defined)

//* =================================================================

//* FUNCIONES
function function_one() {
  //* Funcion pura sin parametros
  return 2 + 2;
}

function function_two(a, b) {
  //* Funcion pura con parametros
  return a + b;
}

// console.log(function_two(2, '6')); //! Error de tipos de datos

const function_three = () => {
  //* Funcion flecha sin parametros
  return 2 + 2;
};

const function_four = (a, b) => {
  //* Funcion flecha con parametros
  return a + b;
};

// console.log(function_four('abc', 'def'));

function function_five(a, b = 2, c) {
  //* Funcion pura con parametros opcionales

  if (c !== null || typeof c !== 'undefined') {
    return a + b;
  }

  return a + b + c;
}

// console.log(function_five()); //* Lo he dejado sin parametros y no obtuve error
console.log(function_five(2)); //* No tiene contingencia para c

//* =================================================================

//* CLASES
class Person {
  name; //* No se que es, puede confundir
  #year; //* No se sabe que significa el operador #

  constructor(name, year) {
    this.name = name;
    this.#year = year;
  }

  sleep() {
    return 'Zzzzz';
  }
}

class Engineer extends Person {
  grade;

  constructor(grade) {
    super(name, year);
    this.grade = grade;
  }

  build() {
    return Math.ceil(Math.random()) * 100;
  }
}
