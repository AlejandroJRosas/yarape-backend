import { Router } from 'express'
import { schemaGuard } from '../../middlewares/schemaGuard'
import { paginationGuard } from '../../middlewares/paginationGuard'
import { tokenGuard } from '../../middlewares/tokenGuard'
import { verifyToken } from '../../middlewares/auth'
import { adminsSchema } from './admins.schema'
import { getAdmins } from './actions/get.action'
import { getAdminById } from './actions/getById.action'
import { addAdmin } from './actions/add.action'
import { updateAdmin } from './actions/update.action'
import { deleteAdmin } from './actions/delete.action'

const router = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
router.get('/', tokenGuard(), verifyToken(), paginationGuard(), getAdmins)
router.get('/:adminId', tokenGuard(), verifyToken(), getAdminById)
router.post('/', tokenGuard(), verifyToken(), schemaGuard(adminsSchema), addAdmin)
router.put('/:adminId', tokenGuard(), verifyToken(), schemaGuard(adminsSchema), updateAdmin)
router.delete('/:adminId', tokenGuard(), verifyToken(), deleteAdmin)

export default router
