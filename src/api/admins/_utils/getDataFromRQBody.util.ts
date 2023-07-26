import { Request } from 'express'
import bcrypt from 'bcrypt'
import { AUTH_ROUNDS } from '../../../config'

export const getAdminsDataFromRequestBody = async (req: Request): Promise<any[]> => {
  const { name, email, password } = req.body
  const passwordHash = await bcrypt.hash(password, Number(AUTH_ROUNDS))
  const newAdmin = [name, email, passwordHash]
  return newAdmin
}
