const fs = require('fs');
const colores = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {
    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base*i}\n`;
            consola += `${base} ${'*'.green} ${i} ${'='.green} ${base*i}\n`;

        }
        if (listar) {
            console.log('=================='.green.green);
            console.log(` ${'Tabla del'.green} ${colores.blue(base)}`);
            console.log('=================='.green.green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Archivo tabla-${base}.txt creado con exito`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo
}