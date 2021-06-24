import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface IUserRequest{
  name:string
}

export class CreateTagService {

  async execute(name : string){
    const tagsRepository = getCustomRepository(TagsRepositories);
    if (!name) {
      throw new Error("name incorrect");
    }

    const tagAlreadyExists = await tagsRepository.findOne({
      name
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagsRepository.create({
      name
    })

    await tagsRepository.save(tag);
    return tag;
  }

}