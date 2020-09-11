const fs = require("fs");
/********************* */
let multiplicar = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) return reject(`El valor ${base} no es un número`);
    let result = "";
    for (let i = 1; i <= limite; i++) {
      result += `${base} * ${i} = ${base * i} \n`;
    }
    fs.writeFile(`Tablas/tabla-${base}`, result, (err) => {
      if (err) return reject(err);
      resolve(`El documento tabla-${base} fue creado!`);
    });
  });
};
let mostrarTabla = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if(!Number(base)) return reject('El parametro Base no es un numero');
    if(!Number(limite)) return reject('El parametro Limite no es un numero');
    let result = ''
    for(let i = 0; i <= limite; i++) {
      result += `${base} * ${i} = ${base*i} \n`;
    };
    resolve(result)
  });
};
module.exports = {
  multiplicar,
  mostrarTabla
};
