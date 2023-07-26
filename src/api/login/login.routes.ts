import { Router } from 'express'
import { signIn } from './login.controller'
import { schemaGuard } from '../../middlewares/schemaGuard'
import { loginSchema } from './login.schema'

const router = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
router.post('/', schemaGuard(loginSchema), signIn)

export default router
