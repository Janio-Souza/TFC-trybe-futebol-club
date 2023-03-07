import { ModelStatic } from 'sequelize';
import { Request } from 'express';
import UserModel from '../database/models/UserModel';
import jwtTokenGenerate from '../utils/jwt';
import IServiceUser from '../interfaces/IService.User';

class UserService implements IServiceUser {
  protected model: ModelStatic<UserModel> = UserModel;

  async login(req: Request): Promise<{ status: number; menssage: unknown; }> {
    const { email } = req.body;
    const user = await this.model.findOne({ where: { email } });

    const token = jwtTokenGenerate({ id: user?.id, role: user?.role });
    return { status: 200, menssage: { token } };
  }
}

export default UserService;
