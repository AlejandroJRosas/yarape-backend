import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { StatusError } from '../../../utils/responses/status-error'
import { handleControllerError } from '../../../utils/responses/handleControllerError'
import { getCategoryDataFromRequestBody } from '../_utils/getDataFromRQBody.util'

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const updatedCategory = await getCategoryDataFromRequestBody(req)
    updatedCategory.push(req.params.categoryId)
    const response = await pool.query({
      text: `
        UPDATE 
          categories 
        SET 
          description = $1
        WHERE 
          category_id = $2
      `,
      values: updatedCategory
    })
    if (response.rowCount === 0) {
      throw new StatusError({
        message: `No se pudo encontrar el registro de id: ${req.params.categoryId}`,
        statusCode: STATUS.NOT_FOUND
      })
    }
    return res.status(STATUS.OK).json({ message: 'Administrador modificado exitosamente' })
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
