//* JSON
//* Alternativa a Clases para agrupar información
//* Permite anidarse

//* Trabajador
//* Un trabajador tiene:
//* 0. Nombre
//* 1. Un puesto asignado
//* 2. Un salario
//* 3. Tiene delegados -> Trabajadores
//* 4. Medidas -> Altura - Peso
//* 5. Caracteristicas -> Color de ojos - cabello - Nacionalidad ("Peruana" | "Extranjera" | "No Especificado")
//* 6. Cabello -> esCorto - color - esRizado

enum TipoNacionalidad {
  Peruana,
  Extranjera,
  NoEspecificado,
}

//* Color de cabello se limitara a "Castaño" | "Rubio" | "Negro"
enum ColorCabello {
  Castaño,
  Rubio,
  Negro,
}

interface Trabajador {
  nombre: string;
  puesto: string;
  salario: number;
  delegados: Trabajador[];
  medidas: {
    altura: number;
    peso: number;
  };
  caracteristicas: {
    ojos: string;
    cabello: {
      esCorto: boolean; //* Cuando se maneja booleanos se debe colocar como si fuera una preguta -> "¿Es Corto?" = true | false -> isShort "is Short?"
      color: ColorCabello;
      esRizado: boolean;
    };
    nacionalidad: TipoNacionalidad;
  };
}

interface Persona {
  nacionalidad: TipoNacionalidad;
}

const persona: Persona = {
  nacionalidad: TipoNacionalidad.Extranjera,
};

//* ============================================

enum Marca {
  BMW,
  MAZDA,
}

interface Litraje {
  tipoAceite: string;
  limite: number;
}

interface Auto {
  marca: Marca;
  color: string;
  kilometraje: number;
  patrocinadores: string[];
  tipoConvertible?: string;

  caracteristicas: {
    litrajePermitido: Litraje[];
  };
}

/*
* Cuando usar ? - [] - NADA

* Cuando estrictamente debe hacer 1 VALOR -> No se coloca nada (Ej: { marca: string })
* Cuando puede tener NINGUNO o 1 Solo VALOR -> Se coloca el simbolo de interrogacion (Ej: { tipoConvertible?: string })
* Cuando puede tener NINGUNO o MUCHOS VALORES -> Se coloca el simbolo de llaves cuadradas a la derecha del tipo de dato (Ej: { patrocinadores: string[] })
 */

interface IPersona {
  nombre: string; //* Solo 1 y es OBLIGATORIO
  carrera?: {
    //* NINGUNO o UNO (Mas extenso y detallado como para colocar un solo boolean)
    nombre: string;
    anios: number;
    universidad: string;
  };
  becas: string[]; //* 0 a MUCHOS
}

/*
 * TAREA
 * Crear una interface Computadora
 *
 * Debe tener los siguientes atributos:
 * Nombre del dueño
 * Procesador -> Generacion - Marca - Año de produccion
 * Memoria RAM -> Conjunto de Memoria (Cada Memoria tiene Marca - Frecuencia - Capacidad)
 * Discos duros -> Conjunto de discos duros (Cada disco duro tiene Marca - Tipo - Capacidad) Tipos de disco duro: HDD - SSD - M2
 * Tarjeta Grafica -> Puede tener o no - En caso de tener Tarjeta Grafica tiene lo siguiente -> Marca - Memoria VRAM
 * Case -> Marca - Precio
 * VoltajeDeFuente (Numero de Watts que maneja la fuente)
 * Indicar si tiene o no microfono (No especificar el microfono en caso de tener)
 * Indicar si tiene o no webcam (No especificar la webcam en caso de tener)
 * Programas instalados -> Conjunto de nombres de programas instalados (Solo nombres, nada de detalles)
 *
 * Si un objeto sera animado crea una interface para ese anidado
 */

enum BrandProcessor {
  INTEL,
  AMD,
}

enum HardDiskType {
  HDD,
  SSD,
  M2,
}

interface IProcessor {
  generation: string;
  brand: BrandProcessor;
  productionYear: number;
}

interface IMemoryRam {
  brand: string;
  frequency: string;
  capacity: number;
}

interface IHardDisk {
  brand: string;
  type: HardDiskType;
  capacity: number;
}

interface IGraphicCard {
  brand: string;
  vram: number;
}

interface ICase {
  brand: string;
  price: number;
}

interface IComputer {
  owner: string;
  processor: IProcessor;
  memoryRams: IMemoryRam[];
  hardDisks: IHardDisk[];
  graphicCard?: IGraphicCard;
  case: ICase;
  hasMicrophone: boolean;
  hasWebcam: boolean;
  programs: string[];
}
