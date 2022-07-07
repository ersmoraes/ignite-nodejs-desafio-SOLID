import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    let usersAll;

    try {
      usersAll = this.listAllUsersUseCase.execute({ user_id: String(user_id) });
      return response.json(usersAll);
    } catch (error) {
      return response.status(400).json({ error: `${error}` });
    }
  }
}

export { ListAllUsersController };
