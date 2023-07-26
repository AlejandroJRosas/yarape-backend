import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { handleControllerError } from '../../../utils/responses/handleControllerError'

export const getAvgStdVsWrk = async (
  _: Request,
  res: Response
): Promise<Response> => {
  try {
    const { rows: responseStudents } = await pool.query({
      text: `
        SELECT
          ROUND(COALESCE(AVG(footprint), 0)::numeric, 2)::float8 as y
        FROM 
          users
        WHERE
          is_ucab_member = true AND
          role = 'E'
      `
    })

    const { rows: responseWorkers } = await pool.query({
      text: `
        SELECT
          ROUND(COALESCE(AVG(footprint), 0)::numeric, 2)::float8 as y
        FROM 
          users
        WHERE
          is_ucab_member = true AND
          role = 'T'
      `
    })

    const result = [
      {
        x: 'Estudiantes',
        y: responseStudents[0].y
      },
      {
        x: 'Trabajadores',
        y: responseWorkers[0].y
      }
    ]

    return res.status(STATUS.OK).json({
      items: [...result]
    })
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
