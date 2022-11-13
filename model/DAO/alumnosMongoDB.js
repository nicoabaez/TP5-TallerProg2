import CnxMongoDB from '../DB.js'
import { ObjectId } from "mongodb"


class AlumnosMongoDAO {

    findAlumno = async id => {
        if(!CnxMongoDB.connection) return {}
        let alumno = await CnxMongoDB.db.collection('alumnos').findOne({_id: ObjectId(id)})
        return alumno    
    }

    findAlumnos = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let alumnos = await CnxMongoDB.db.collection('alumnos').find({}).toArray()
            return alumnos
        }
        //catch(err) {
        catch {
            return []
        }
    }

    saveAlumno = async alumno => {
        if(!CnxMongoDB.connection) return {}

        alumno.nota = parseInt(alumno.nota)
        await CnxMongoDB.db.collection('alumnos').insertOne(alumno)
        return alumno    
    }

    updateAlumno = async (alumno,id) => {
        if(!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('alumnos').updateOne(
            {_id: ObjectId(id)},
            {$set: alumno}
        )
        let alumnoActualizado = await this.findAlumno(id)
        return alumnoActualizado    
    }

    deleteAlumno = async id => {
        if(!CnxMongoDB.connection) return {}

        let alumnoEliminado = await this.findAlumno(id)
        await CnxMongoDB.db.collection('alumnos').deleteOne({_id: ObjectId(id)})
        
        return alumnoEliminado    
    }
}

export default AlumnosMongoDAO
