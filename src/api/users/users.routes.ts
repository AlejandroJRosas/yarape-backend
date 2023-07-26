import { Router } from 'express'
import { schemaGuard } from '../../middlewares/schemaGuard'
import { usersSchema } from './users.schema'
import { paginationGuard } from '../../middlewares/paginationGuard'
import { tokenGuard } from '../../middlewares/tokenGuard'
import { verifyToken } from '../../middlewares/auth'
import { getUsers } from './get.action'
import { getUserById } from './getById.action'
import { addUser } from './add.action'
import { deleteUser } from './delete.action'

const router = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
router.get('/', paginationGuard(), getUsers)
router.get('/:userId', getUserById)
router.post('/', schemaGuard(usersSchema), addUser)
router.delete('/:userId', tokenGuard(), verifyToken(), deleteUser)

export default router
