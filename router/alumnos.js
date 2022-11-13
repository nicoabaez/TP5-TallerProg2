import express from 'express'
import ControladorAlumnos from '../controller/alumnos.js'


export class RouterAlumnos {
    constructor() {
        this.router = express.Router()
        this.controladorAlumnos = new ControladorAlumnos()
    }

    start() {        
        /* GET Nota/s */
        this.router.get('/notas/:id?', this.controladorAlumnos.listarNotas)

        /* GET Promedio y cantidad de notas */
        this.router.get('/promedioycantidad/:id?', this.controladorAlumnos.promediarNotas)
        
        /* GET Alumno/s */
        this.router.get('/:id?', this.controladorAlumnos.getAlumnos)

        /* POST Alumno */
        this.router.post('/', this.controladorAlumnos.postAlumno)

        /* PUT Alumno */
        this.router.put('/:id', this.controladorAlumnos.putAlumno)

        /* DELETE Alumno */
        this.router.delete('/:id', this.controladorAlumnos.deleteAlumno)

        return this.router
    }
}
