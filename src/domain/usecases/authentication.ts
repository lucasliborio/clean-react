import { AccountModel } from "domain/model/account-model"

export type AuthParams = {
  email: string
  password: string
}
export interface Authentication {
  auth(params: AuthParams): Promise<AccountModel>
}
