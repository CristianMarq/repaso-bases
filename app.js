const { createContrato } = require("./helpers/presupuesto");
const argv = require("./configs/yargs");

createContrato(argv.f, argv.n, argv.a, argv.c, argv.d, argv.p)
  .then((nombreArchivo) => console.log(nombreArchivo))
  .catch((err) => console.log(err));
