import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const newId = user_id.toString();

      const newAdmin = this.turnUserAdminUseCase.execute({ user_id: newId });

      return response.status(200).json(newAdmin);
    } catch (error) {
      console.log(error);
      return response.status(404).json({ error });
    }
  }
}

export { TurnUserAdminController };
