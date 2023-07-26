import { Router } from 'express'

import loginRouter from '../login/login.routes'
import adminsRouter from '../admins/admins.routes'
import usersRouter from '../users/users.routes'
import statsRouter from '../stats/stats.routes'
import { getAllCareers } from '../careers/careers.controller'
import { getAllQuestions } from '../questions/questions.controller'

const router = Router()

router.use('/login', loginRouter)
router.use('/admins', adminsRouter)
router.use('/users', usersRouter)
router.use('/stats', statsRouter)

/* eslint-disable @typescript-eslint/no-misused-promises */
// Application Info Endpoints
router.get('/getAllCareers', getAllCareers)
router.get('/getAllQuestions', getAllQuestions)

export default router
