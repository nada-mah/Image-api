import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import firstroute from './routes/v1/imges'
dotenv.config()
const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('dev'))
// add routing for / path
app.get('/', (_req: Request, res: Response) => {
  res.json({
    greeting: 'Hello World!!!'
  })
})

app.use('/img', firstroute)
// start express server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is starting at prot:${PORT}`)
})
export default app
