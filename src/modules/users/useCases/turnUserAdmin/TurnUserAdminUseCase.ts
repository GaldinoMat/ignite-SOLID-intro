import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const foundAdmin = this.usersRepository.findById(user_id);

    if (!foundAdmin) throw new Error("User not found");

    const newAdmin = this.usersRepository.turnAdmin(foundAdmin);

    return newAdmin;
  }
}

export { TurnUserAdminUseCase };
