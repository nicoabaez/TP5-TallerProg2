import AlumnosMemDAO from './alumnosMem.js'
import AlumnosMongoDAO from './alumnosMongoDB.js'

class AlumnosFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log(' ***** Persistiendo en Memoria ***** ')
                return new AlumnosMemDAO()

            case 'MONGO' :
                console.log(' ***** Persistiendo en MongoDB ***** ')
                return new AlumnosMongoDAO()

            default: 
                console.log(' ***** Persistiendo en default (Memoria) ***** ')
                return new AlumnosMemDAO()
        }
    }
}

export default AlumnosFactoryDAO