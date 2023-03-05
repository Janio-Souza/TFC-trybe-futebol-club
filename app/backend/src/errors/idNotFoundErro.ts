export default class IdNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Not Found Error';
    this.stack = '404';
  }
}
