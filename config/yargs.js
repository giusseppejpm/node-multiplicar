let opt = {
  base: {
    demand: true,
    alias: 'b',
  },
  limite: {
    default: 10,
    alias: 'l',
  }
}
const yargs = require('yargs')
  .command('lista', 'Muestra en consola la tabla de multiplicar', opt)
  .command('crear', 'Crear un .txt con tabla de multiplicar', opt)
  .help()
  .argv;

module.exports = {
  yargs
}