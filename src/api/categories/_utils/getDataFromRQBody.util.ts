import { Request } from 'express'

export const getCategoryDataFromRequestBody = async (req: Request): Promise<any[]> => {
  const { description } = req.body
  const newCategory = [description]
  return newCategory
}
