export default class NotFound extends Error {
  constructor(message: string) {
    super(message);
    (this.name = 'NotFound'), (this.stack = '404');
  }
}
