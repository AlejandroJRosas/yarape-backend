import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { handleControllerError } from '../../../utils/responses/handleControllerError'
import camelizeObject from '../../../utils/camelizeObject'

export const getAllQuestions = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { rows: responseCategories } = await pool.query({
      text: `
      SELECT 
        category_id,
        description
      FROM 
        categories
      `
    })
    const { rows: responseQuestions } = await pool.query({
      text: `
      SELECT 
        category_id,
        question_id,
        question_key,
        description
      FROM 
        questions
      `
    })
    const { rows: responseOptions } = await pool.query({
      text: `
      SELECT
        category_id,
        question_id,
        option_id,
        description,
        amount
      FROM
        quest_options
      `
    })

    const result = responseCategories.map((category) => ({
      categoryId: category.category_id,
      description: category.description,
      questions: responseQuestions
        .filter((question) => question.category_id === category.category_id)
        .map((question) => ({
          questionId: question.question_id,
          questionKey: question.question_key,
          description: question.description,
          options: responseOptions
            .filter(
              (option) =>
                option.category_id === question.category_id &&
                option.question_id === question.question_id
            )
            .map((option) => ({
              optionId: option.option_id,
              description: option.description,
              amount: option.amount
            }))
        }))
    }))
    return res.status(STATUS.OK).json(camelizeObject(result))
  } catch (error: unknown) {
    return handleControllerError(error, res)
  }
}
