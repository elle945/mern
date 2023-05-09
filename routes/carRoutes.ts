//Denna fil hanterar våra olika rutter med bilar
//Importera routes från express
import express, {Request, Response} from 'express'
//Importera createCar för att jobba med 
import { createCar } from '../db/models/carController'


//Använda router
const router = express.Router()

router.get('/', (req:Request, res:Response) => {
    res.send('Get Cars')
})

//Skapar en post till servern
router.post('/car', async (req:Request, res:Response) => {
    const createdCar = await createCar(req.body)
    res.status(201).json(createdCar)
})

export default router