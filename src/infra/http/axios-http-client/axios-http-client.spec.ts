import { AxiosHttpClient } from "./axios-http-client"
import { faker } from "@faker-js/faker"
import axios from "axios"
import { HttpPostParams } from "@/data/protocols/http"

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
const mockPostParams = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {
    name: faker.internet.userName()
  }
})
describe('AxiosHttpClient', () => {
  test('should call axios with correct URL and Body values', async () => {
    const { url, body } = mockPostParams()
    const sut = makeSut()
    await sut.post({ url, body })
    expect(mockedAxios.post).toHaveBeenCalledWith(url, body)
  })
})
