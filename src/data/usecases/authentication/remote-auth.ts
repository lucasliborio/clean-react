import { Authentication, AuthParams } from "domain/usecases/authentication"
import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { AccountModel } from "domain/model/account-model"

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient
  ) { }

  async auth(params: AuthParams): Promise<AccountModel> {
    await this.HttpPostClient.post({
      url: this.url,
      body: params
    })
    return Promise.resolve({ accessToken: 'token' })
  }
}
