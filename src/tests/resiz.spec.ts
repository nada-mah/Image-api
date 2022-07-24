import fs from 'fs'
import { resize } from '../utility/resize'
// create a request object

describe('test the resize utility', () => {
  const resizedImageDir =
    'C:/Users/ASUS/Desktop/codes/api/images/Resiz/encenadaport-width=345-height=190.jpg'
  const width = 345
  const height = 190
  const fileName = 'encenadaport'
  beforeAll(() => {
    if (fs.existsSync(resizedImageDir)) {
      fs.rmSync(resizedImageDir)
    }
  })
  it('test that new img is created', async () => {
    const newResizedImageDir = resize(width, height, fileName as string)
    expect(
      fs.existsSync((await Promise.resolve(newResizedImageDir)).toString())
    ).toBeTruthy
  })
})
