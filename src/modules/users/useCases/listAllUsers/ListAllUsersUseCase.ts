import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdmin = this.usersRepository.findById(user_id);

    if (!userAdmin) {
      throw new Error("User does not exist!");
    }

    if (!userAdmin.admin) {
      throw new Error("User does not have admin privileges!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
