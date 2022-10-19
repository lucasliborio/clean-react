import { HttpPostClient, HttpPostParams } from "data/protocols/http/http-post-client"

class HttpPostClientSpy implements HttpPostClient {
  url?: string
  async post(params: HttpPostParams): Promise<string> {
    this.url = params.url
    return Promise.resolve(this.url)
  }
}

export { HttpPostClientSpy }
