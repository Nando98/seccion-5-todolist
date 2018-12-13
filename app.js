/**
 * 
 * Aplicacion de TaskList - Seccion 5
 * 
 */

// node app crear -d "Pasear al paerro"
// node app listar

const argv = require('./config/yargs').argv;
const task = require('./task-list/task-list');
const colors = require('colors');

let comando = argv._[0];

console.log('Comando ejecutado >>', comando.green);
// console.log('Descripcion enviada >>', argv.descripcion.green);
// console.log('¿Completado? >>', argv.completado.green);

switch (comando) {
    case 'crear':
            let new_task = task.crear( argv.descripcion );
            console.log('Se ha creado la tarea :', new_task.grey);
        break;

    case 'listar':
            let listado = task.getTaskList();

            for (let task of listado) {
                console.log('.//////////////. Waiting for U! .//////////////.'.green);
                console.log('Tarea:', task.descripcion);
                console.log('Estado:', task.completado);
                console.log('.//////////////////////////////////////////////.\n'.green) ;
            }
        break;

    case 'actualizar':
            let actualizado = task.update(argv.descripcion, argv.completado);
            console.log(actualizado);
        break;

    case 'borrar':
            let borrado = task.delette( argv.descripcion );
            console.log('¿Se borro?', borrado)
        break;

    default:
            console.log('Comando no reconocido');
        break;
}