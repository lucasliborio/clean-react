import { RemoteAuthentication } from "./remote-auth"
import { HttpPostClientSpy } from "data/test/mock-http-client"
import faker from '@faker-js/faker'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}
const makeSut = (url: string): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}
describe('Remote Authentication', () => {
  test('Should call httpPostClient with correct URL', async () => {
    const { sut, httpPostClientSpy } = makeSut('any_url')
    await sut.auth({ email: 'lucas', password: 'other' })
    expect(httpPostClientSpy.url).toBe('any_url')
  })
})
