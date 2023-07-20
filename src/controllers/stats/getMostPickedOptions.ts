import { Request, Response } from 'express'
import { pool } from '../../database'
import { STATUS } from '../../utils/constants'
import { handleControllerError } from '../../utils/responses/handleControllerError'

export const getMostPickedOptions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { rows: avg } = await pool.query({
      text: `
        SELECT
          qo.description AS x,
          COUNT(a.option_id) as y
        FROM
          quest_options qo
          LEFT JOIN answers a
            ON qo.category_id = a.category_id
            AND qo.question_id = a.question_id
            AND qo.option_id = a.option_id
        GROUP BY
          qo.description;
      `,
      values: [req.params.categoryId, req.params.questionId]
    })

    return res.status(STATUS.OK).json({
      items: [...avg]
    })
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
