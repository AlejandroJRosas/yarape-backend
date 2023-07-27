import { Router } from 'express'
import { signIn } from './actions/signIn.action'
import { schemaGuard } from '../../middlewares/schemaGuard'
import { loginSchema } from './login.schema'

const router = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
router.post('/', schemaGuard(loginSchema), signIn)

export default router
