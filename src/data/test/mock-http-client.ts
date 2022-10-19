import { HttpPostClient, HttpPostParams } from "data/protocols/http/http-post-client"

class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  async post(params: HttpPostParams): Promise<string> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.url)
  }
}

export { HttpPostClientSpy }
