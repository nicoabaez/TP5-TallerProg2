class AlumnosMemDAO {

    constructor() {
        this.alumnos = [
            { nombre: "Julieta", apellido: "Ragnar", curso: "B", nota: 8, id: "1" },
            { nombre: "Marcos", apellido: "Peña", curso: "B", nota: 7, id: "2" },
        ]
    }

    //delay = ms => new Promise(resolve => setTimeout(resolve,ms))

    findAlumno = async id => {
        return this.alumnos.find(alumno => alumno.id == id)    
    }

    findAlumnos = async ()  => {
        try {
            //await delay(2000)
            return this.alumnos
        }
        //catch(err) {
        catch {
            return []
        }
    }

    saveAlumno = async alumno => {
        alumno.nota = parseInt(alumno.nota)
        
        const id = parseInt(this.alumnos[this.alumnos.length-1].id) + 1
        alumno.id = String(id)

        this.alumnos.push(alumno)

        return alumno    
    }

    updateAlumno = async (alumno,id) => {
        /* Actualización total */    
        alumno.id = id
        const index = this.alumnos.findIndex(alumno => alumno.id == id)
        this.alumnos.splice(index, 1, alumno)

        return alumno    
    }

    deleteAlumno = async id => {
        const index = this.alumnos.findIndex(alumno => alumno.id == id)
        const alumno = this.alumnos.splice(index, 1)[0]
        
        return alumno    
    }

}

export default AlumnosMemDAO
