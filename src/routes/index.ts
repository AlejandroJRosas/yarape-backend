import express from 'express'

import loginRouter from './api/login.routes'
import adminsRouter from './api/admins.routes'

const router = express.Router()

router.use('/login', loginRouter)
router.use('/admins', adminsRouter)

export default router