const first_variable: number = 1;
const second_variable: number = 2;

function function_sum() {
  return first_variable + second_variable;
}

console.log(function_sum());

//* =====================================

const function_substract = (a: number, b: number) => {
  return a - b;
};

//* =====================================

const function_optional = (a: number, b: number, c?: number) => {
  if (typeof c == 'undefined') {
    return a + b;
  }

  return a + b + c;
};

// function_optional(1, 2); //* Invocacion de funcion

/*
 * TAREA:
 * Creen una funcion con tipado la cual haga lo siguiente:
 * (Parametro 1): Tome una variable que ustedes hayan creado de tipo numerica
 * (Parametro 2): Variable numerica que se ingrese al invocar
 * (Parametro 3): Variable string que sea opcional, va a actuar como unidad de medida
 *
 * Debe retornar lo siguiente:
 * Parametro 1 = param_1
 * Parametro 2 = param_2
 * Parametro 3 = param_3
 *
 * La funcion debe retornar:
 * param_1 * param_1 + param_2 concat param_3 (Si no se ingresa param_3 que por defecto sea "gr.")
 *
 * La funcion se debe llamar calculo_medidas
 */

const variable_calculo = 10;

function calculo_medidas(variable_two: number, variable_unidad?: string) {
  if (variable_unidad == null || typeof variable_unidad == 'undefined') {
    variable_unidad = 'gr.';
  }

  const sumResult = variable_calculo * variable_calculo + variable_two; //* 103

  return sumResult + ' ' + variable_unidad;
}

console.log(calculo_medidas(3, 'lts.'));
