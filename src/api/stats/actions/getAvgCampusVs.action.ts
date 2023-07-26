import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { handleControllerError } from '../../../utils/responses/handleControllerError'

export const getAvgCampusVs = async (
  _: Request,
  res: Response
): Promise<Response> => {
  try {
    const { rows: avg } = await pool.query({
      text: `
        SELECT
          c.name AS x,
          ROUND(COALESCE(AVG(u.footprint), 0)::numeric, 2)::float8 as y
        FROM 
          campus AS c,
          users AS u
        WHERE
          c.campus_id = u.campus_id
        GROUP BY c.name;
      `
    })

    return res.status(STATUS.OK).json({
      items: [...avg]
    })
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
