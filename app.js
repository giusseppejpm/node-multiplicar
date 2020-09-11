const yargs = require('./config/yargs').yargs;
// yargs.yargs
const multiplicar = require('./multiplicar/multiplicar');
const colors = require('colors')
/********** */
let comando = yargs._[0];
switch (comando) {
  case 'crear':
    multiplicar.multiplicar(yargs.base, yargs.limite).then(resp => {
      console.log(resp.green);
    }).catch(e => {
      console.log(e);
    });
    break;
  case 'lista':
    multiplicar.mostrarTabla(yargs.base, yargs.limite).then(resp => {
      console.log(resp.red);
    }).catch(e => {
      console.log(e);
    });
    break;
  default:
    console.log('No se reconoce el comando');
    break;
}
