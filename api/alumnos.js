import config from '../config.js'
import AlumnosFactoryDAO from '../model/DAO/alumnosFactory.js'


class ApiAlumnos {
    constructor() {
        //console.log(config.MODO_PERSISTENCIA)
        //this.alumnosModel = new AlumnosMemDAO()
        //this.alumnosModel = new AlumnosMongoDAO()
        this.alumnosModel = AlumnosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerAlumnos = async id => {
        return id? await this.alumnosModel.findAlumno(id) : await this.alumnosModel.findAlumnos()
    }

    guardarAlumno = async alumno => {
        return await this.alumnosModel.saveAlumno(alumno)
    }

    actualizarAlumno = async (alumno,id) => {
        return await this.alumnosModel.updateAlumno(alumno,id)
    }

    eliminarAlumno = async id => {
        return await this.alumnosModel.deleteAlumno(id)
    }

    listarNotas = async id => {
        const alumnos = await this.obtenerAlumnos(id), arrayNotas = []
        alumnos.forEach(a => {
            arrayNotas.push(a.nota)
        });
        return arrayNotas;
    }

    promediarNotas = async id => {    
        const 
            arrayNotas = await this.listarNotas(id),
            cant = arrayNotas.length,
            total = arrayNotas.reduce((a, b) => a + b, 0),
            promedio = total/cant
        return { 'promedio': promedio, 'cantidad': cant };
    }
}

export default ApiAlumnos