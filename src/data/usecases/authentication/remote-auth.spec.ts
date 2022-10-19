import { RemoteAuthentication } from "./remote-auth"
import { HttpPostClientSpy } from "@/data/test/mock-http-client"
import { MockAuthParams } from "@/domain/test/mock-auth"
import { faker } from '@faker-js/faker'

import { HttpStatusCode } from "@/data/protocols/http/http-response"
import { UnexpectedError } from "@/domain/errors/unexpected-error"
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error"

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
  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const authParams = MockAuthParams()
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    httpPostClientSpy.response.statusCode = 401
    const responseHttp = sut.auth(authParams)
    await expect(responseHttp).rejects.toThrow(new InvalidCredentialsError())
  })
  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const authParams = MockAuthParams()
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    httpPostClientSpy.response.statusCode = HttpStatusCode.badRequest
    const responseHttp = sut.auth(authParams)
    await expect(responseHttp).rejects.toThrow(new UnexpectedError())
  })
  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const authParams = MockAuthParams()
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    httpPostClientSpy.response.statusCode = HttpStatusCode.serverError
    const responseHttp = sut.auth(authParams)
    await expect(responseHttp).rejects.toThrow(new UnexpectedError())
  })
  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const authParams = MockAuthParams()
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    httpPostClientSpy.response.statusCode = HttpStatusCode.notFound
    const responseHttp = sut.auth(authParams)
    await expect(responseHttp).rejects.toThrow(new UnexpectedError())
  })
})
