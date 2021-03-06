import {Request, Response, NextFunction} from "express"

export function ensureAdmin(request: Request, response: Response, next: NextFunction){
  // verificar se o usuário é admin
  const admin = true;

  if (admin) {
    return next();
  }
  return response.status(401).json({error: "usuário não permitido"})
}