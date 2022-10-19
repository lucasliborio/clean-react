import { faker } from "@faker-js/faker"
import { AuthParams } from "domain/usecases/authentication"
import { AccountModel } from "../model/account-model"

export const mockAuthParams = (): AuthParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}

export const mockAccountModel = (): AccountModel => {
  return {
    accessToken: faker.random.alphaNumeric()
  }
}
