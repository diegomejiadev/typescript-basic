import axios from 'axios';

const main = async () => {
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/1';

  const response = await axios(BASE_URL, {
    method: 'GET',
  });

  const info = response.data;

  console.log(info.name);
};

main();

//* Funcion: function NOMBRE(): Promise<any> {}
//* Donde va el await: Va en la funcion o metodo que va a tardar
//* Como identificarlo: Al pasar el mouse encima sale la palabra PROMISE

//* 1. Callbacks
//* 2. Then - Catch
//* 3. Async - Await

//* TAREA: Convertir la funcion then-catch a un async - await
