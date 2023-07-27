import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { handleControllerError } from '../../../utils/responses/handleControllerError'
import camelizeObject from '../../../utils/camelizeObject'

export const getAllCategories = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { rows: responseCareers } = await pool.query({
      text: `
        SELECT 
          *
        FROM 
          categories
      `
    })
    return res.status(STATUS.OK).json(camelizeObject(responseCareers))
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
