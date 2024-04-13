function returnOneOrTwo() {
  //* Retorna 1 o 2
  return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
}

let variable_env: null | number | undefined = null;

const execReturnOneOrTwo = returnOneOrTwo();

if (execReturnOneOrTwo == 1) {
  variable_env = 1000;
} else if (execReturnOneOrTwo == 2) {
  variable_env = undefined;
}

console.log({ execReturnOneOrTwo });
console.log({ variable_env });

function callNumber() {
  const internalVariable = variable_env as number;

  return internalVariable + 1;
}

console.log(callNumber());

//* =======================================

let variable_possibly: undefined | number;

/*
 * ...
 * Logica donde ustedes saben que va a haber un numero de forma definitiva
 * ...
 */

const onlyNumber = (variable: number) => {
  return variable * variable;
};

onlyNumber(variable_possibly!);
