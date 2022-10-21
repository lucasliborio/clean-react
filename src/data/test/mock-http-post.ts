import { faker } from "@faker-js/faker"
import { HttpPostParams } from "../protocols/http"

export const mockPostParams = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.datatype.json()
})
