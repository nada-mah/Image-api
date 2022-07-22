import path from 'path'
import fs from 'fs'
import sharp from 'sharp'

export const resize = async (
  width: number,
  height: number,
  fileName: string
): Promise<string> => {
  //both width and height given
  if (width && height) {
    //location of resized images
    const rezPath = path.resolve(
      'images/Resized/' + fileName + `-width=${width}-height=${height}` + '.jpg'
    )
    const absolutePath = path.resolve('images/full/' + fileName + '.jpg')
    if (fs.existsSync(rezPath)) {
      return rezPath
    } else {
      await sharp(absolutePath)
        .resize({ width: width, height: height })
        .toFile(rezPath)
      return rezPath
    }
    //only width is given
  } else if (width && !height) {
    const rezPath = path.resolve(
      'images/Resized/' + fileName + `-width=${width}` + '.jpg'
    )
    const absolutePath = path.resolve('images/full/' + fileName + '.jpg')
    if (fs.existsSync(rezPath)) {
      return rezPath
    } else {
      await sharp(absolutePath).resize({ width: width }).toFile(rezPath)
      return rezPath
    }
    //only height is given
  } else {
    const rezPath = path.resolve(
      'images/Resized/' + fileName + `-height=${height}` + '.jpg'
    )
    const absolutePath = path.resolve('images/full/' + fileName + '.jpg')
    if (fs.existsSync(rezPath)) {
      return rezPath
    } else {
      await sharp(absolutePath).resize({ height: height }).toFile(rezPath)
      return rezPath
    }
  }
}
