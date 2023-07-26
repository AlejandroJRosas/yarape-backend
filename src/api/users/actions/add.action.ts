import { Request, Response } from 'express'
import { pool } from '../../../database'
import { STATUS } from '../../../utils/constants'
import { handleControllerError } from '../../../utils/responses/handleControllerError'
import camelizeObject from '../../../utils/camelizeObject'
import { UserDataCreate } from '../users.schema'

const getUsersDataFromRequestBody = async (req: Request): Promise<any[]> => {
  const {
    name,
    isUcabMember,
    footprint,
    campusId,
    role,
    careerId,
    items
  } = req.body as UserDataCreate
  const newUser = [
    name,
    isUcabMember,
    footprint,
    campusId ?? null,
    role ?? null,
    (role === 'T') ? null : careerId ?? null
  ] as UserCreatePayload
  const newItems = items.map((item) => [
    +item.categoryId,
    +item.questionId,
    +item.optionId
  ] as AnswerCreatePayload)
  return [newUser, newItems]
}

export const addUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const [newUser, newAnswers] = await getUsersDataFromRequestBody(req)
    const insertedUserId = await createNewUser(newUser)
    for (let i = 0; i < newAnswers.length; i++) {
      await insertAnswers(newAnswers[i], insertedUserId)
    }
    const responseUser = await pool.query({
      text: `
        SELECT 
          * 
        FROM 
          users 
        WHERE 
          user_id = $1
      `,
      values: [insertedUserId]
    })
    return res.status(STATUS.CREATED).json(camelizeObject(responseUser.rows[0]))
  } catch (error: unknown) {
    console.log(error)
    return handleControllerError(error, res)
  }
}

async function createNewUser (payload: UserCreatePayload): Promise<string> {
  const insertService = await pool.query({
    text: `
    INSERT INTO users (
      name, 
      is_ucab_member, 
      footprint,
      campus_id, 
      role, 
      career_id
    ) 
    VALUES 
      ($1, $2, $3, $4, $5, $6) 
    RETURNING user_id
    `,
    values: payload
  })
  return insertService.rows[0].user_id as string
}

async function insertAnswers (payload: AnswerCreatePayload, insertedUserId: string): Promise<void> {
  await pool.query({
    text: `
      INSERT INTO answers (
        category_id, 
        question_id, 
        option_id,
        user_id
      ) VALUES ($1, $2, $3, $4)
    `,
    values: [...payload, insertedUserId]
  })
}

type UserCreatePayload = [string, boolean, number, number, string, number]
type AnswerCreatePayload = [number, number, number]
