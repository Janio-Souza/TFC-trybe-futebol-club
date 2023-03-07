import { hashSync, compareSync } from 'bcryptjs';

export default class bcrypt {
  private _saltRounds: number;

  constructor() {
    this._saltRounds = 10;
  }

  public convert(password: string): string {
    const hash = hashSync(password, this._saltRounds);
    return hash;
  }

  static decript(password: string, hash: string) : boolean {
    const result = compareSync(password, hash);
    return result;
  }
}
