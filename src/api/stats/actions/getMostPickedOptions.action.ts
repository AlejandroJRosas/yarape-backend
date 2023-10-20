import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { handleControllerError } from '../../../utils/responses/handleControllerError'

export const getMostPickedOptions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // const discriminantOnlyOption = 'u.is_ucab_member = true AND'
    // const discriminantCampusOption = 'u.campus_id = 1 AND'
    // const discriminantRoleOption = 'u.role IN (\'T\')'

    const text = `
      SELECT
        q.description AS description,
        qo.description AS x,
        COUNT(a.option_id) AS y
      FROM
        questions AS q
        JOIN quest_options AS qo
          ON q.category_id = qo.category_id
          AND q.question_id = qo.question_id
        LEFT JOIN answers AS a
          ON qo.category_id = a.category_id
          AND qo.question_id = a.question_id
          AND qo.option_id = a.option_id,
        users AS u
      WHERE
        a.user_id = u.user_id AND
        q.category_id = $1 AND
        q.question_id = $2
      GROUP BY
        q.description,
        qo.description,
        q.category_id,
        q.question_id;
    `

    if (req.query?.onlyUcab === 'true') {
      console.log('hola')
    }

    const { rows: most } = await pool.query({
      text,
      values: [req.params.categoryId, req.params.questionId]
    })

    return res.status(STATUS.OK).json({
      items: [...most]
    })
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
