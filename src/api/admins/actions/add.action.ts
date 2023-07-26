import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { handleControllerError } from '../../../utils/responses/handleControllerError'
import camelizeObject from '../../../utils/camelizeObject'
import { getAdminsDataFromRequestBody } from '../_utils/getDataFromRQBody.util'

export const addAdmin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const newAdmin = await getAdminsDataFromRequestBody(req)

    const insertar = await pool.query({
      text: `
        INSERT INTO admins (name, email, password) 
        VALUES 
          ($1, $2, $3) 
        RETURNING admin_id
      `,
      values: newAdmin
    })
    const insertedId: string = insertar.rows[0].admin_id
    const response = await pool.query({
      text: `
        SELECT 
          * 
        FROM 
          admins 
        WHERE 
          admin_id = $1
      `,
      values: [insertedId]
    })
    return res.status(STATUS.CREATED).json(camelizeObject(response.rows[0]))
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
