export class UnexpectedError extends Error {
  constructor() {
    super('somenthing goes wrong, please try again')
    this.name = "UnexpectedError"
  }
}
