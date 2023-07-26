import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { handleControllerError } from '../../../utils/responses/handleControllerError'

export const getAvgUcabVsNonUcab = async (
  _: Request,
  res: Response
): Promise<Response> => {
  try {
    const { rows: responseIsUcab } = await pool.query({
      text: `
        SELECT
          ROUND(COALESCE(AVG(footprint), 0)::numeric, 2)::float8 as y
        FROM 
          users
        WHERE
          is_ucab_member = true
      `
    })

    const { rows: responseIsNotUcab } = await pool.query({
      text: `
        SELECT
          ROUND(COALESCE(AVG(footprint), 0)::numeric, 2)::float8 as y
        FROM 
          users
        WHERE
          is_ucab_member = false
      `
    })

    const result = [
      {
        x: 'Perteneciente',
        y: responseIsUcab[0].y
      },
      {
        x: 'No perteneciente',
        y: responseIsNotUcab[0].y
      }
    ]

    return res.status(STATUS.OK).json({
      items: [...result]
    })
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
