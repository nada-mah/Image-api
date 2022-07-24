import express, { Request, Response } from 'express'
import path from 'path'
import fs from 'fs'
import { resize } from '../../../utility/resize'
const firstroute = express.Router()

firstroute.get('/', async (req: Request, res: Response): Promise<void> => {
  const query = req.query
  const { fileName, widths, heights } = query
  const width = parseInt(widths as string)
  const height = parseInt(heights as string)
  //location of original images
  const absolutePath = path.resolve('images/full/' + fileName + '.jpg')
  if (fileName) {
    if (fs.existsSync(absolutePath)) {
      if (width || height) {
        //validate width and height
        if (width > 0 && height > 0) {
          //call resize utility
          const place = resize(width, height, fileName as string)
          res.sendFile((await Promise.resolve(place)).toString())
        } else {
          res.status(400).send('invalid height or width, must be positive')
        }
      } else {
        res.sendFile(absolutePath)
      }
    } else {
      res.status(400).send('invalid file name')
    }
  } else {
    res.status(400).send('missing file name')
  }
})

export default firstroute
