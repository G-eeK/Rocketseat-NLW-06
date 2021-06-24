import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

export class CreateTagController {

  async handle(request: Request, response: Response){
    try {
      const { name } = request.body;

      const createTagService = new CreateTagService();

      const user = await createTagService.execute(name);

      return response.json(user);

    } catch (err) {
      return response.status(400).json({error:err.message})
    }

  }
}