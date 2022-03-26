const fs = require("fs");

const createContrato = async (
  fecha,
  nombreW,
  direccion,
  cantidad,
  descripcion,
  precio
) => {
  try {
    const presupuesto = `
                                    Presupuesto.
                                                            Tepic, Nayarit ${fecha}
    
    Trabajador responsable: ${nombreW}.
    Direccion del proyecto: ${direccion}.
    
    Por medio de este presupuestó se está realizando la cotización de un trabajo que consta de ${cantidad} metros cuadrados de ${descripcion} a un precio de $${precio}.00 MXM por metro que nos otorga un total de $${
      cantidad * precio
    }.00 MXM.
    Cabe mencionar que esta cotización tiene una expiración despues de 7 dias de haberse realizado una vez ya pasado el periodo esta será anulada y no podra acceder a los precios acordados durante los dias validos de este documento.
    `;

    fs.writeFileSync(`./salida/Presupuesto-${direccion}.txt`, presupuesto);
    return `Presupuesto-${direccion}.txt creado`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createContrato,
};
