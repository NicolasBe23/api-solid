import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-users-repository.js";
import { RegisterUseCase } from "../register.js";

export function makeRegisterUseCase() {
  const usersRepository = new InMemoryUsersRepository();
  const registerUseCase = new RegisterUseCase(usersRepository);

  return registerUseCase;
}
