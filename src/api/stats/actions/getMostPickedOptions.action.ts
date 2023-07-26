import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { handleControllerError } from '../../../utils/responses/handleControllerError'

export const getMostPickedOptions = async (
  _: Request,
  res: Response
): Promise<Response> => {
  try {
    const { rows: avg } = await pool.query({
      text: `
        SELECT
          qo.category_id,
          qo.question_id,
          qo.option_id,
          qo.description AS x,
          COALESCE(COUNT(a.option_id), 0) AS y
        FROM
          quest_options AS qo
          JOIN questions AS q ON qo.category_id = q.category_id AND qo.question_id = q.question_id
          LEFT JOIN answers AS a ON q.category_id = a.category_id AND q.question_id = a.question_id AND qo.option_id = a.option_id
        GROUP BY
          qo.category_id,
          qo.question_id,
          qo.option_id,
          qo.description
        ORDER BY
          qo.category_id,
          qo.question_id,
          qo.option_id;
      `
    })

    return res.status(STATUS.OK).json({
      items: [...avg]
    })
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
