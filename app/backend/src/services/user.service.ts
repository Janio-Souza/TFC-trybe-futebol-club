import { ModelStatic } from 'sequelize';
import { Request } from 'express';
import UserModel from '../database/models/UserModel';
import jwtTokenGenerate from '../utils/jwt';
import IServiceUser from '../interfaces/IService.User';
import validateInputs from './schemas/schemas';
import bcrypt from '../utils/bcrypt';

const message = 'Invalid email or password';

class UserService implements IServiceUser {
  protected model: ModelStatic<UserModel> = UserModel;

  async login(req: Request): Promise<{ status: number; message: unknown; }> {
    const { email, password } = req.body;
    const user = await this.model.findOne({ where: { email } });

    const { error } = validateInputs({ email, password });
    if (error) return { status: 401, message: { message } };

    if (!user || !bcrypt.decript(password, user.password)) {
      return { status: 401, message: { message } };
    }

    const token = jwtTokenGenerate({ id: user?.id, role: user?.role });
    return { status: 200, message: { token } };
  }

  async getUserById(id: number): Promise<{ status: number; message: unknown }> {
    const user = await this.model.findOne({ where: { id } });
    return { status: 200, message: user?.role };
  }
}

export default UserService;
