import { Authentication, AuthParams } from "@/domain/usecases/authentication"
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { AccountModel } from "@/domain/model/account-model"
import { HttpStatusCode } from "@/data/protocols/http/http-response"
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error"
import { UnexpectedError } from "@/domain/errors/unexpected-error"

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient<AuthParams, AccountModel>
  ) { }

  async auth(params: AuthParams): Promise<AccountModel> {
    const responseHttp = await this.HttpPostClient.post({
      url: this.url,
      body: params
    })
    switch (responseHttp.statusCode) {
      case HttpStatusCode.ok: return responseHttp.body
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
