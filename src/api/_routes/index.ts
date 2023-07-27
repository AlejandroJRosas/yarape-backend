import { Router } from 'express'

import loginRouter from '../login/login.routes'
import adminsRouter from '../admins/admins.routes'
import usersRouter from '../users/users.routes'
import statsRouter from '../stats/stats.routes'
import categoriesRouter from '../categories/categories.routes'
import { getAllCareers } from '../careers/actions/getAll.action'
import { getAllQuestions } from '../questions/actions/getAll.action'

const router = Router()

router.use('/login', loginRouter)
router.use('/admins', adminsRouter)
router.use('/users', usersRouter)
router.use('/stats', statsRouter)
router.use('/categories', categoriesRouter)

/* eslint-disable @typescript-eslint/no-misused-promises */
// Application Info Endpoints
router.get('/getAllCareers', getAllCareers)
router.get('/getAllQuestions', getAllQuestions)

export default router
