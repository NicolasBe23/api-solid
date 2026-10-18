import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-users-repository.js";
import { AuthenticateUseCase } from "../authenticate.js";

export function makeAuthenticateUseCase() {
  const usersRepository = new InMemoryUsersRepository();
  const authenticateUseCase = new AuthenticateUseCase(usersRepository);

  return authenticateUseCase;
}
