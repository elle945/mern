//Importerar paket och skapar varaibler
import express, {Request, Response, json} from 'express'

//Importerar router
import carRouter from './routes/carRoutes'
//Importerar alla metoder från vår carController
import {getCars, createCar} from './db/models/carController'

//Importer mongoose och connect funktionen och använder med min MongoDB
import {connect} from 'mongoose'
//Skapar en anslutning till MongoDB
connect('mongodb://localhost:27017/elinn')

const app = express()

const port = 8000

//Middleware
app.use(json())

//Använd router i vår server
app.use('/car', carRouter)

//Handlers GET/DELETE/POST/PUT
app.get('/', (req: Request, res:Response) => {
    res.send('funkar')
}) 

//Get för cars:
app.get('/car', async (req: Request, res:Response) => {
    const cars = await getCars()
    res.json(cars)
}) 

//Skapar POST för att kunna lyssna efter post förfrågningar på PORT 8000 vid 
//car endpoint och använvda createCar funktionen för att skapa en ny bil som skickas i förfrågnings bodyn. 
//Denfinera funktionen 
app.post('/car', async (req: Request, res:Response) => {
    const newCar = req.body
    const createdCar = await createCar(newCar)
    res.json(createdCar)
}) 

//Lyssnar på porten
app.listen(port, () => {
    console.log(`Server is running ${port}`)
})

