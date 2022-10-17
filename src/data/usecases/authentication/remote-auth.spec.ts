import { RemoteAuthentication } from "./remote-auth"
import { HttpPostClientSpy } from "data/test/mock-http-client"

describe('Remote Authentication', () => {
  test('Should call httpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostSpy)
    await sut.auth({ email: 'lucas', password: 'other' })
    expect(httpPostSpy.url).toBe(url)
  })
})
