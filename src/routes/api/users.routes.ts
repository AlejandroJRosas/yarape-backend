import { Router } from 'express'
import { schemaGuard } from '../../middlewares/schemaGuard'
import { usersSchema } from '../../schemas/users.schema'
import { paginationGuard } from '../../middlewares/paginationGuard'
import { tokenGuard } from '../../middlewares/tokenGuard'
import { verifyToken } from '../../middlewares/auth'
import { getUsers } from '../../controllers/users/get.action'
import { getUserById } from '../../controllers/users/getById.action'
import { addUser } from '../../controllers/users/add.action'
import { deleteUser } from '../../controllers/users/delete.action'

const router = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
router.get('/', paginationGuard(), getUsers)
router.get('/:userId', getUserById)
router.post('/', schemaGuard(usersSchema), addUser)
router.delete('/:userId', tokenGuard(), verifyToken(), deleteUser)

export default router
