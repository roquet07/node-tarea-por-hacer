const descripcion = {
  demand:true,
  alias: 'd',
  desc: 'Descripcion de una tarea por hacer'
}
const completado = {
  default:true,
  demand:true,
  alias: 'c',
  desc:'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
            .command('crear','Crear un elemento por hacer', {
                  descripcion
                })
            .command('actualizar','Actualiza el estado completado de una tarea', {
                descripcion,
                completado
                })
            .command('borrar','Elimina  una tarea', {
              descripcion
                })
            .help()
            .argv;

module.exports = {

argv

}

