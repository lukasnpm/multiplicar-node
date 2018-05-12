const fs = require('fs');
const colors = require('colors');
//const fs = require('paquetes fuera de node');
//const fs = require('paquetes nuestros');
//const fs = require('propios de node');

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`Tabla de ${ base}`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i*base}`);

    }



}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`El valor introducido ${ base }no es un numero`.red)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i*base}\n`;

        }

        fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => {
            if (err)
                rejects(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}