import { Request, Response } from 'express'
import { pool } from '../../database'
import { STATUS } from '../../utils/constants'
import { handleControllerError } from '../../utils/responses/handleControllerError'

export const getSurveyedQuantity = async (
  _: Request,
  res: Response
): Promise<Response> => {
  try {
    const { rows } = await pool.query({
      text: `
        SELECT
          COUNT(*)
        FROM 
          users
      `
    })

    const { rows: responseCampus } = await pool.query({
      text: `
        SELECT
          c.name AS x,
          COALESCE(COUNT(*), 0) AS y
        FROM 
          campus AS c
        INNER JOIN users AS u ON c.campus_id = u.campus_id
        GROUP BY x
      `
    })

    const result = [
      ...responseCampus,
      {
        x: 'no pertenece a la ucab',
        y: Number(rows[0].count) -
          (Number(responseCampus[0].y) + Number(responseCampus[1].y))
      }
    ]

    return res.status(STATUS.OK).json({
      total: rows[0].count,
      items: [...result]
    })
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
