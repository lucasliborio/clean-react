import { HttpPostClient } from "data/protocols/http/http-post-client"

class HttpPostClientSpy implements HttpPostClient {
  url?: string
  async post(url: string): Promise<string> {
    this.url = url
    return Promise.resolve(this.url)
  }
}

export { HttpPostClientSpy }
