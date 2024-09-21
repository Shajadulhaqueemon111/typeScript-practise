import express, { Request, Response } from 'express'
import cors from 'cors'
import { StudentsRoute } from './app/modiuls/students/students.route'
const app = express()

app.use(express.json())
app.use(cors())

//application route
app.use('/api/v1/students', StudentsRoute)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// console.log(process.cwd())
export default app
