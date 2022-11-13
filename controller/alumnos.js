import ApiAlumnos from '../api/alumnos.js'


class controladorAlumnos {

    constructor() {
        this.apiAlumnos = new ApiAlumnos()
    }

    getAlumnos = async (req,res) => {
        const { id } = req.params
        res.json( await this.apiAlumnos.obtenerAlumnos(id) )
    }

    postAlumno = async (req,res) => {
        const cliente = req.body
        await this.apiAlumnos.guardarAlumno(cliente)
        res.redirect('/')
    }

    putAlumno = async (req,res) => {
        const { id } = req.params
        const cliente = req.body
    
        res.json(await this.apiAlumnos.actualizarAlumno(cliente,id))
    }

    deleteAlumno = async (req,res) => {
        const { id } = req.params
    
        res.json(await this.apiAlumnos.eliminarAlumno(id))
    }

    listarNotas = async (req,res) => {    
        const { id } = req.params
        res.json(await this.apiAlumnos.listarNotas(id))
    }

    promediarNotas = async (req,res) => {    
        const { id } = req.params
        res.json(await this.apiAlumnos.promediarNotas(id))
    }
}

export default controladorAlumnos