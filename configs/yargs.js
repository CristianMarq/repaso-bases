const argv = require("yargs")
  .option("f", {
    alias: "fecha",
    type: "string",
    demandOption: true,
    description: "Se encarga de agregar la fecha",
  })
  .option("n", {
    alias: "nombre",
    type: "string",
    demandOption: true,
    description: "Se encarga de agregar el nombre del trabajador",
  })
  .option("a", {
    alias: "adress",
    type: "string",
    demandOption: true,
    description: "Se encarga de agregar la direccion del lugar de trabajo",
  })
  .option("c", {
    alias: "cantidad",
    type: "number",
    demandOption: true,
    description: "Se encarga de agregar la cantidad de metros",
  })
  .option("d", {
    alias: "descripcion",
    type: "string",
    demandOption: true,
    description: "Se encarga de agregar la escripcion de el producto",
  })
  .option("p", {
    alias: "precio",
    type: "number",
    demandOption: true,
    description: "Se encarga de agregar el precio por metro",
  })
  .check((argv, options) => {
    if (isNaN(argv.c)) {
      throw "la cantidad debe de ser un numero";
    }
    return true;
  })
  .check((argv, options) => {
    if (isNaN(argv.p)) {
      throw "El precio debe de ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
