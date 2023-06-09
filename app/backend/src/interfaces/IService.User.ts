import { Request } from 'express';

interface IServiceUser {
  login(req: Request): Promise<{ status: number, message: unknown }>;
  getUserById(id: number): Promise<{ status: number, message: unknown }>;
}

export default IServiceUser;
