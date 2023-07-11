import { Request, Response } from 'express'
import { pool } from '../database'
import { STATUS } from '../utils/constants'
import { handleControllerError } from '../utils/responses/handleControllerError'
import camelizeObject from '../utils/camelizeObject'

export const getAllCareers = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response = await pool.query({
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
    return res.status(STATUS.OK).json(camelizeObject(response.rows))
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
