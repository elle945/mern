//Importer vår Carmodel som vi exporterade från carSchema.ts filen for 
// att arbeta dvs sätta in data eller liknade
import CarModel, { carType } from "./carSchema";

//Skapar olika funktioner som henterar alla metoder som vi använder
//GET, POST osv

//POST CAR
export const createCar = async (Car: carType) => {
    const newCar = new CarModel(Car)
    await newCar.save()
    return newCar
}

// const newCar =  Skapar en ny instans av CarModel med det angivna Car-objektet
//await newCar.save = Sparar den nya bilen i databasen med hjälp av savemetoden på newCar
// denna funktionen kan användas för att lägga till nya bilar i min databas
//Genom att skcika in ett Car-objekt med önskade egenskapera för den nya bilen

//Skapar funktionalitet för att hämta bilar i vår controller. 
export const getCars = async () => {
    const Cars = await CarModel.find()
    return Cars;
  }