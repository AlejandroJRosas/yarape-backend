import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { handleControllerError } from '../../../utils/responses/handleControllerError'

export const getAllCareers = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { rows: responseCareers } = await pool.query({
      text: `
      SELECT 
        c.career_id AS id, 
        c.name AS name, 
        array_agg(cam.name) AS campus
      FROM 
        careers AS c,
        campus AS cam,
        careers_in_campus AS cic
      WHERE
        c.career_id = cic.career_id AND
        cic.campus_id = cam.campus_id
      GROUP BY
        c.career_id,
        c.name;
      `
    })
    const arr = responseCareers.map((row) => ({
      id: row.id,
      name: row.name,
      campus: row.campus.replace(/[{}]/g, '').split(',')
    }))
    return res.status(STATUS.OK).json(arr)
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
