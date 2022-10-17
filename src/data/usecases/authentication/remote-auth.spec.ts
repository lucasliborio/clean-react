import { HttpPostClient } from "data/protocols/http/http-post-client"
import { RemoteAuthentication } from "./remote-auth"

describe('Remote Authentication', () => {
  test('Should call httpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post(url: string): Promise<string> {
        this.url = url
        return Promise.resolve(this.url)
      }
    }
    const url = 'any_url'
    const httpPostSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostSpy)
    await sut.auth({ email: 'lucas', password: 'otther' })
    expect(httpPostSpy.url).toBe(url)
  })
})
