import { sign, SignOptions } from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET as string;

const jwtTokenGenerate = (payload: unknown) => {
  const jwtConfig: SignOptions = {
    algorithm: 'HS256',
  };

  const token = sign({ payload }, secret, jwtConfig);
  return token;
};

export default jwtTokenGenerate;
