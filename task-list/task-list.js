
const fs = require('fs');

let task_list = [];
let directory = 'data/informacion.json';

const crear = (descripcion) => {
    
    load();

    let task = {
        descripcion,
        completado: false
    };

    task_list.push( task );
    save();

    return task;
}

const save = () => {
    let data = JSON.stringify(task_list);

    fs.writeFile(directory, data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar en el achivo', err);
        } else {
            console.info('Se almacenó correctamet la información');
        }
    });
}

const load = () => {
    try {
        task_list = require('../data/informacion.json');
    } catch (error) {
        task_list = [];
    }
}

const getTaskList = () => {
    load();
    return task_list;
}

const update = (descripcion, completado) => {
    load();

    let index = task_list.findIndex( taski => {
        return taski.descripcion === descripcion;
    });

    if ( index >= 0 ) {
        task_list[index].completado = completado;
        save();
        return true;
    } else {
        return false;
    }
}

const delette = (descripcion) => {
    load();

    let data = task_list.filter( (taski,) => {
        return taski.descripcion !== descripcion;
    });

    if ( task_list.length === data.length ) {
        return false;
    } else {
        task_list = data;
        save();
        return true;
    }
}


module.exports = {
    crear,
    getTaskList,
    update,
    delette
}
