const { crearArchivo } = require('./helpers/multiplicar');
const colores = require('colors');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
// console.log(argv);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

// const base = 9;

crearArchivo(argv.b, argv.l, argv.h)
    .then(mensaje => console.log(mensaje.rainbow))
    .catch(err => console.log(err));