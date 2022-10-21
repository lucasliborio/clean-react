import { AxiosHttpClient } from "./axios-http-client"
import { faker } from "@faker-js/faker"
import { HttpPostParams } from "@/data/protocols/http"
import { mockAxios } from "@/infra/test"
import axios from "axios"

afterEach(() => {
  jest.clearAllMocks()
})

jest.mock('axios')
type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}
const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}
const mockPostParams = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.datatype.json()
})
describe('AxiosHttpClient', () => {
  test('should call axios with correct URL and Body values', async () => {
    const { url, body } = mockPostParams()
    const { sut, mockedAxios } = makeSut()
    await sut.post({ url, body })
    expect(mockedAxios.post).toHaveBeenCalledWith(url, body)
  })
  // eslint-disable-next-line @typescript-eslint/require-await
  test('should call axios with correct URL and Body values', async () => {
    const { url, body } = mockPostParams()
    const { sut, mockedAxios } = makeSut()
    const promise = await sut.post({ url, body })
    const { data, status } = await mockedAxios.post.mock.results[0].value
    expect(promise).toEqual({
      body: data,
      statusCode: status
    })
  })
})
