//Importerar Schema och models funktionalitet from mongoose
import {Schema, model} from 'mongoose'

// Pga av Typescript så behöver vi arbeta med interface, detta bestämmer datatypen
//Exporterar denna 
// bestämmer typer i Native JS (String, Booelan osv)
export interface carType {
    model: string,
    brand: string
}

//Skapar Schema (motsvarande table i SQL) stort S(?) why kolla upp
const schema = new Schema<carType>({
    model: {type: String, required:true},
    brand: {type: String, required:true}
})

//Förklara att detta är en mongoose model
const CarModel = model<carType>('Car', schema)


export default CarModel