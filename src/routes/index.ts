import express from 'express'

import loginRouter from './api/login.routes'
import adminsRouter from './api/admins.routes'
import usersRouter from './api/users.routes'

const router = express.Router()

router.use('/login', loginRouter)
router.use('/admins', adminsRouter)
router.use('/users', usersRouter)

export default router
