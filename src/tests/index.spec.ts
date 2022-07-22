import supertest from 'supertest'
import app from '../index'

// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  it('test hello world endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
  it('test image endpoint', async () => {
    const response = await request.get('/img')
    expect(response.status).toBe(400)
  })
  it('test image endpoint', async () => {
    const response = await request.get('/img?fileName=encenadaport')
    expect(response.status).toBe(200)
  })
  it('test image endpoint with invalid name', async () => {
    const response = await request.get('/img?fileName=encenaort')
    expect(response.status).toBe(400)
  })
  it('test image endpoint with valid width and height', async () => {
    const response = await request.get(
      '/img?fileName=encenadaport&widths=345&heights=190'
    )
    expect(response.status).toBe(200)
  })
  it('test image endpoint with invalid width and height', async () => {
    const response = await request.get(
      '/img?fileName=encenadaport&widths=-45&heights=-90'
    )
    expect(response.status).toBe(400)
  })
})
