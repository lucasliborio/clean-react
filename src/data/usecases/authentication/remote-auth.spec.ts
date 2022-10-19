import { RemoteAuthentication } from "./remote-auth"
import { HttpPostClientSpy } from "data/test/mock-http-client"
import { MockAuthParams } from "domain/test/mock-auth"
import { faker } from '@faker-js/faker'

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
    const url = faker.internet.url()
    const authParams = MockAuthParams()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(authParams)
    expect(httpPostClientSpy.url).toBe(url)
  })
  test('Should call httpPostClient with correct body', async () => {
    const authParams = MockAuthParams()
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(authParams)
    expect(httpPostClientSpy.body).toEqual(authParams)
  })
})
