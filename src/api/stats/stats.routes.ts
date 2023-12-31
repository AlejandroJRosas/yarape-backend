import { Router } from 'express'
import { getSurveyedQuantity } from './actions/getSurveyedQuantity.action'
import { getAvgUcabVsNonUcab } from './actions/getAvgUcabVsNonUcab.action'
import { getAvgCampusVs } from './actions/getAvgCampusVs.action'
import { getAvgStdVsWrk } from './actions/getAvgStdVsWrk.action'
import { getMostPickedOptions } from './actions/getMostPickedOptions.action'

const router = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
router.get('/surveyed-quantity', getSurveyedQuantity)
router.get('/ucab-vs-non-ucab', getAvgUcabVsNonUcab)
router.get('/avg-campus-vs', getAvgCampusVs)
router.get('/avg-std-vs-wrk', getAvgStdVsWrk)
router.get('/most-picked-options/:categoryId/:questionId', getMostPickedOptions)

export default router
