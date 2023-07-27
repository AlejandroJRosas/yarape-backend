import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { handleControllerError } from '../../../utils/responses/handleControllerError'
import camelizeObject from '../../../utils/camelizeObject'
import { getCategoryDataFromRequestBody } from '../_utils/getDataFromRQBody.util'

export const addCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const newCategory = await getCategoryDataFromRequestBody(req)

    const insertar = await pool.query({
      text: `
        INSERT INTO categories (
          description
        ) 
        VALUES ($1) 
        RETURNING category_id
      `,
      values: newCategory
    })
    const insertedId: string = insertar.rows[0].category_id
    const response = await pool.query({
      text: `
        SELECT 
          * 
        FROM 
          categories 
        WHERE 
          category_id = $1
      `,
      values: [insertedId]
    })
    return res.status(STATUS.CREATED).json(camelizeObject(response.rows[0]))
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
