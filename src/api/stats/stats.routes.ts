import { Router } from 'express'
import { getSurveyedQuantity } from './getSurveyedQuantity.action'
import { getAvgUcabVsNonUcab } from './getAvgUcabVsNonUcab.action'
import { getAvgCampusVs } from './getAvgCampusVs.action'
import { getAvgStdVsWrk } from './getAvgStdVsWrk.action'
import { getMostPickedOptions } from './getMostPickedOptions.action'

const router = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
router.get('/surveyed-quantity', getSurveyedQuantity)
router.get('/ucab-vs-non-ucab', getAvgUcabVsNonUcab)
router.get('/avg-campus-vs', getAvgCampusVs)
router.get('/avg-std-vs-wrk', getAvgStdVsWrk)
router.get('/most-picked-options', getMostPickedOptions)

export default router
