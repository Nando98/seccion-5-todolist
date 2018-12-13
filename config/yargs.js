/**
 *  Archivo de configuracion para Yargs. Definicion de parametros en consola.
 */

const options = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        demand: false,
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento para la TaskList.', options)
    .command('actualizar', 'Actualizar el estado de una tarea.', options)
    .command('listar', 'Lista las tareas que estan pendientes.')
    .command('borrar', 'Elimina una tarea por su descripcion', options)
    .help()
    .argv;

module.exports = {
    argv
}