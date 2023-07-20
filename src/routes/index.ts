import express from 'express'

import loginRouter from './api/login.routes'
import adminsRouter from './api/admins.routes'
import usersRouter from './api/users.routes'
import statsRouter from './api/stats.routes'
import { getAllCareers } from '../controllers/careers.controller'
import { getAllQuestions } from '../controllers/questions.controller'

const router = express.Router()

router.use('/login', loginRouter)
router.use('/admins', adminsRouter)
router.use('/users', usersRouter)
router.use('/stats', statsRouter)

/* eslint-disable @typescript-eslint/no-misused-promises */
// Application Info Endpoints
router.get('/getAllCareers', getAllCareers)
router.get('/getAllQuestions', getAllQuestions)

export default router
