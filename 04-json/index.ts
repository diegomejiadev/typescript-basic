const variable_json = {
  a: 1,
  b: 2,
  c: {
    a: 2,
    b: 2,
  },
};

// console.log('JSON', variable_json);
// console.log('a variable', variable_json.a);
// console.log('b nested', variable_json.c.b);

//* =======================================

const person_json = {
  name: 'Diego',
  lastname: 'Mejia',
  age: 25,
  skills: ['NodeJs', 'React', 'Typescript'],
  inventory: {
    tech: {
      type: 'Computer',
      brand: 'Intel',
    },
  },
};

// console.log(person_json.name);
// console.log(person_json.inventory);
// console.log(person_json.skills);

interface IObject {
  name: string;
  color: 'blue' | 'red';
  status: 'good' | 'bad';
  measurements: {
    height: number;
    width: number;
    unit: 'cm' | 'm';
  };
}

const object: IObject = {
  color: 'red',
  measurements: {
    height: 20,
    width: 30,
    unit: 'cm',
  },
  name: 'Pelota',
  status: 'good',
};

interface SQLConnection {
  dialect: string;
  connect: () => Promise<void>;
  port?: number;
  storage?: string;
  host?: string;
  ssl: boolean;
  debug: boolean;
}

let libreria_sql: any;
let libreria_sqlite: any;

const mySqlConnection: SQLConnection = {
  connect: async () => {
    await libreria_sql.connect('127.0.0.1:5432');
  },
  debug: false,
  dialect: 'mysql',
  ssl: false,
  host: '127.0.0.1',
  port: 5432,
};

const sqlLiteConnection: SQLConnection = {
  connect: async () => {
    await libreria_sqlite.start();
  },
  debug: true,
  dialect: 'sqlite',
  ssl: false,
  storage: 'file:/.db',
};

function connect(adapter: SQLConnection) {
  adapter.connect();
}
