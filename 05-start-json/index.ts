//* Variables
const firstName: string = 'Diego';
const age: number = 25;
const manageJavascript: boolean = true;

//* Clases
class Person {
  firstName: string;
  age: number;
  manageJavascript: boolean;

  constructor(firstName: string, age: number, manageJavascript: boolean) {
    this.age = age;
    this.firstName = firstName;
    this.manageJavascript = manageJavascript;
  }
}

const person = new Person('Diego Mejia', 25, true);

// console.log(person);

//* Consideraciones (Class)
//* 1. Las clases se tienen en mente para muchas instancias (Cientos a más de miles)
//* 2. Ocupan más memoria que un JSON
//* 3. Se recomienda ocupar cuando se necesite aplicar principios o patrones de diseño

//* JSON (JS Vanilla)
const personJSON = {
  firstName: 'Diego Mejia',
  age: 25,
  manageJavascript: true,
};

const secondVariableJSON = {
  lastName: 'Mejia',
  age: 25,
};

// console.log(personJSON);
// console.log(secondVariableJSON);

//* Consideraciones (JSON JS Vanilla)
//* 1. Se puede utilizar para muy pocas instancias (por no decir 1 ya que no tiene una interface que obedecer)
//* 2. Ocupa mucho menos memoria
//* 3. Se recomienda ocupar unicamente con el fin de agrupar informacion

//* Class + JSON Vanilla
//* JSON (Typescript)
interface IHero {
  name: string;
  age: number;
  alterEgo: string;
  comics?: string[];
  vehicle?: {
    type: string;
    name: string;
  };
}

const batmanJson: IHero = {
  name: 'Bruce Wayne',
  age: 33,
  alterEgo: 'Batman',
  comics: [
    'The Long Halloween',
    'Arkham Asylum: A serious house on a serious earth',
    'The cult',
  ],
  vehicle: {
    type: 'Auto',
    name: 'Batimovil',
  },
};

const supermanJson: IHero = {
  name: 'Clark Kent',
  age: 31,
  alterEgo: 'Superman',
  comics: ['What happened to the Man of tomorrow', 'All Stars Superman'],
};

const flashJson: IHero = {
  name: 'Barry Allen',
  age: 30,
  alterEgo: 'The Flash',
};

function sendToMission(hero: IHero) {
  return `Sending to ${hero.alterEgo} to a new mission.`;
}

function listComics(hero: IHero) {
  if (!hero.comics || hero.comics.length == 0) {
    return `El heroe ${hero.alterEgo} no tiene comics significativos`;
  }

  //* Todo heroe que venga aqui si o si tiene comics
  return `Listado de comics de ${hero.alterEgo}:
    ${hero.comics.map((comicItem) => comicItem)}\n\n`;
}

//  console.log(sendToMission(batmanJson));
//  console.log(sendToMission(supermanJson));
//  console.log(sendToMission(flashJson));

// console.log(listComics(batmanJson));
// console.log(listComics(supermanJson));
// console.log(listComics(flashJson));

//* Consideraciones (JSON - Typescript + Interface)
//* 1. Permite tener una plantilla para los objetos estructurados
//* 2. Permite tener más de un objeto con la misma estructura sin errores de codigo
//* 3. Al ser invocado por otras variables, funciones o clases se sabe exactamente que se esta enviando por la interface

function traslateHero(hero: IHero) {
  if (!hero.vehicle)
    return `El personaje ${hero.alterEgo} no se moviliza en vehiculos`;

  //* Todo debajo de aqui ya tienen vehiculo
  return `El personaje ${hero.alterEgo} esta yendo en su ${hero.vehicle.name}`;
}

console.log(traslateHero(batmanJson));
console.log(traslateHero(supermanJson));
console.log(traslateHero(flashJson));

/*
* TAREA

* 1. Colocar un objeto vehiculo al menos en un objeto IHero (X)
* 2. Crear una funcion que reciba como parametro una variable de tipo IHero y que haga lo siguiente
* La funcion debe llamarse traslateHero
* Si el persona no tiene un vehiculo que retorne "El personaje NOMBRE_DEL_PERSONAJE no se moviliza con vehiculos"
* Si el persona tiene un vehiculo que retorne "El personaje NOMBRE_DEL_PERSONAJE esta yendo en su NOMBRE_DEL_VEHICULO"
* Para invocar a NOMBRE_VEHICULO se hace de la siguiente manera ${vehicle.name}
 */
