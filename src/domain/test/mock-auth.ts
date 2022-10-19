import { faker } from "@faker-js/faker"
import { AuthParams } from "domain/usecases/authentication"

export const MockAuthParams = (): AuthParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}
