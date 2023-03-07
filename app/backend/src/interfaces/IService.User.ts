import { Request } from 'express';

interface IServiceUser {
  login(req: Request): Promise<{ status: number, menssage: unknown }>;
}

export default IServiceUser;
